<template>
  <q-page class="q-pa-md page-default">
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        3. {{ $t('menu_my_list') }}
      </div>
    </div>
    <div class="row justify-center q-pa-xs">
      <div class="col-12">
        {{ $t('menu_my_list_description') }}
      </div>
    </div>
    <div class="row justify-center q-pb-md">
    </div>

    <!-- 생성 대기 토큰 리스트 -->
    <q-pull-to-refresh @refresh="refresher" pull-message="땡기라~더땡기라~" release-message="놔라~이제점놔라~" refresh-message="온다온다~" >
      <q-infinite-scroll @load="loadMore" :offset="0" ref="infiniteScroll">

        <q-card class="my-card q-mb-lg" v-for="item in tokenList" :key="item.seq">
          <!--
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          -->

          <q-img src="images/token_temp_image.png">
            <div class="absolute-top">
              <div class="text-h6" style="word-break: break-all;">
                <q-avatar>
                  <q-icon name="generating_tokens" />
                </q-avatar>
                {{ item.name }} ({{ item.symbol }})
              </div>
            </div>
            <div class="absolute-bottom">
              <div class="text-subtitle2">{{ $t('token_decimals') }} : {{ item.decimals }}</div>
              <div class="text-subtitle2" style="word-break: break-all;">{{ $t('token_initial_supply') }} : {{ item.initial_supply }}</div>
              <div class="text-subtitle2" style="word-break: break-all;">{{ $t('wallet_address') }} : <font size="3">{{ item.wallet_address }}</font></div>
            </div>
          </q-img>

          <q-card-actions align="around">
            <q-btn flat style="width: 30%;" @click="goEditToken(item.seq)"><span class="text-black">{{ $t('edit_upper') }}</span></q-btn>
            <q-btn flat style="width: 30%;" @click="deleteToken(item.seq)"><span class="text-black">{{ $t('delete_upper') }}</span></q-btn>
            <q-btn flat style="width: 30%;" @click="goPayment(item)"><span class="text-weight-bold">{{ $t('create_now') }}</span></q-btn>
          </q-card-actions>
        </q-card>

        <br>
        <br>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </q-pull-to-refresh>

    <div v-if="noDataFlag" class="row justify-center">
      <img src="images/sorry-no-data.png" style="width: 50%;" />
    </div>

    <!-- 하단 공간 확보 -->
    <div class="row justify-center q-pa-xl">
    </div>

  </q-page>
  <LoginModal ref="refLoginModal" @callback-login="callbackLogin" />
</template>

<script>
import { defineComponent } from 'vue';
// import solc from 'solc'
// import fs from 'fs'
// import Caver from 'caver-js';
import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';

export default defineComponent({
  name: 'Create',
  data () {
    return {
      refresherDone: '',
      pageSize: 10,
      lastPageNum: 1, // 마지막 페이지
      tokenList: [],
      noDataFlag: false,
    }
  },
  components: {
  },
  watch: {
    getUid (newValue) {
      // console.log('newValue: : ' + newValue)
      this.loadMore(1, null)
      // if (!newValue) {
      //   this.$router.push('/')
      // } else {
      //   this.loadMore(1, null)
      // }
    },
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
  },
  created: function () {
    this.selectListMax()
  },
  mounted: function () {
  },
  methods: {
    goEditToken(seq) {
      this.$router.push('/token/edit')
    },
    deleteToken(seq) {
      alert('토큰 삭제 확인 모달')
    },
    goPayment(item) {
      // 결제정보 설정
      // this.$refs.refPaymentModal.paymentVo.tokenSeq = item.seq
      // this.$refs.refPaymentModal.paymentVo.goodname = item.name + '(' + item.symbol + ')'
      
      // // 결제 모달 표시
      // this.$refs.refPaymentModal.show()


      // 결제정보 설정
      // const goodName = item.name + '(' + item.symbol + ')'
      const goodName = item.name
      this.$store.dispatch('setPaymentGoodsName', goodName)
      this.$store.dispatch('setPaymentPayCode', 'CREATE_TOKEN') // 결제코드: CREATE_TOKEN(토큰 생성)

      // 결제화면 새로고침시 대응
      this.$cookie.set('GOOD_NAME', goodName)
      this.$cookie.set('PAY_CODE', 'CREATE_TOKEN')
      localStorage.setItem('GOOD_NAME', goodName)
      localStorage.setItem('PAY_CODE', 'CREATE_TOKEN')
      localStorage.setItem('PAY_RESULT_URL', '/token/list')

      // 결제 화면으로 이동
      this.$router.push('/payment')
    },
    callbackLogin(userVo) {
      // console.log('callbackLogin!!!')
    },
    refresher (done) {
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise the refresh message
      //        will continue to be displayed
      // make some Ajax call then call done()
      this.tokenList = []
      this.refresherDone = done // load가 끝나면 로딩메세지 종료
      this.$refs.infiniteScroll.reset() // index 초기화
      this.$refs.infiniteScroll.resume() // stop에서 다시 재생
      // this.$refs.infiniteScroll.load() // loadMore로 검색
      this.loadMore(1, done)
    },
    loadMore(index, done) {
      // index - called for nth time
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise your loading message
      //        will continue to be displayed. Has optional boolean
      //        parameter that invokes stop() when true
      // console.log('index: ' + index)
      // make some Ajax call then call done()
      // this.pageNum = index
      setTimeout(() => {
        // alert(index)
        // console.log('loadMore called index: ' + index)
        if (index <= this.lastPageNum) {
          this.selectList(index, done)
          if (index === this.lastPageNum) {
            this.$refs.infiniteScroll.stop()
          }

          // refresher 로딩메세지 처리
          if (this.refresherDone != null && this.refresherDone !== '') {
            this.refresherDone() // 로딩메세지 종료
            this.refresherDone = '' // 로딩메세지 초기화
          }
        }
      }, 500)
    },
    // 상품 리스트 마지막 페이지 조회
    selectListMax() {
      this.$axios.get('/api/token/selectCreatedTokenListLastPageNum',
        {params: {uid: this.getUid, pageSize: this.pageSize}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.lastPageNum = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 상품 리스트 조회
    selectList(idx, done) {
      this.$axios.get('/api/token/selectCreatedTokenList',
        {params: {uid: this.getUid, pageNum: idx, pageSize: this.pageSize}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          console.log(result.data)
          if (idx === 1) { // 첫번째 load인 경우
            this.tokenList = [] // 리스트 초기화
          }
          this.tokenList = this.tokenList.concat(result.data)

          // 데이터 없음 표시 설정
          if (!this.tokenList || this.tokenList.length < 1) {
            this.noDataFlag = true
          } else {
            this.noDataFlag = false
          }
          done()
        })
        .catch((err) => {
          console.log(err)
          done()
        })
    },

    
    // solidity 파일 가져오기
    async getSolFile() {
      // 솔리디티.sol 파일의 내용을 문자열로 값을 가져온다
      // const file = new FileReader()
      // const code = file.readAsText('contract/create_token.sol')
      const code = await this.$axios.get('contract/create_token.sol')
        .then((result) => {
          // console.log(result.data)
          return result.data
        })
        .catch((err) => {
          console.log(err)
          return null
        })
      return code
    },
    create() {
      // const caver = new Caver('https://localhost:8651/')
    },
  },
})
</script>

<style scoped>
</style>

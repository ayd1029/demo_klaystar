<template>
  <q-page class="q-pa-md page-default">
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        {{ $t('토큰 생성중') }}
      </div>
    </div>
    <div class="row justify-center q-pa-xs">
      <div class="col-12">
        {{ $t('menu_token_create_description') }}
      </div>
    </div>
    <div class="row justify-center q-pb-md">
    </div>

    <!-- 파라미터 정보 -->
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        key: {{ key }}
      </div>
    </div>

    <!-- 하단 공간 확보 -->
    <div class="row justify-center q-pa-xl">
    </div>

  </q-page>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',
  data () {
    return {
      key: '', // 결제창 호출시 상점 파라미터(merchantData)로 설정한 값 중의 key의 value
    }
  },
  components: {
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
  },
  created: function () {
    console.log(this.$route.query)
    this.key = this.$route.query.key

    // 토큰 생성 처리
    this.createToken()
  },
  mounted: function () {
  },
  methods: {
    async createToken() {
      // 1. 해당 토큰이 결제 완료인지 확인
      const params = {
        uid: this.getUid,
        seq: this.key,
      }
      const result = await this.$axios.post('/api/token/checkTokenCreateStatusCdPaid', params)
      if (result.data.resultCd === 'SUCCESS') {
        // 2. 토큰 생성
        this.doCreateToken()
      } else {
        this.$noti(this.$q, this.$t('결제 대기중인 토큰입니다.'))
        this.$router.push('/token/createList')
      }
    },
    // 실제 토큰 생성 처리
    async doCreateToken() {
      console.log('create token....')
      // 1. 해당 토큰이 결제 완료인지 확인
      const params = {
        uid: this.getUid,
        seq: this.key,
      }
      const result = await this.$axios.post('/api/token/createToken', params)
      if (result.data.resultCd === 'SUCCESS') {
        this.$noti(this.$q, this.$t('토큰이 생성되었습니다.'))
        // 나의 토큰 목록으로 이동
        this.$router.push('/token/myList')
      } else {
        this.$noti(this.$q, this.$t('토큰 생성 실패'))
        this.$router.push('/token/createList')
      }
    },
  },
})
</script>

<style scoped>
</style>

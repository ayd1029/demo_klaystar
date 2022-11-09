<template>
  <q-page>

    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        resultApiCode: {{ resultApiCode }}
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        resultCode: {{ resultCode }}
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        resultMsg: {{ resultMsg }}
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        redirectUrl: {{ redirectUrl }}
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        key: {{ key }}
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      // locale,
      resultApiCode: '', // FAIL, SUCCESS
      resultCode: '',
      redirectUrl: '',
      payCode: '',
      key: '',
      orderId: '',
      resultMsg: '',
    }
  },
  components: {},
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
  },
  created: function () {
    // alert(JSON.stringify(this.$route.query))
    this.resultApiCode = this.$route.query.resultApiCode
    this.resultCode = this.$route.query.resultCode
    this.redirectUrl = this.$route.query.redirectUrl
    this.payCode = this.$route.query.payCode
    this.orderId = this.$route.query.orderId
    this.key = this.$route.query.key
    this.resultMsg = this.$route.query.resultMsg

    // 결제 성공 여부 분기
    if (this.resultApiCode === 'SUCCESS') {
      // 1. 결제 완료 상태로 변경
      if (this.payCode === 'CREATE_TOKEN') { // 결제코드가 토큰 생성인 경우
        const params = {
          uid: this.getUid,
          seq: this.key,
          create_order_id: this.orderId,
        }
        this.$axios.post('/api/token/updateTokenCreateStatusCdPaid', params)
          .then((result) => {
            console.log(result.data)
            // return result.data

            // 2. 결제창 호출시 상점 파라미터(merchantData)에 설정한 처리 화면으로 이동
            this.$router.replace({ path: this.redirectUrl, query: { key: this.key }})
          })
          .catch((err) => {
            console.log(err)
            // return null
          })
      } else {
        console.log('payCode is not CREATE_TOKEN')
      }
    } else {
      this.$noti(this.$q, this.$t('결제 실패'))
      this.$noti(this.$q, this.resultCode + ': ' + this.resultMsg) // '결제 실패 원인'
      this.$router.replace(this.redirectUrl)
    }
  },
  mounted: function () {},
  // setup () {
  //   const { locale } = useI18n({ useScope: 'global' })
  //   return {
  //     locale,
  //   }
  // },
  methods: {
    // // WEB으로 이동
    // moveToWeb () {
    //   //
    // },
  }
})
</script>

<template>
  <q-page class="q-pa-md page-default">
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        {{ $t('결제-모바일') }}
      </div>
    </div>
    <div class="row justify-center q-pa-xs">
      <div class="col-12">
        {{ $t('menu_token_register_description') }}
      </div>
    </div>
    <div class="row justify-center q-pb-md">
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('성명') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="paymentVo.p_uname" ref="refP_uname" :rules="[required, val => minLength(val, 2), val => maxLength(val, 30)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('전화번호') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('ex) 01012345678') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="paymentVo.p_mobile" ref="refP_mobile" type="number" :rules="[required, val => minLength(val, 9), val => maxLength(val, 15)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('이메일') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="paymentVo.p_email" ref="refBuyerEmail" standout readonly />
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        &nbsp;
      </div>
    </div>
    <div class="row justify-center q-pt-md">
      <div class="col-6 text-left">
        <q-btn class="btn" color="grey-3" text-color="black" size="lg" style="width: 98%;" @click="goBack">
          <b>{{ $t('돌아가기') }}</b>
        </q-btn>
      </div>
      <div class="col-6 text-right">
        <q-btn class="btn" color="secondary" text-color="black" size="lg" style="width: 98%;" @click="doPayment">
          <b>{{ $t('결제하기') }}</b>
        </q-btn>
      </div>
    </div>

    <!-- 하단 공간 확보 -->
    <div class="row justify-center q-pa-xl">
    </div>

    <!-- 모바일용 결제폼 -->
    <div style="border:2px #dddddd; background-color:#f3f3f3;">
      <form id="mobileweb" name="mobileweb" method="post" action="" accept-charset="EUC-KR">
        <br/><b>요청지불수단</b> :
        <br/><input name="P_INI_PAYMENT" v-model="paymentVo.p_ini_payment">
        <br/><b>상점아이디</b> :
        <br/><input type="text" name="P_MID" v-model="paymentVo.p_mid">
        <br/><b>주문번호</b> :
        <br/><input type="text" name="P_OID" v-model="paymentVo.p_oid" id="textfield2" style="height:15px;"/>
        <br/><b>가격</b> :
        <br/><input type="text" name="P_AMT" v-model="paymentVo.p_amt" id="textfield4" style="height:15px;"/>
        <br/><b>상품명</b> :
        <br/><input type="text" name="P_GOODS" v-model="paymentVo.p_goods" id="textfield3" style="height:15px;"/>
        <br/><b>구매자이름</b> :
        <br/><input type="text" name="P_UNAME" v-model="paymentVo.p_uname" id="textfield5" style="height:15px;"/>
        <br/><b>P_NEXT_URL</b> :
        <br/><input type="text" name="P_NEXT_URL" v-model="paymentVo.p_next_url">
        <!-- <br/><input v-if="device === 'M'" type="text" name="P_NEXT_URL" v-model="paymentVo.mobile_next_url">
        <br/><input v-if="device === 'android'" type="text" name="P_NEXT_URL" v-model="paymentVo.android_next_url">
        <br/><input v-if="device === 'ios'" type="text" name="P_NEXT_URL" v-model="paymentVo.ios_next_url"> -->
        <br/><b>P_NOTI_URL</b> :
        <br/><input type="text" name="P_NOTI_URL" v-model="paymentVo.p_noti_url">
        <br/><b>P_HPP_METHOD</b> :
        <br/><input type="text" name="P_HPP_METHOD" value="2">
        <br/><b>휴대폰번호</b> :
        <br/><input type="text" name="P_MOBILE" v-model="paymentVo.p_mobile" id="textfield7" style="height:15px;"/>
        <br/><b>이메일</b> :
        <br/><input type="text" name="P_EMAIL" v-model="paymentVo.p_email" id="textfield8" style="height:15px;"/>
        <br/><b>상점이름</b> :
        <br/><input type="text" name="P_MNAME" v-model="paymentVo.p_mname" id="textfield6" style="height:15px;"/>
        <br/><b>문자셋</b> :
        <br/><input type="text" name="P_CHARSET" v-model="paymentVo.p_charset"/>


        <br/><b>제공기간</b> :
        <br/><input type="text" name="P_OFFER_PERIOD" v-model="paymentVo.p_offer_period"/>
        <br/><b>할부개월수 노출옵션 [할부개월:할부개월]</b> :
        <br/><input type="text" name="P_QUOTABASE" v-model="paymentVo.p_quotabase"/>
        <br/><b>부가세</b> :
        <br/><input type="text" name="P_TAX" v-model="paymentVo.p_tax"/>
        <br/><b>비과세 (면세상품 금액)</b> :
        <br/><input type="text" name="P_TAXFREE" v-model="paymentVo.p_taxfree"/>
        <br/><b>신용카드 우선선택 옵션 [selcode=카드코드]</b> :
        <br/><input type="text" name="P_CARD_OPTION" v-model="paymentVo.p_card_option"/>
        <br/><b>결제 카드사 선택 노출옵션 [카드코드:카드코드]</b> :
        <br/><input type="text" name="P_ONLY_CARDCODE" v-model="paymentVo.p_only_cardcode"/>
        <br/><b>가상계좌 입금기한 날짜 [YYYYMMDD]</b> :
        <br/><input type="text" name="P_VBANK_DT" v-model="paymentVo.p_vbank_dt"/>
        <br/><b>가상계좌 입금기한 시간 [hhmm]</b> :
        <br/><input type="text" name="P_VBANK_TM" v-model="paymentVo.p_vbank_tm"/>
        <br/><b>P_NOTI</b> :
        <br/><input type="text" name="P_NOTI" v-model="customData"><!-- 상점 자유 데이터 -->
        <!-- <br/><b>P_RETURN_URL</b> :
        <br/><input v-if="device === 'M'" type="text" name="P_RETURN_URL" v-model="paymentVo.mobileReturnUrl">
        <br/><input v-if="device === 'android'" type="text" name="P_RETURN_URL" v-model="paymentVo.androidReturnUrl">
        <br/><input v-if="device === 'ios'" type="text" name="P_RETURN_URL" v-model="paymentVo.iosReturnUrl"> -->
        <!--
        // ★ 복합필드 P_RESERVED 설정 ★
        // 신용카드일 경우: twotrs_isp=Y&block_isp=Y&twotrs_isp_noti=N
        // 계좌이체일 경우 동기방식 처리: twotrs_bank=Y&apprun_check=Y
        // 가상계좌일 경우 현금영수증 사용여부: vbank_receipt=Y
        -->
        <!-- vue data로 제어하면 타이밍이 늦어서 두번째 팝업에서 인식되는 문제가 있어서 미리 기술함 -->
        <br/><b>P_RESERVED</b> :
        <br/><input type="text" name="P_RESERVED" v-model="paymentVo.p_reserved">
        <!-- 휴대폰결제 필수 [1:컨텐츠, 2:실물]  -->
      </form>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { required, minLength, maxLength, minValue, maxValue} from 'src/validation.js';

export default defineComponent({
  name: 'Payment',
  data () {
    return {
      device: 'P', // 디바이스 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱
      customData: '', // 가맹점 파라미터 - 되돌아오기에 사용할 파라미터 (2000byte)
      paymentVo: {
        payCode: '', // 결제 코드
        device: '',
        p_ini_payment: 'CARD',
        p_mid: '',
        p_oid: '',
        p_amt: '',
        p_goods: '',
        p_uname: '',
        p_next_url: '',
        // mobile_next_url: '',
        // android_next_url: '',
        // ios_next_url: '',
        p_noti_url: '',
        p_hpp_method: '',
        p_mobile: '',
        p_email: '',
        p_mname: '클레이스타',
        p_charset: 'utf8',
        p_offer_period: '',
        p_quotabase: '',
        p_tax: '',
        p_taxfree: '',
        p_card_option: '',
        p_only_cardcode: '',
        p_vbank_dt: '',
        p_vbank_tm: '',
        p_noti: '',
        p_reserved: 'below1000=Y&apprun_check=Y&app_scheme=klaystar://',

      },
    }
  },
  components: {
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
    // getUserName () {
    //   return this.$store.getters.getUserName
    // },
    // getUserMobileNo () {
    //   return this.$store.getters.getUserMobileNo
    // },
    getPaymentGoodName () {
      return this.$store.getters.getPaymentGoodName
    },
    getPaymentPayCode () {
      return this.$store.getters.getPaymentPayCode
    },
  },
  created: function () {
    // 디바이스 설정
    this.setDevice()
    this.paymentVo.device = this.device

    this.paymentVo.uid = this.getUid
    // this.paymentVo.p_uname = this.getUserName
    // this.paymentVo.p_mobile = this.getUserMobileNo
    this.paymentVo.p_email = this.getUid
    this.paymentVo.p_goods = this.getPaymentGoodName
    this.paymentVo.payCode = this.getPaymentPayCode
    this.customData = this.getPaymentCustomData

    // 설정된 결제정보 맵핑
    // customData
    if (!this.customData) {
      this.customData = localStorage.getItem('CUSTOM_DATA')
      if (!this.customData) {
        this.customData = this.$cookie.get('CUSTOM_DATA')
      }
    }
    // payCode
    if (!this.paymentVo.payCode) {
      this.paymentVo.payCode = localStorage.getItem('PAY_CODE')
      if (!this.paymentVo.payCode) {
        this.paymentVo.payCode = this.$cookie.get('PAY_CODE')
      }
    }
    // p_goods
    if (!this.paymentVo.p_goods) {
      this.paymentVo.p_goods = localStorage.getItem('GOOD_NAME')
      if (!this.paymentVo.p_goods) {
        this.paymentVo.p_goods = this.$cookie.get('GOOD_NAME')
      }
    }
    // p_uname
    if (!this.paymentVo.p_uname) {
      this.paymentVo.p_uname = localStorage.getItem('BUYER_NAME')
      if (!this.paymentVo.p_uname) {
        this.paymentVo.p_uname = this.$cookie.get('BUYER_NAME')
      }
    }
    // p_mobile
    if (!this.paymentVo.p_mobile) {
      this.paymentVo.p_mobile = localStorage.getItem('BUYER_TEL')
      if (!this.paymentVo.p_mobile) {
        this.paymentVo.p_mobile = this.$cookie.get('BUYER_TEL')
      }
    }

    // 결제에 필요한 정보를 API 서버에 요청
    this.setPayBaseInfo()
  },
  mounted: function () {
  },
  methods: {
    required(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    minLength(val, length) {
      const message = this.$t('validation_min_length') + ': ' + length
      return minLength(val, message, length);
    },
    maxLength(val, length) {
      const message = this.$t('validation_max_length') + ': ' + length
      return maxLength(val, message, length);
    },
    // 결제에 필요한 정보를 API 서버에 요청
    async setPayBaseInfo() {
      const param = {
        ...this.paymentVo
      }
      const result = await this.$axios.post('/api/payment/selectPayBaseInfoMobile', param)
      console.log(result.data)
      if (result.data.resultCd === 'SUCCESS') {
        this.paymentVo.p_mid = result.data.p_mid
        this.paymentVo.p_oid = result.data.p_oid
        this.paymentVo.p_amt = result.data.p_amt
        this.paymentVo.p_next_url = result.data.p_next_url
      } else {
        this.$noti(this.$q, this.$t('결제정보 조회 실패'))
      }
    },
    doPayment() {
      // Field validation check
      if(!this.validate()) {
        this.$noti(this.$q, this.$t('validation_failed'))
        return
      }

      // 결제 로그 등록
      this.insertPayLog()

      // 결제 정보 설정
      this.$cookie.set('BUYER_NAME', this.paymentVo.p_uname)
      this.$cookie.set('BUYER_TEL', this.paymentVo.p_mobile)
      localStorage.setItem('BUYER_NAME', this.paymentVo.p_uname)
      localStorage.setItem('BUYER_TEL', this.paymentVo.p_mobile)

      // 결제 요청
      // this.$INIStdPay.pay('mobileweb')
      let myform = document.getElementById('mobileweb')
      console.log('myform')
      console.log(myform)
      myform.action = 'https://mobile.inicis.com/smart/payment/'
      myform.target = '_self'
      myform.submit()
    },
    // 결제 로그 등록
    insertPayLog() {
      const payLogVo = {
        mo1_p_ini_payment: this.paymentVo.p_ini_payment,
        mo1_p_mid: this.paymentVo.p_mid,
        mo1_p_oid: this.paymentVo.p_oid,
        mo1_p_amt: this.paymentVo.p_amt,
        mo1_p_goods: this.paymentVo.p_goods,
        mo1_p_uname: this.paymentVo.p_uname,
        mo1_p_next_url: this.paymentVo.p_next_url,
        mo1_p_noti_url: this.paymentVo.p_noti_url,
        mo1_p_hpp_method: this.paymentVo.p_hpp_method,
        mo1_p_mobile: this.paymentVo.p_mobile,
        mo1_p_email: this.paymentVo.p_email,
        mo1_p_mname: this.paymentVo.p_mname,
        mo1_p_charset: this.paymentVo.p_charset,
        mo1_p_offer_period: this.paymentVo.p_offer_period,
        mo1_p_quotabase: this.paymentVo.p_quotabase,
        mo1_p_tax: this.paymentVo.p_tax,
        mo1_p_taxfree: this.paymentVo.p_taxfree,
        mo1_p_card_option: this.paymentVo.p_card_option,
        mo1_p_only_cardcode: this.paymentVo.p_only_cardcode,
        mo1_p_vbank_dt: this.paymentVo.p_vbank_dt,
        mo1_p_vbank_tm: this.paymentVo.p_vbank_tm,
        mo1_p_noti: this.paymentVo.p_noti,
        mo1_p_reserved: this.paymentVo.p_reserved,
        reg_id: this.getUid,
      }
      this.$axios.post('/api/payment/insertPayLogAuthReq', payLogVo)
    },
    validate() {
      let result = true
      if (!this.$refs.refP_uname.validate()) {
        result = false
      }
      if (!this.$refs.refP_mobile.validate()) {
        result = false
      }
      return result
    },
    // 디바이스 설정 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱
    setDevice() {
      if (this.$q.platform.is.cordova) {
        if (this.$q.platform.is.ios) {
          this.device = 'ios'
        } else {
          this.device = 'android'
        }
        this.paymentVo.gopaymethod = 'wcard' // 모바일 결제수단코드 : wcard(신용카드)
      } else if (this.$q.platform.is.mobile) {
        this.device = 'M'
        this.paymentVo.gopaymethod = 'wcard' // 모바일 결제수단코드 : wcard(신용카드)
      } else {
        this.device = 'P'
        this.paymentVo.gopaymethod = 'Card' // PC 결제수단코드 : Card(신용카드)
      }
    },
    goBack() {
      this.$router.go(-1)
    },
  }
})
</script>

<style scoped>
</style>

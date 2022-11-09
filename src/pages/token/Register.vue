<template>
  <q-page class="q-pa-md page-default">
    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        1. {{ $t('menu_token_register') }}
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
        <span class="text-weight-bold text-subtitle1">{{ $t('token_name') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('token_name_hint') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="tokenName" ref="tokenName" :rules="[required, val => minLength(val, 3), val => maxLength(val, 30)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('token_symbol') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('token_symbol_hint') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="tokenSymbol" ref="tokenSymbol" :rules="[required, val => minLength(val, 3), val => maxLength(val, 30)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('token_decimals') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('token_decimals_hint') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="tokenDecimals" ref="tokenDecimals" type="number" :rules="[required, val => minValue(val, 0), val => maxValue(val, 18)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('token_initial_supply') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('token_initial_supply_hint') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="tokenInitialSupply" ref="tokenInitialSupply" type="number" thousands-separator="," mask="currency" decimal-point="."
          :rules="[requiredNumber, val => minValue(val, 1), val => maxValue(val, 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)]" clearable standout />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('wallet_address') }}</span>
        <span class="text-grey">&nbsp;&nbsp; {{ $t('wallet_address_hint') }}</span>
      </div>
    </div>
    <div class="row justify-center q-pb-md">
      <div class="col-12">
        <q-input v-model="walletAddress" ref="walletAddress" :rules="[required]" clearable standout />
      </div>
    </div>
    <div class="row justify-center q-pt-md">
      <div class="col-12 text-center">
        <q-btn class="btn" color="secondary" text-color="black" size="lg" @click="registerToken">
          <b>{{ $t('register_token') }}</b>
        </q-btn>
      </div>
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
  name: 'Registration',
  data () {
    return {
      tokenName: 'tokenTest001',
      tokenSymbol: 'TTT001',
      tokenDecimals: 18,
      tokenInitialSupply: 10000000000000000000,
      walletAddress: '0xebe8ab58ec4a0d25e4b8771e8bcea4ffbf19b1d7',
      // tokenName: '',
      // tokenSymbol: '',
      // tokenDecimals: 18,
      // tokenInitialSupply: 100000000,
      // walletAddress: '',
    }
  },
  components: {
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    callbackLogin(userVo) {
      // console.log('callbackLogin!!!')
    },
    ///////////////////////////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////////////////////////
    required(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    requiredNumber(val) {
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
    minValue(val, value) {
      const message = this.$t('validation_min_value') + ': ' + value
      return minValue(val, message, value);
    },
    maxValue(val, value) {
      const message = this.$t('validation_max_value') + ': ' + value
      return maxValue(val, message, value);
    },
    ///////////////////////////////////////////////////////////////////////////
    validate() {
      let result = true
      if (!this.$refs.tokenName.validate()) {
        result = false
      }
      if (!this.$refs.tokenSymbol.validate()) {
        result = false
      }
      if (!this.$refs.tokenDecimals.validate()) {
        result = false
      }
      if (!this.$refs.tokenInitialSupply.validate()) {
        result = false
      }
      if (!this.$refs.walletAddress.validate()) {
        result = false
      }
      return result
    },
    // 토큰 등록
    async registerToken() {
      // Field validation check
      if(!this.validate()) {
        this.$noti(this.$q, this.$t('validation_failed'))
        return
      }

      // 로그인 여부 체크, 로그인 모달 표시
      if (!this.getUid) {
        this.$refs.refLoginModal.show()
        return
      }

      // 토큰 등록 처리
      const param = {
        uid: this.getUid,
        name: this.tokenName,
        symbol: this.tokenSymbol,
        decimals: this.tokenDecimals,
        initial_supply: this.tokenInitialSupply,
        wallet_address: this.walletAddress,
        type: 'KIP-7',
      }
      const result = await this.$axios.post('/api/token/insertToken', param)
      if (result.data.resultCd === 'SUCCESS') {
        console.log(result.data)
        this.$noti(this.$q, this.$t('토큰이 등록되었습니다.'))
      } else {
        this.$noti(this.$q, this.$t('토큰 등록 실패'))
      }

      // 2. 페이지 이동
      this.$router.push('/token/createList')
    }
  }
})
</script>

<style scoped>
</style>

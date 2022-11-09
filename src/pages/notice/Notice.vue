<template>
  <q-page>

    <div class="row justify-center">
      <div class="col-12 doc-heading doc-h2">
        key: {{ key }}123
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
      key: '테스트',
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
  },
  mounted: function () {
    const params = {
      uid: this.getUid,
      amount: '1',
      // address_from: '0x030cae45691d221d2f62ec75e2d6278c1c5ce1c7',
      // address_to: '0xebe8ab58ec4a0d25e4b8771e8bcea4ffbf19b1d7',
      seq: '1',
    }
    this.$axios.post('/api/token/createToken', params)
    // this.$axios.get('/api/token/selectNotCreatedTokenListLastPageNum', params)
      .then((result) => {
        console.log(result.data)
        // return result.data
      })
      .catch((err) => {
        console.log(err)
        // return null
      })

  },
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

<template>
  <q-layout view="lHh Lpr lFf" class="">
    <!-- <q-header elevated> -->
    <q-header class="header" style="background-image: url(images/star1.jpg)">
      <q-toolbar>

        <q-toolbar-title>
          <div class="text-bold">
            <table border="0" width="100%" style="margin: 0px 0px 0px 0px;" cellpadding="0" cellspacing="0">
              <tr>
                <td align="right" width="28"><img src="images/logo-128x128.png" style="width: 24px; margin-top: 7px;" /></td>
                <td align="left"><q-btn to="/web" flat size="lg" class="text-white" label="KLAYSTAR" style="width: 120px;" /></td>
              </tr>
            </table>
          </div>
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <!-- <q-btn-dropdown
          stretch
          flat
          :label="localeOptions"
        >
          <q-list>
            <q-item v-for="item in localeOptions" :key="`x.${item}`" clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->

        <q-select
          v-model="locale"
          :options="localeOptions"
          dense
          borderless
          emit-value
          map-options
          dark
          style="width: 50px"
          @update:model-value="onChangeLocale"
        />

        &nbsp;&nbsp;&nbsp;

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      dark
    >
      <q-list>
        <q-item-label
          header
        >
          <!-- <q-select
            v-model="locale"
            :options="localeOptions"
            dense
            borderless
            emit-value
            map-options
            style="width: 80px"
          /> -->
          <table border="0" width="100%">
            <tr>
              <!-- <td width="36"><img src="images/logo-128x128.png" style="width: 30px;" /></td> -->
              <td v-if="!getUid" align="left"><b>Beyond Blockchain Framework</b></td>
              <td v-else align="left"><b>{{ getUid }}</b></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <!-- <tr>
              <td colspan="2">
                <q-btn outline style="color: goldenrod; width: 100%;" :label="$t('connect_wallet')" @click="connectWallet" rounded />
              </td>
            </tr> -->
            <tr>
              <td colspan="2">
                <q-btn v-if="!getUid" outline style="color: goldenrod; width: 100%;" :label="$t('login')" @click="showLoginModal" rounded />
                <q-btn v-else outline style="color: goldenrod; width: 100%;" :label="$t('logout')" @click="logout" rounded />
              </td>
            </tr>
          </table>
        </q-item-label>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->

        <!-- MYPAGE -->
        <!-- <q-item clickable to="/mypage">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="person_pin" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('menu_mypage') }}</q-item-label>
          </q-item-section>
        </q-item> -->

        <!-- 1. REGISTER TOKEN -->
        <q-item clickable to="/token/register">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="add_circle" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>1. {{ $t('menu_token_register') }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- 2. CREATE TOKEN -->
        <q-item clickable to="/token/createList">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="generating_tokens" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>2. {{ $t('menu_token_create') }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- 3. MY TOKENS -->
        <q-item clickable to="/token/myList">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="list_alt" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>3. {{ $t('menu_my_list') }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- NOTICE -->
        <q-item clickable to="/notice">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="notifications_active" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('menu_notice') }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- SUPPORT -->
        <!-- <q-item clickable to="/support">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="help" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('menu_support') }}</q-item-label>
          </q-item-section>
        </q-item> -->

      </q-list>
    </q-drawer>

    <!-- <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-dialog v-model="msgBox">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="images/logo-128x128.png" style="width: 24px; height: 24px;" />
        </q-avatar>

        <q-toolbar-title>
          <span class="text-weight-bold">KLAYSTAR</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        {{ $t('under_construction')}}
      </q-card-section>
    </q-card>
  </q-dialog>

  <LoginModal ref="refLoginModal" @callback-login="callbackLogin" />

</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
// import LoginModal from 'components/login/login-modal'

// const linksList = [
//   {
//     title: 'My Page',
//     // caption: 'quasar.dev',
//     icon: 'person_pin',
//     link: '/mypage'
//   },
//   {
//     title: 'Create Token',
//     icon: 'add_circle',
//     link: '/token/create'
//   },
//   // {
//   //   title: 'Edit Token',
//   //   icon: 'edit',
//   //   link: '/token/edit'
//   // },
//   {
//     title: 'Token List',
//     icon: 'list_alt',
//     link: '/token/tokenList'
//   },
//   {
//     title: 'Support',
//     icon: 'help',
//     link: '/support'
//   },
//   /*
//   {
//     title: 'Docs',
//     // caption: 'quasar.dev',
//     icon: 'description',
//     link: 'https://docs.klaystar.com'
//   },
//   {
//     title: 'Medium',
//     icon: 'img:icons/medium.svg',
//     link: 'https://medium.com/@KLAYSTAR'
//   },
//   {
//     title: 'Telegram',
//     icon: 'img:icons/telegram.svg',
//     link: 'https://t.me/KLAYSTAR'
//   },
//   {
//     title: 'Twitter',
//     icon: 'img:icons/twitter.svg',
//     link: 'https://twitter.com/KLAYSTARTUP'
//   },
//   */
//   // {
//   //   title: 'Support',
//   //   caption: 'klaystartup@gmail.com',
//   //   icon: 'contact_support',
//   //   link: 'mailto:klaystartup@gmail.com'
//   // },
// ];

import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  components: {
    // EssentialLink,
    // LoginModal,
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    }
  },
  data () {
    return {
      // uid: '',
      // loginModal: false,
      test: '',
    }
  },
  created: function() {
    // // 디바이스 설정
    // this.setDevice()

    // 쿠키에 UID와 AUTH_KEY가 있으면 유저정보 바인딩
    const uid = localStorage.getItem('UID') ? localStorage.getItem('UID') : this.$cookie.get('UID')
    const authKey = localStorage.getItem('AUTH_KEY') ? localStorage.getItem('AUTH_KEY') : this.$cookie.get('AUTH_KEY')
    if (uid && authKey) {
      this.$store.dispatch('setUid', uid)
    }

    // 쿠키에 LOCALE이 있으면 설정
    const cookieLocale = localStorage.getItem('LOCALE') ? localStorage.getItem('LOCALE') : this.$cookie.get('LOCALE')
    // alert('cookieLocale: ' + cookieLocale)
    if (cookieLocale) {
      this.locale = cookieLocale
    }

    // CORDOVA APP에서 로그인 후 WEB으로 왔을 때 처리
    if (this.$q.platform.is.cordova === true && this.$route.query.uid && this.$route.query.authKey
      // && this.$q.platform.is.mobile === true && (this.$q.platform.is.platform === 'andriod' || this.$q.platform.is.platform === 'ios')
    ) {
      // localStorage에 locale 값이 있으면 localStorage 값으로 설정, 없으면 this.$route.query.locale 설정
      // if (this.$route.query.locale) {
      //   this.locale = this.$route.query.locale
      //   alert('this.$route.query.locale: ' + this.$route.query.locale)
      //   this.$cookie.set('LOCALE', this.$route.query.locale)
      // }
      const localStorageLocale = localStorage.getItem('LOCALE')
      if (localStorageLocale) {
        this.locale = localStorageLocale
        this.$cookie.set('LOCALE', localStorageLocale)
      } else {
        this.locale = this.$route.query.locale
        this.$cookie.set('LOCALE', this.$route.query.locale)
        localStorage.setItem('LOCALE', this.$route.query.locale, 365) // APP용
      }
      // 사용자 정보 설정
      this.$store.dispatch('setUid', this.$route.query.uid)
      localStorage.setItem('UID', this.$route.query.uid, 365) // APP용
      localStorage.setItem('AUTH_KEY', this.$route.query.authKey, 365) // APP용

      // 로그인 처리
      this.doLogin()
    }
  },
  mounted: function() {
    // this.$refs.refLoginModal.show()
  },

  setup () {
    // const $store = useStore()
    // const loginModalFlag = computed({
    //   get: () => $store.state.common.loginModalFlag,
    //   set: val => {
    //     $store.commit('common/updateLoginModalFlag', val)
    //   }
    // })

    const leftDrawerOpen = ref(false)
    const { locale } = useI18n({ useScope: 'global' })

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      locale,
      localeOptions: [
        { value: 'en-US', label: 'EN' },
        { value: 'ko-KR', label: 'KO' },
      ],
      msgBox: ref(false),

      // loginModalFlag,
    }
  },
  methods: {
    // // 디바이스 설정 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱
    // setDevice() {
    //   if (this.$q.platform.is.cordova) {
    //     if (this.$q.platform.is.ios) {
    //       this.$device = 'ios'
    //     } else {
    //       this.$device = 'android'
    //     }
    //   } else if (this.$q.platform.is.mobile) {
    //     this.$device = 'M'
    //   } else {
    //     this.$device = 'P'
    //   }
    // },
    // CORDOVA APP에서 이동한 경우 로그인 처리
    async doLogin () {
      const userVo = {
        uid: this.$route.query.uid,
        auth_key: this.$route.query.authKey,
      }
      // 로그인 처리
      // alert(JSON.stringify(userVo))
      const result = await this.$axios.post('/api/login/doLogin', userVo)
      // alert(JSON.stringify(result))
      if (result.data.resultCd === 'SUCCESS') {
        // this.doLogin(result.data)
        console.log(result.data)
        // this.$noti(this.$q, this.$t('로그인 성공'))

        // 로그인 정보 쿠키에 저장
        this.$store.dispatch('setUid', result.data.uid)
        this.$cookie.set('UID', result.data.uid, 365)
        this.$cookie.set('AUTH_KEY', result.data.auth_key, 365)
        localStorage.setItem('UID', result.data.uid, 365)
        localStorage.setItem('AUTH_KEY', result.data.auth_key, 365)
      } else {
        this.$noti(this.$q, this.$t('로그인 실패'))
      }
    },
    // locale 쿠키에 설정 - APP에서 WEB의 카카오 로그인시 redirect에서 필요
    onChangeLocale() {
      this.$cookie.set('LOCALE', this.locale)
      localStorage.setItem('LOCALE', this.locale, 365) // APP용
    },
    showLoginModal() {
      this.$refs.refLoginModal.show()
    },
    async logout() {
      const userVo = {
        uid: localStorage.getItem('UID') ? localStorage.getItem('UID') : this.$cookie.get('UID'),
        auth_key: localStorage.getItem('AUTH_KEY') ? localStorage.getItem('AUTH_KEY') : this.$cookie.get('AUTH_KEY'),
      }
      const result = await this.$axios.post('/api/login/doLogout', userVo)
      if (result.data.resultCd === 'SUCCESS') {
        console.log(result.data)
        this.$noti(this.$q, this.$t('logout_completed'))

        // 로그인 정보 쿠키에서 삭제
        this.$store.dispatch('setUid', '')
        this.$cookie.set('UID', '')
        this.$cookie.set('AUTH_KEY', '')
        localStorage.setItem('UID', '')
        localStorage.setItem('AUTH_KEY', '')
      } else {
        this.$noti(this.$q, this.$t('logout_failed'))
      }
    },
    callbackLogin(userVo) {
      // console.log('callbackLogin!!!')
      this.$store.dispatch('setUid', userVo.uid)
    },
    // connect wallet
    connectWallet() {
      this.msgBox = true

      // // this.$axios.get(this.$store.state.apiServerIp + '/api/rank/selectRewardRankList',
      // this.$axios.get('/api/user/selectUser',
      //   {params: {uid: 1}})
      //   .then((result) => {
      //     console.log(JSON.stringify(result.data))
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     done()
      //   })
    },
  },
})
</script>

<style lang="sass">
@supports (backdrop-filter: none)
  .header
    background-color: rgba(0,0,0,.1)
    backdrop-filter: blur(1px)
@supports not (backdrop-filter: none)
  .header
    background-color: black
</style>
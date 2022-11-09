import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // common
    },
    state: {
      loginModal: false,
      uid: '',
      // userName: '안영대',
      // userMobileNo: '010-9394-1941',
      paymentGoodName: '', // 결제 상품명
      paymentPayCode: '', // 결제 코드 - CREATE_TOKEN, ...
      paymentCustomData: '', // 결제 - 상점 데이터
    },
    getters: {

      getUid: function (state) {
        return state.uid
      },
      // getUserName: function (state) {
      //   return state.userName
      // },
      // getUserMobileNo: function (state) {
      //   return state.userMobileNo
      // },
      getPaymentGoodName: function (state) {
        return state.paymentGoodName
      },
      getPaymentPayCode: function (state) {
        return state.paymentPayCode
      },
      getPaymentCustomData: function (state) {
        return state.paymentCustomData
      },

      getCartCount: function (state) {
        return state.cartCount
      },
      getAccessToken: function (state) {
        return state.kakaoLoginVO.access_token
      },
      getId: function (state) {
        return state.kakaoLoginVO.id
      },
      getNickname: function (state) {
        return state.kakaoLoginVO.nickname
      },
      getProfileImage: function (state) {
        return state.kakaoLoginVO.profile_image
      },
      getThumbnailImage: function (state) {
        return state.kakaoLoginVO.thumbnail_image
      },
      getEmail: function (state) {
        return state.kakaoLoginVO.email
      }
    },
    mutations: {
      SET_UID (state, uid) {
        state.uid = uid
      },
      // SET_USER_NAME (state, userName) {
      //   state.userName = userName
      // },
      // SET_USER_MOBILE_NO (state, userMobileNo) {
      //   state.userMobileNo = userMobileNo
      // },
      SET_PAYMENT_GOOD_NAME (state, paymentGoodName) {
        state.paymentGoodName = paymentGoodName
      },
      SET_PAYMENT_PAY_CODE (state, paymentPayCode) {
        state.paymentPayCode = paymentPayCode
      },
      SET_PAYMENT_CUSTOM_DATA (state, paymentCustomData) {
        state.paymentCustomData = paymentCustomData
      },

      SET_LOGIN_MODAL_FLAG (state, flag) {
        state.loginModal = flag
      },
      updateDrawerState (state, opened) {
        state.drawerState = opened
      },
      updatePageMeta (state, meta) {
        state.pageMeta = {
          title: '',
          hash: '',
          icon: '',
          iframeTabs: false,
          backRoute: '/main',
          tabs: [],
          ...meta
        }
      },
      setKakaoLoginVO: function (state, payload) {
        state.kakaoLoginVO = payload
        /*
        state.kakaoLoginVO.access_token = payload.access_token
        state.kakaoLoginVO.token_type = payload.token_type
        state.kakaoLoginVO.refresh_token = payload.refresh_token
        state.kakaoLoginVO.expires_in = payload.expires_in
        state.kakaoLoginVO.scope = payload.scope
        state.kakaoLoginVO.refresh_token_expires_in = payload.refresh_token_expires_in
        state.kakaoLoginVO.id = payload.id
        state.kakaoLoginVO.nickname = payload.nickname
        state.kakaoLoginVO.profile_image = payload.profile_image
        state.kakaoLoginVO.thumbnail_image = payload.thumbnail_image
        state.kakaoLoginVO.has_email = payload.has_email
        state.kakaoLoginVO.is_email_valid = payload.is_email_valid
        state.kakaoLoginVO.is_email_verified = payload.is_email_verified
        state.kakaoLoginVO.email = payload.email
        state.kakaoLoginVO.has_age_range = payload.has_age_range
        state.kakaoLoginVO.age_range = payload.age_range
        state.kakaoLoginVO.has_birthday = payload.has_birthday
        state.kakaoLoginVO.birthday = payload.birthday
        state.kakaoLoginVO.has_gender = payload.has_gender
        state.kakaoLoginVO.gender = payload.gender
        */
      }
    },
    actions: {
      test: function (context, payload) {
        return context.commit('SET_LOGIN_MODAL_FLAG', payload)
      },
      SET_LOGIN_MODAL_FLAG: function (context, payload) {
        // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
        return context.commit('setKakaoLoginVO', payload)
      },
      setUid: function (context, payload) {
        return context.commit('SET_UID', payload)
      },
      // setUserName: function (context, payload) {
      //   return context.commit('SET_USER_NAME', payload)
      // },
      // setUserMobileNo: function (context, payload) {
      //   return context.commit('SET_UESR_MOBILE_NO', payload)
      // },

      setPaymentGoodsName: function (context, payload) {
        return context.commit('SET_PAYMENT_GOOD_NAME', payload)
      },
      setPaymentPayCode: function (context, payload) {
        return context.commit('SET_PAYMENT_PAY_CODE', payload)
      },
      setPaymentCustomData: function (context, payload) {
        return context.commit('SET_PAYMENT_CUSTOM_DATA', payload)
      },


      
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})

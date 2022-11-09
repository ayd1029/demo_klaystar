import { boot } from 'quasar/wrappers'
import { Cookies } from 'quasar'

export default boot(({ app }) => {
  ///////////////////////////////////////////////////////////
  // variable
  ///////////////////////////////////////////////////////////
  app.config.globalProperties.$cookie = Cookies

  const DOMAIN_LOCAL = ''
  const DOMAIN_LOCAL_IP = 'http://121.162.58.101:8888'
  const DOMAIN_KLAYSTAR = 'https://klaystar.com'
  app.config.globalProperties.$apiServer = DOMAIN_KLAYSTAR

  app.config.globalProperties.$frontDomain = DOMAIN_KLAYSTAR


  app.config.globalProperties.$CREATE_TOKEN_CD_PAID = '11' // 토큰 생성 상태 코드 - 결제완료

  // app.config.globalProperties.$device = '' // 디바이스 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱

  ///////////////////////////////////////////////////////////
  // Method
  ///////////////////////////////////////////////////////////
  app.config.globalProperties.$testApi = function (param) {
    return param + '456456456'
  }

  app.config.globalProperties.$noti = function (quasar, message) {
    quasar.notify({
      message: message,
      color: 'black',
      avatar: 'images/logo-64x64.png',
      position: 'bottom',
      html: true,
      actions: [
        { label: 'X', color: 'white', handler: () => { /* ... */ } },
      ]
    })
  }
})

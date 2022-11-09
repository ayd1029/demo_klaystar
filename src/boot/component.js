import { boot } from 'quasar/wrappers'

import LoginModal from 'components/login/LoginModal'

export default boot(({ app }) => {
  app.component('LoginModal', LoginModal) // 로그인
})

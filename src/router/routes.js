
const routes = [
  // Index.vue created 에서 APP 이면 /app 으로, WEB 이면 /web 으로 이동
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: 'home', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      // { path: 'loginApp', component: () => import('pages/app/LoginApp.vue') },
      { path: '', component: () => import('pages/app/LoginApp.vue') },
      { path: 'kakaoLoginRedirect', component: () => import('pages/app/KakaoLoginRedirect.vue') },
    ]
  },
  {
    path: '/web',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') },
      // { path: 'home', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/mypage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mypage/MyPage.vue') },
    ]
  },
  {
    path: '/token',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'register', component: () => import('pages/token/Register.vue') },
      { path: 'create', component: () => import('pages/token/Create.vue') },
      { path: 'createList', component: () => import('pages/token/CreateList.vue') },
      { path: 'myList', component: () => import('pages/token/MyList.vue') },
    ]
  },
  {
    path: '/payment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/payment/Payment.vue') },
      { path: 'paymentCallback', component: () => import('pages/payment/PaymentCallback.vue') },
    ]
  },
  {
    path: '/paymentMobile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/payment/PaymentMobile.vue') },
      { path: 'paymentCallback', component: () => import('pages/payment/PaymentCallback.vue') },
    ]
  },


  {
    path: '/notice',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/notice/Notice.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    // component: () => import('pages/Error404.vue'),
    children: [
      { path: '', component: () => import('pages/Error404.vue') },
    ]
  }
]

export default routes

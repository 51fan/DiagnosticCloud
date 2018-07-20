import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/common/Home/home'
// import evaluating from '@/common/Evaluating/evaluating'
// import overview from '@/common/Home/overview'
// import example from '@/common/Example/example'
// import expertTeam from '@/common/ExpertTeam/expertTeam'
// import evaluatingPage from '@/common/Evaluating/evaluatingPage'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  routes: [{
      path: "/",
      redirect: "/loginPage"
    }, //重定向  
    {
      path: '/overview',
      name: 'overview',
      component: (resolve) => require(['../common/Home/overview.vue'], resolve)
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: (resolve) => require(['../common/Evaluating/evaluating.vue'], resolve)
    },
    {
      path: '/evaluatingCenter',
      name: 'evaluatingCenter',
      component: (resolve) => require(['../common/EvaluatingCenter/evaluatingCenter.vue'], resolve)
    },
    {
      path: '/loginPage/',
      name: 'loginPage',
      component: (resolve) => require(['../common/LoginPage/loginPage.vue'], resolve)
    },
    {
      path: '/register/',
      name: 'register',
      component: (resolve) => require(['../common/RegisterPage/registerPage.vue'], resolve)
    },
    {
      path: '/enterpriseInfo/',
      name: 'enterpriseInfo',
      component: (resolve) => require(['../common/UserCenter/enterpriseInfo.vue'], resolve)
    },
    {
      path: '/personalInfo/',
      name: 'personalInfo',
      component: (resolve) => require(['../common/UserCenter/personalInfo.vue'], resolve)
    },
    {
      path: '/modifyPassword/',
      name: 'modifyPassword',
      component: (resolve) => require(['../common/UserCenter/modifyPassword.vue'], resolve)
    },
    {
      path: '/registerActive/',
      name: 'registerActive',
      component: (resolve) => require(['../common/RegisterPage/registerActive.vue'], resolve)
    },
  ],
  // mode: "history"
})

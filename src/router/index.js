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
      redirect: "/overview"
    }, //重定向  
    {
      path: '/overview',
      name: 'overview',
      component: (resolve) => require(['../common/Home/overview.vue'], resolve)
      // component: overview
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: (resolve) => require(['../common/Evaluating/evaluating.vue'], resolve)
      //component: evaluating
    },
    {
      path: '/example',
      name: 'example',
      component: (resolve) => require(['../common/Example/example.vue'], resolve)
      //component: example
    },
    {
      path: '/expertTeam',
      name: 'expertTeam',
      component: (resolve) => require(['../common/ExpertTeam/expertTeam.vue'], resolve)
      //component: expertTeam
    },
    {
      path: '/evaluatingPage/',
      name: 'evaluatingPage',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/Evaluating/evaluatingPage.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/loginPage/',
      name: 'loginPage',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/LoginPage/loginPage.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/register/',
      name: 'register',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/RegisterPage/registerPage.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/enterpriseInfo/',
      name: 'enterpriseInfo',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/UserCenter/enterpriseInfo.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/personalInfo/',
      name: 'personalInfo',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/UserCenter/personalInfo.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/modifyPassword/',
      name: 'modifyPassword',
      params: {
        id: ""
      },
      component: (resolve) => require(['../common/UserCenter/modifyPassword.vue'], resolve)
      //component: evaluatingPage
    },
  ],
  mode: "history"
})

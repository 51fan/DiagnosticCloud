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
    // {
    //   path: '/',
    //   component: (resolve) => require(['../common/Home/overview.vue'], resolve)
    //   // component: overview
    // }, 
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
      path: '/evaluatingPage',
      name: 'evaluatingPageself:id',
      component: (resolve) => require(['../common/Evaluating/evaluatingPage.vue'], resolve)
      //component: evaluatingPage
    },
    {
      path: '/evaluationEnd',
      name: 'evaluationEnd',
      component: (resolve) => require(['../common/Evaluating/evaluationEnd.vue'], resolve)
    }
  ],
  mode: "history"
})

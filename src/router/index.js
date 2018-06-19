import Vue from 'vue'
import Router from 'vue-router'
import home from '@/common/Home/home'
import evaluating from '@/common/Evaluating/evaluating'
import overview from '@/common/Home/overview'
import example from '@/common/Example/example'
import expertTeam from '@/common/ExpertTeam/expertTeam'
import evaluatingPage from '@/common/Evaluating/evaluatingPage'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/overview',
      name: 'overview',
      component: overview
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: evaluating
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/expertTeam',
      name: 'expertTeam',
      component: expertTeam
    },
    {
      path: '/evaluatingPage',
      name: 'evaluatingPage',
      component: evaluatingPage
    }
  ]
})

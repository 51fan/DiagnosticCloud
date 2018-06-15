import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home/home'
import evaluating from '@/components/Home/evaluating'
import overview from '@/components/Home/overview'
import example from '@/components/Home/example'
import expertTeam from '@/components/Home/expertTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
]
})

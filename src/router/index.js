import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Quiz from '@/components/Quiz'
import Outcome from '@/components/Outcome'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Title},
    {path: '/quiz', component: Quiz},
    {path: '/outcome', component: Outcome},
  ]
})
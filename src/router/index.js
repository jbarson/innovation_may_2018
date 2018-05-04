import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Quiz1 from '@/components/Quiz1'
import Quiz2 from '@/components/Quiz2'
import Quiz3 from '@/components/Quiz3'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Title},
    {path: '/quiz1', component: Quiz1},
    {path: '/quiz2', component: Quiz2},
    {path: '/quiz3', component: Quiz3},
  ]
})
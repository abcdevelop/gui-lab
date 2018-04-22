import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EleveList from '@/components/eleve/EleveList'
import EleveConsult from '@/components/eleve/EleveConsult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/EleveList',
      name: 'EleveList',
      component: EleveList
    },
    {
      path: '/EleveConsult',
      name: 'EleveConsult',
      component: EleveConsult
    }
  ],
  mode: 'history'
})

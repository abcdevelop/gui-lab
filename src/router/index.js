import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EleveList from '@/components/eleve/EleveList'
import EleveConsult from '@/components/eleve/EleveConsult'
import Talents from '@/components/talents/Talents'

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
    },
    {
      path: '/Talents',
      name: 'Talents',
      component: Talents
    }
  ],
  mode: 'history'
})

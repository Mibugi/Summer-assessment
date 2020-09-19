import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import My from '@/components/page/My'
import Shop from '@/components/page/Shop'
import Goods from '@/components/page/Goods'
import Vip from '@/components/page/Vip'
import Setup from '@/components/page/Setup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    }
  ]
})
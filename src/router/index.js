import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import DataManager from '../pages/data-manager/DataManager'
import DataAdd from '../pages/data-add/DataAdd'
import myEcharts from '../pages/echarts-test/myEcharts'
import UserList from '../pages/data-manager/user-list/UserList'
import StoreList from '../pages/data-manager/store-list/StoreList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/data-manager/user-list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/data-manager/store-list',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/data-manager',
      name: 'DataManager',
      component: DataManager
    },
    {
      path: '/data-add',
      name: 'DataAdd',
      component: DataAdd
    },
    {
      path: '/echarts-test',
      name: 'myEcharts',
      component: myEcharts
    }
  ]
})


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import MonolithOrderManager from "./components/listers/MonolithOrderCards"
import MonolithOrderDetail from "./components/listers/MonolithOrderDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import InventoryInventoryManager from "./components/listers/InventoryInventoryCards"
import InventoryInventoryDetail from "./components/listers/InventoryInventoryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/monoliths/orders',
                name: 'MonolithOrderManager',
                component: MonolithOrderManager
            },
            {
                path: '/monoliths/orders/:id',
                name: 'MonolithOrderDetail',
                component: MonolithOrderDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '/inventories/inventories',
                name: 'InventoryInventoryManager',
                component: InventoryInventoryManager
            },
            {
                path: '/inventories/inventories/:id',
                name: 'InventoryInventoryDetail',
                component: InventoryInventoryDetail
            },



    ]
})

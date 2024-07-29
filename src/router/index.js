import Vue from 'vue'
import VueRouter from 'vue-router'
import GridSystem from '@/views/GridSystem.vue' 
import GridSystem2 from '@/views/HomeView.vue'
import Button from '@/views/Button.vue'
import Table from '@/views/Table.vue'
import Icon from '@/views/Icon.vue'
import Form from '@/views/Form.vue'

import Temp from '@/views/Temp.vue'
import Menu from '@/views/MenuInfo.vue'

import SignIn from '@/views/authentication/SignIn.vue'
import SignUp from '@/views/authentication/SignUp.vue'
import ProductionList from '@/views/page/ProductionList.vue'

import DefaultLayout from '@/layouts/default/index.vue'
import AuthenticationLayout from '@/layouts/authentication/index.vue'
import PageLayout from '@/layouts/page/index.vue'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children: [
            {
                path:'/',
                name:'Dash',
                component:GridSystem2
            },
            {
                path:'/grid',
                name:'GridSystem',
                component:GridSystem
            },
            {
                path:'/button',
                name:'Button',
                component:Button
            },
            {
                path:'/table',
                name:'Table',
                component:Table
            },
            {
                path:'/icon',
                name:'Icon',
                component:Icon
            },
            {
                path:'/form',
                name:'Form',
                component:Form
            },
            {
                path:'/temp',
                name:'Temp',
                component:Temp
            },
            {
                path:'/menu',
                name:'Menu',
                component:Menu
            },

            {
                path: '/user',
                name: 'ListView',
                component: () => import(/* webpackChunkName: "user" */ '@/views/ListView.vue')
            }
        ]
    },
    {
        path:'/authentication',
        component:AuthenticationLayout,
        children: [
            {
                path:'sign-in',
                name:'SignIn',
                component:SignIn
            },
            {
                path:'sign-up',
                name:'SignUp',
                component:SignUp
            }
        ]
    },
    {
        path:'/page',
        component:PageLayout,
        children: [
            {
                path:'product-list',
                name:'ProductList',
                component:ProductionList
            }
        ]
    }
    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
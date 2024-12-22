//import vue router 
import { createRouter, createWebHistory } from 'vue-router'

//define a routes 
const routes = [ 
    { 
        path: '/', 
        name: 'home', 
        component: () => import( /* webpackChunkName: "home" */'../views/home.vue') 
    }, 
    { 
        path: '/alats', 
        name: 'alats.index', 
        component: () => import( /* webpackChunkName: "index" */'../views/alats/index.vue') 
    }, 
    { 
        path: '/create', 
        name: 'alats.create', 
        component: () => import( /* webpackChunkName: "create" */'../views/alats/create.vue') 
    }, 
    { 
        path: '/edit/:id', 
        name: 'alats.edit', 
        component: () => import( /* webpackChunkName: "edit" */'../views/alats/edit.vue') 
    },
    { 
        path: '/customers', 
        name: 'customers.index', 
        component: () => import( /* webpackChunkName: "index" */'../views/customers/index.vue') 
    }, 
    { 
        path: '/create', 
        name: 'customers.create', 
        component: () => import( /* webpackChunkName: "create" */'../views/customers/create.vue') 
    }, 
    { 
        path: '/edit/:id', 
        name: 'customers.edit', 
        component: () => import( /* webpackChunkName: "edit" */'../views/customers/edit.vue') 
    } 
] 
 
//create router 
const router = createRouter({ 
    history: createWebHistory(), 
    routes // <-- routes, 
}) 
 
export default router
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/management/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')),'home');
const userList = r => require.ensure([], () => r(require('@/page/userList'),'userList'));
const sellerList = r => require.ensure([], () => r(require('@/page/management/sellerList'),'sellerList'));
const foodList = r => require.ensure([], () => r(require('@/page/management/foodList'),'foodList'));
const orderList = r => require.ensure([], () => r(require('@/page/management/orderList'),'orderList'));
const adminList = r => require.ensure([], () => r(require('@/page/management/adminList'),'adminList'))
const routes = [
	{
		path: '/',
		component: login
    },{
        path: '/manage',
        component : manage,
        name : '',
        children : [{
            path : '',
            component : home,
            meta : []
        },{
            path : '/userList',
            component : userList
        },{
            path : '/sellerList',
            component : sellerList
        },{
            path : '/foodList',
            component : foodList
        },{
            path : '/orderList',
            component : orderList
        },{
            path : '/adminList',
            component : adminList
        }]
    }]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
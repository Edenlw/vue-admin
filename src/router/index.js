import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')),'home');
const userList = r => require.ensure([], () => r(require('@/page/userList'),'userList'));
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
        }]
    }]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'
import login from './views/login/login.vue'
import reg from '@/views/reg/reg.vue'
import essayInfo from "@/views/essayInfo/essayInfo.vue";
import personalCenter from "@/views/personalCenter/personalCenter.vue";
import essayList from "@/views/essayList/essayList.vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{
                title:'主页'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta:{
                title:'登录页面'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: reg,
            meta:{
                title:'注册页面'
            }
        },
        {
            path: '/essayInfo',
            name: 'essayInfo',
            component: essayInfo,
            meta:{
                title:'文章内容'
            }
        },
        {
            path: '/personalCenter',
            name: 'personalCenter',
            component: personalCenter,
            meta: {
                title: '个人中心',
                requireAuth: true
            }
        },
        {
            path: '/essayList',
            name: 'essayList',
            component: essayList,
            meta: {
                title: '文章列表',
            }
        }
    ],
})
//拦截器
router.beforeEach((to, from, next) => {
    //路由中写了requireAuth是需要登录验证的路由
    if (to.matched.some(record => record.meta.requireAuth)) {
        let username = sessionStorage.getItem('username')
        //未登录，身份证为空
        if (username == '' || !username) {
            next({path: '/login'})
        } else {
            next()
            window.reload()
        }
    } else {
        next()
    }
});
export default router



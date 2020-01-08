import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as toTop from '@/utils/toTop'
import VueCookies from 'vue-cookies'

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//iView-ui
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
//Eharts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(VueCookies);
Vue.prototype.$toTop = toTop


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')






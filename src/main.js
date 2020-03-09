import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as toTop from '@/utils/toTop'
import VueCookies from 'vue-cookies'

//Element-ui
import ElementUI from 'element-ui';
// import {
// 	Button,
// 	Input,
// 	Select,
// 	Rate,
// 	Form,
// 	FormItem,
// 	Table,
// 	Tag,
// 	Avatar,
// 	Loading,
// 	Menu,
// 	MenuItem,
// 	Tabs,
// 	TabPane,
// 	Dropdown,
// 	DropdownItem,
// 	DropdownMenu,
// 	Steps,
// 	Dialog,
// 	Popover,
// 	Timeline,
// 	TimelineItem,
// 	Divider,
// 	Image,
//     Option,
//     Row,
//     Col,
//     Tooltip
// } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//iView-ui
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
//Eharts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
// Vue.use(Button);
// Vue.use(Option);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Input);
// Vue.use(Select);
// Vue.use(Rate);
// Vue.use(Tooltip);
// Vue.use(Dropdown);
// Vue.use(Image);
// Vue.use(Form);
// Vue.use(Dialog);
// Vue.use(FormItem);
// Vue.use(DropdownItem);
// Vue.use(Table);
// Vue.use(Divider);
// Vue.use(Tag);
// Vue.use(Popover);
// Vue.use(Avatar);
// Vue.use(DropdownMenu);
// Vue.use(TabPane);
// Vue.use(TimelineItem);
// Vue.use(Loading);
// Vue.use(Timeline);
// Vue.use(Steps);
// Vue.use(Menu);
// Vue.use(MenuItem);
// Vue.use(Tabs);
Vue.use(ElementUI)

Vue.use(ViewUI);
Vue.use(VueCookies);
Vue.prototype.$toTop = toTop


new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')






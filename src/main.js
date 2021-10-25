import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store';
import {router,RouterMount} from './router.js'  //路径换成自己的
import link from 'uni-simple-router/dist/link.vue'     

Vue.component('s-link',link)
Vue.use(router)
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
// #ifdef H5
RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
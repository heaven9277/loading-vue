/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-13 10:09:25
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-13 10:29:26
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import vueLoading from './lib/index'
Vue.use(vueLoading)
new Vue({
  render: h => h(App),
}).$mount('#app')

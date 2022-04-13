/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 15:20:20
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-13 11:51:00
 */
import loadingViewerVue from './loadingViewerVue.vue'
//凡是vue插件一定有这个方法。目的是use使用，才能被use引用
let instance;
let optionObj={};
let install = function (Vue,options) {
    //存储好设置的参数
    optionObj = {
        ...options
    }
    //挂载在原型上  使用的时候this.$showLoading()
    Vue.prototype.$showLoading = function (domId) {
        //加载在设置的div上
        //Vue.extend可以继承这个组件，然后得到一个新的组件
        const loadingVue = Vue.extend(loadingViewerVue);
        //创建一个新的实例，实例挂载在一个空的div
        let options = {
            visible:true,
            ...optionObj
        }
        const c = new loadingVue({
            data:options
        })
        instance = c.$mount(document.createElement('div'));
        if(domId){
            const domIdDiv = document.getElementById(domId);
            domIdDiv.appendChild(instance.$el); //将div添加到body中
            return;
        }
        document.body.appendChild(instance.$el); //将div添加到body中
    }
    Vue.prototype.$hideLoading = function(domId){
        if(instance&&instance.$el){
            instance.visible = false;
            setTimeout(()=>{
                if(domId){
                    const domIdDiv = document.getElementById(domId);
                    domIdDiv.removeChild(instance.$el);
                    instance = null;
                    return;
                }
                document.body.removeChild(instance.$el);
                instance = null;
            },500)
        }
    }
}
export default install
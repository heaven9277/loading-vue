/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-13 13:26:45
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-13 13:30:05
 */
var path = require('path');
module.exports = {
    publicPath:'/dist/',
    outputDir:'dist',
    pages:{
        index:{
            entry:'./src/lib/index.js',
            output:{
                path:path.resolve(__dirname,'./dist'),
                publicPath:'/dist/',
                filename:'loading-vue.js',
                library:'loading-vue',
                libraryTarget:'umd',
                umdNameDefine:true
            }
        }
    }
}
/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-05-08 20:17:58
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-05-09 22:04:51
 * @FilePath: \learn-three-demo\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './styles/index.scss'

const pinia = createPinia()

createApp(App).use(pinia).use(ElementPlus).use(router).mount('#app')

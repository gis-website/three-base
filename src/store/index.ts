/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-05-07 20:54:09
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-05-10 20:26:13
 * @FilePath: \xin-meng-he-project\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { threeStore } from '@/models/threeModel'

export const useThreeStore = defineStore('threeObj', {
  state: () => threeStore,
  getters: {
    getThreeObj (state): any {
      return state.threeStore
    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setThreeObj (payload: any) {
      this.threeStore = payload
    }
  }
})

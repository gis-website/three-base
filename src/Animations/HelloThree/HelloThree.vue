<!--
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-05-08 20:28:07
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-05-09 21:18:02
 * @FilePath: \learn-three-demo\src\Animations\HelloThree\HelloThree.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="container">
    <div id="threeContainer" ref="threeContainer"></div>
  </div>
</template>

<script lang="ts" setup >
import { defineComponent, onMounted, ref } from 'vue'
import { init } from './index'

const threeContainer = ref()
onMounted(() => {
  init(threeContainer.value)
})

defineComponent({
  name: 'HelloThree'
})
</script>

<style lang='less' scoped>
#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  #threeContainer {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
}
</style>

/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-05-08 20:35:33
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-05-08 21:43:03
 * @FilePath: \learn-three-demo\src\types\three.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ThreeBase from '@/base/threeBase'
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 导入后期效果合成器
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// three框架本身自带效果
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

interface threeObj {
  threeObj: null | ThreeBase
}

export const threeStore:threeObj = {
  threeObj: null
}

export interface threeClass {
  element: HTMLDivElement
  width: number
  height: number
  sence: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
  control: OrbitControls
  effectComposer: EffectComposer
  unrealBloomPass: UnrealBloomPass
}

/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-05-08 20:29:36
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-05-08 21:57:32
 * @FilePath: \learn-three-demo\src\views\HelloThree\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ThreeBase from '@/base/threeBase'
import { useThreeStore } from '@/store/index'
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

export const init = (element: HTMLDivElement):void => {
  const renderer = new ThreeBase(element)
  useThreeStore().setThreeObj(renderer)
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new Mesh(geometry, material)
  renderer.sence.add(cube)
  renderer.addAxis()
  renderer.render()
}

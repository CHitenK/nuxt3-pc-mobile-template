import type { RouterConfig } from '@nuxt/schema'
import routersMap from '~/routers/index'
import { getDeviceType } from '~/utils/index'

/* 根据终端，返回不同路由资源 */
export default <RouterConfig> {
  routes: (_routes) => {
    const deviceType = getDeviceType() // pc mobile
    console.log('终端', deviceType.value)
    return routersMap[deviceType.value] ?? routersMap.PC
  },
}

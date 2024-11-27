import type { RouterConfig } from '@nuxt/schema'
import routersMap from '~/routers/index'
import { getDeviceType } from '~/utils/index'

export default <RouterConfig> {
  routes: (_routes) => {
    const deviceType = getDeviceType()
    console.log('终端', deviceType.value)
    return routersMap[deviceType.value] ?? routersMap.PC
  },
}

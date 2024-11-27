
/* routers/index.ts */

/* 路由表 */

/* 公共路由 */
const commonRouters = [
  {
    path: '/',
    redirect: '/index'
  }
]

/* 注意 PC 与 Mobile 的路由的Path name 须保持一致 */
/* PC  */
const PC_Routers = [
  {
    name: 'index',
    path: '/index',
    component: () => import('../PC/views/index.vue')
  }
]

/* Mobile */
const Mobile_Routers = [
  {
    name: 'index',
    path: '/index',
    component: () => import('../mobile/views/index.vue')
  }
]

export default {
  PC: [ ...PC_Routers, ...commonRouters ],
  mobile: [ ...Mobile_Routers, ...commonRouters ]
}

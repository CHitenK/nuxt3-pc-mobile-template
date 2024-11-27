// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  /* 是否自动引入 */
  imports: {
    autoImport: true
  },

  /*  引入 element-plus 参考 https://nuxt.com/modules/element-plus */
  modules: [
    '@element-plus/nuxt',
    '@vant/nuxt'
  ],
  plugins: [
    '~/plugins/flexible'
  ],
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue({ file = '' }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75;
        },
        propList: ['*'],
        mediaQuery: false,
        exclude: (file = '') => {
          // 只对 移动端的 /mobile/、vantUi 文件夹中的文件进行 px 转 rem，其他文件不转换
          const needRemArr = ['/mobile/', 'vant']
          const bl = needRemArr.find(item => file?.includes(item))
          if (bl) return false
          return true;
        }
      },
    }
  },
  compatibilityDate: '2024-11-26'
})

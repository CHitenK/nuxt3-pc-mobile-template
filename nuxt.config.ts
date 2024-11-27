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
          // 只对 /mobile、vantUi 文件夹中的文件进行 px 转 rem，其他文件不转换
          const bl1 = (/mobile/).test(file)
          const bl2 = file?.includes('vant')
          if (bl1) return false
          if (bl2) return false
          return true;
        }
      },
    }
  },
  compatibilityDate: '2024-11-26'
})

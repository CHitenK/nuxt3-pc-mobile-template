# nuxt3-PC端和移动端页面集成模板

PC端和移动端页面集成模板，基于Nuxt3， Element-Plus、VantUi搭建，PC端和移动端页面集成在同一项目中；访问时，同一入口路径。使用postcss-pxtorem完成移动端适配。


# 项目主要目录结构

- .nuxt/
-
- .output/
-
- app/
- - | router.options.ts   ---------------------------- 路由配置
-
- layouts/
- - | default.vue         ---------------------------- 布局文件
-
- mobile/                 ---------------------------- 移动端资源
- - | layout.vue          ---------------------------- 移动端layout
- -
- - | style/              ---------------------------- 移动端 style
- - - - | base.scss
- -
- - | views/              ---------------------------- 移动端页面 views
- - - - | index.vue
-
- PC/                     ---------------------------- PC端资源
- - | layout.vue          ---------------------------- PC端layout
- -
- - | style/              ---------------------------- PC端 style
- - - - | base.scss
- -
- - | views/              ---------------------------- PC端页面 views
- - - -| index.vue
-
- plugins/                ---------------------------- 插件
- - | flexible.ts
-
- public/                 ---------------------------- 公共资源
-
- - | favicon.ico
-
- routers/                ---------------------------- 自定义路由表
- - | index.ts
-
- server/                 ---------------------------- server
- - | tsconfig.json
-
- styles/                 ---------------------------- 公共样式
- - | common.css
-
- utils/                  ----------------------------- 工具函数
- - | index.ts
-
- app.vue                 ----------------------------- 入口
-
- nuxt.config.ts          ----------------------------- nuxt 配置
-
- package.json
-
- tsconfig.json
-

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```


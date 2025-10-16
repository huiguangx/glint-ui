# 安装

## 环境支持

Glint UI 基于 Vue 3 开发，支持现代浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) IE | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) Firefox | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) Chrome | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) Safari |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| not supported                                                              | last 2 versions                                                                             | last 2 versions                                                                          | last 2 versions                                                                         |

> Glint UI 仅支持 Vue 3.x 版本。

## 使用包管理器

推荐使用包管理器（如 npm、yarn 或 pnpm）安装 Glint UI。

```bash
# 选择一个你喜欢的包管理器

# NPM
npm install @glint-ui/components

# Yarn
yarn add @glint-ui/components

# pnpm
pnpm install @glint-ui/components
```

如果您的网络环境不好，推荐使用 [cnpm](https://github.com/cnpm/cnpm) 或 [npmmirror](https://npmmirror.com/) 镜像。

## 完整引入

Glint UI 可以通过插件方式完整引入所有组件：

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入 Glint UI 组件库
import GlintUI from '@glint-ui/components'

const app = createApp(App)

// 使用插件方式注册所有组件
app.use(GlintUI)

app.mount('#app')
```

## 按需引入

Glint UI 提供了按需引入组件的方式：

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 按需引入组件
import { GlintButton } from '@glint-ui/components'

const app = createApp(App)

// 注册组件
app.component('GlintButton', GlintButton)

app.mount('#app')
```

## 开始使用

现在你可以启动项目了，让我们启动开发服务器，看看会发生什么：

```bash
# 通过 npm
npm run dev

# 通过 yarn
yarn dev

# 通过 pnpm
pnpm dev
```

在模板中使用 Glint UI 组件：

```vue
<template>
  <div>
    <GlintButton type="primary">主要按钮</GlintButton>
  </div>
</template>
```
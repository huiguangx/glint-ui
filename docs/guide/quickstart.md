# 快速开始

本节将介绍如何在项目中使用 Glint UI。

## 引入组件

Glint UI 提供了两种引入方式：

### 1. 完整引入

完整引入会注册所有组件：

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import GlintUI from '@glint-ui/components'

const app = createApp(App)

app.use(GlintUI)
app.mount('#app')
```

### 2. 按需引入

按需引入可以减小打包体积：

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { GlintButton } from '@glint-ui/components'

const app = createApp(App)

app.component('GlintButton', GlintButton)
app.mount('#app')
```

## 开始使用

现在你可以在任意页面中使用 Glint UI 组件了：

```vue
<template>
  <div>
    <GlintButton>默认按钮</GlintButton>
    <GlintButton type="primary">主要按钮</GlintButton>
    <GlintButton type="success">成功按钮</GlintButton>
    <GlintButton type="info">信息按钮</GlintButton>
    <GlintButton type="warning">警告按钮</GlintButton>
    <GlintButton type="danger">危险按钮</GlintButton>
  </div>
</template>

<script setup lang="ts">
// 无需额外导入，组件已在全局注册
</script>
```

## 构建部署

对于生产环境，我们需要构建应用：

```bash
# 通过 npm
npm run build

# 通过 yarn
yarn build

# 通过 pnpm
pnpm build
```

构建完成后，会生成 `dist` 目录，其中包含已编译的代码，可以部署到服务器上。
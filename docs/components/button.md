# Button 按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `type`、`size`、`disabled` 等来定义按钮的样式。

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
```

:::

## 不同尺寸

:::demo 使用 `size` 属性来定义按钮的尺寸。

```vue
<template>
  <div>
    <GlintButton size="large">大型按钮</GlintButton>
    <GlintButton>默认按钮</GlintButton>
    <GlintButton size="small">小型按钮</GlintButton>
    <GlintButton size="mini">超小按钮</GlintButton>
  </div>
</template>
```

:::

## 文字按钮

:::demo 没有边框和背景色的按钮。

```vue
<template>
  <div>
    <GlintButton type="text">文字按钮</GlintButton>
    <GlintButton type="text" disabled>文字按钮(禁用)</GlintButton>
  </div>
</template>
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性来定义按钮是否被禁用。

```vue
<template>
  <div>
    <GlintButton disabled>默认按钮</GlintButton>
    <GlintButton type="primary" disabled>主要按钮</GlintButton>
    <GlintButton type="success" disabled>成功按钮</GlintButton>
    <GlintButton type="info" disabled>信息按钮</GlintButton>
    <GlintButton type="warning" disabled>警告按钮</GlintButton>
    <GlintButton type="danger" disabled>危险按钮</GlintButton>
  </div>
</template>
```

:::

## Button API

### Button 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | large / medium / small / mini | medium |
| type | 类型 | string | primary / success / warning / danger / info / text | text |
| disabled | 是否禁用 | boolean | true / false | false |
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 添加 import.meta.glob 的类型声明
interface ImportMeta {
  glob: (pattern: string | string[], options?: { eager?: boolean }) => Record<string, any>;
}
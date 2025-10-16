import { App, Plugin, Component } from "vue";
import { autoImportComponents } from "@glint-ui/utils";

// 自动导入所有组件模块
const modules = import.meta.glob(["./**/index.ts", "!./index.ts"], {
  eager: true,
});

// 从导入的模块中提取组件
const components: (Component & { name: string })[] =
  autoImportComponents(modules);

// 定义组件库插件
const GlintUI: Plugin = {
  /**
   * 安装所有组件到全局应用实例
   * @param app - Vue 应用实例
   */
  install(app: App): void {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component);
      } else {
        console.warn("跳过未定义名称的组件", component);
      }
    });
  },
};

// 为了支持按需导入，我们需要显式导出每个组件
// 由于ESLint/TSC的限制，我们需要手动维护这些导出
// 未来可以使用代码生成工具来自动生成这部分内容
// 示例：假设有一个按钮组件，取消以下注释
// export { GlintButton } from './button';

// 导出组件列表和默认插件
export { components };
export default GlintUI;

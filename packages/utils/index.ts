import { App, Plugin } from "vue";

// 定义一个带 install 方法的 SFC 类型
type SFCWithInstall<T> = T & { install(app: App): void };

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    // 注册主组件
    const comp = main as any;
    app.component(comp.name, main);
    // 注册额外组件（如果有）
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        app.component(comp.name, comp);
      }
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }

  return main as SFCWithInstall<T> & E;
};

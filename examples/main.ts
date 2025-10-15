import { createApp } from "vue";
import App from "./App.vue";
// 使用插件方式引入所有组件
import GlintButton from "@glint-ui/components";
// 或者按需导入组件
// import { GlintButton } from "@glint-ui/components";

const app = createApp(App);

// 使用插件注册所有组件
app.use(GlintButton);

// 如果按需注册组件
// app.component("GlintButton", GlintButton);

app.mount("#app");

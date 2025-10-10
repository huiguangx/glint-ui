import { createApp } from "vue";
import App from "./App.vue";
import GlintButton from "@glint-ui/components/button";

const app = createApp(App);

// 使用插件方式注册
app.use(GlintButton);

app.mount("#app");

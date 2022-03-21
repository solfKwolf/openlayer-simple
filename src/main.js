import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// css reset
import "normalize.css";

import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
} from "element-plus";

const app = createApp(App);

app.use(ElContainer);
app.use(ElHeader);
app.use(ElAside);
app.use(ElMain);
app.use(ElMenu);
app.use(ElSubMenu);
app.use(ElMenuItem);

app.use(store).use(router).mount("#app");

import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/utils/plugin";
import VueMethods from "@/utils/methods";
import "@/Permission";

import { Button } from "vant";

Vue.use(Button);
Vue.use(VueMethods);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

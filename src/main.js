import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/utils/plugin";
import VueMethods from "@/utils/methods";
import "@/Permission";

import { Button } from "vant";
import { NoticeBar } from "vant";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Icon } from "vant";
import { SwipeCell } from "vant";
import { Card } from "vant";
import { AddressEdit } from "vant";
import { Area } from "vant";

Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(Button);

Vue.use(VueMethods);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

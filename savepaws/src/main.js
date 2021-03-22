import Vue from "vue";

import App from "./app.vue";
import {router} from "./router";
import {store} from "./store";

import "./plugins";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

router.onReady(() => {
  app.$mount("#app");
});

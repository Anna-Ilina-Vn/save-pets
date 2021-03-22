import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

const isDev = process.env.NODE_ENV === "development";

const store = new Vuex.Store({
  strict: isDev,
  modules,
});

export {
  store,
};

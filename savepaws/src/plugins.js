import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueMask from "v-mask";
import PortalVue from "portal-vue";
import SIcon from "./ui/s-icon.vue";

Vue.use(PortalVue);
Vue.use(VueMask);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY_API,
    language: "uk",
    region: "UA",
    libraries: "places",
  },
  installComponents: false,
});

Vue.component("s-icon", SIcon);
Vue.component("google-map", VueGoogleMaps.Map);
Vue.component("google-map-marker", VueGoogleMaps.Marker);
Vue.component("google-map-autocomplete", VueGoogleMaps.Autocomplete);

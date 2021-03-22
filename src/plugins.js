import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueMask from "v-mask";

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

document.addEventListener("DOMContentLoaded", () => {
  Vue.component("google-map", VueGoogleMaps.Map);
  Vue.component("google-map-marker", VueGoogleMaps.Marker);
  Vue.component("google-map-autocomplete", VueGoogleMaps.Autocomplete);
});

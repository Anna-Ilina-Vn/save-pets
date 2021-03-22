<script>
import {gmapApi} from "vue2-google-maps";
import * as views from "../lib/views-list";
import ManualLocation from "../components/manual-location.vue";
import SButton from "../components/s-button.vue";

export default {
  name: "find-location-view",

  components: {
    ManualLocation,
    SButton,
  },

  data: () => ({
    coords: {
      lat: 50.4,
      lng: 30.6,
    },
    isCoordsEntered: false,
    inputLocation: "",
    zoom: 17,
  }),

  computed: {
    google: gmapApi,
    isValidCoords() {
      return !!this.coords.lat && !!this.coords.lng && this.isCoordsEntered;
    },
  },

  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        const {latitude: lat, longitude: lng} = coords;
        this.coords = {lng, lat};

        this.coordsEntered();
        this.runGeocode();
      }, this.coordsDenied);
    }
  },

  methods: {
    runGeocode() {
      const geocoder = new this.google.maps.Geocoder();

      geocoder.geocode({location: this.coords}, (results, status) => {
        if (status === "OK" && results.length) {
          const [geo] = results;
          const [number, street] = geo.address_components;

          this.inputLocation = `${street.short_name}, ${number.short_name}`;

          this.coordsEntered();
        }
      });
    },
    changeAddress(geo) {
      const {location} = geo.geometry;

      this.coords = {
        lat: location.lat(),
        lng: location.lng(),
      };

      this.inputLocation = `${geo.name}, ${geo.vicinity}`;
      this.coordsEntered();
    },
    coordsEntered() {
      if (!this.isCoordsEntered) {
        this.isCoordsEntered = true;
      }
    },
    coordsDenied(err) {
      console.log(err);
    },
    handleChangeView() {
      this.$emit("change-view", views.SET_INFO_VIEW);
    },
  },
};
</script>

<template>
  <div class="view find-location-view">
    <div class="find-location-view__map">
      <google-map
        :center="coords"
        :zoom="zoom"
        :options="{
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
      >
        <google-map-marker
          :position="coords"
          :icon="{
            url: require('../assets/placeholder.svg')
          }"
        />
      </google-map>
    </div>

    <div class="find-location-view__bottom-bar">
      <manual-location
        :value="inputLocation"
        @change="changeAddress"
      >
        <s-button
          :disabled="!isCoordsEntered"
          @click="handleChangeView"
        >
          Знайшов тварину
        </s-button>
      </manual-location>
    </div>
  </div>
</template>

<style lang="scss">
.find-location-view__map {
  flex: 1 0;
}

.find-location-view__bottom-bar {
  height: 185px;
  padding: 15px 15px 23px;
  background: var(--light-100);
}
</style>

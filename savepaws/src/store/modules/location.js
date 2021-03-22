import {gmapApi as GoogleMaps} from "vue2-google-maps";
import * as types from "../mutations.types";

const DEFAULT_COORDS = {
  lat: 50.4,
  lng: 30.6,
};

const module = {
  state: {
    coords: DEFAULT_COORDS,
    address: "",
  },

  getters: {
    coords: (state) => state.coords,
    address: (state) => state.address,
  },

  mutations: {
    [types.UPDATE_COORDS](state, coords) {
      state.coords = coords;
    },
    [types.UPDATE_ADDRESS](state, payload) {
      state.address = payload;
    },
  },

  actions: {
    setAddress({commit}, payload) {
      const {geometry} = payload;

      commit(types.UPDATE_COORDS, {
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      });
      commit(types.UPDATE_ADDRESS, payload.formatted_address);
    },
    runGeocode({commit}, location) {
      const googleMaps = GoogleMaps();
      const geocoder = new googleMaps.maps.Geocoder();

      geocoder.geocode({location}, (results, status) => {
        if (status === "OK" && results.length) {
          const [geo] = results;
          commit(types.UPDATE_ADDRESS, geo.formatted_address);
        }
      });
    },
    getCurrentLocation({commit, dispatch}) {
      const options = {
        timeout: 10000,
        enableHighAccuracy: true,
      };

      if (!navigator.geolocation) {
        return;
      }

      navigator.geolocation.getCurrentPosition(({coords}) => {
        const {latitude: lat, longitude: lng} = coords;

        commit(types.UPDATE_COORDS, {lat, lng});
        dispatch("runGeocode", {lat, lng});
      }, console.warn, options);
    },
    // cancelMission({commit}) {
    // commit(types.UPDATE_REQUEST_STATUS, status.FAIL);
    // },
  },
};

export default module;

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
import { status } from "../store/modules/user-info";
import SButton from "../ui/s-button.vue";
import SInput from "../ui/s-input.vue";
import SModal from "../ui/s-modal.vue";
import SRadio from "../ui/s-radio.vue";
import SPreloader from "../ui/s-preloader.vue";
import SDriverFeedback from "../ui/s-driver-feedback.vue";

export default {
  name: "find-location-page",

  data: () => ({
    preload: true,
    cancelM: {
      radio: '',
      textarea: '',
    },
    isMissionCancel: false,
    footer: false,
  }), 

  components: {
    SButton,
    SInput,
    SModal,
    SRadio,
    SPreloader,
    SDriverFeedback,
  },

  computed: {
    ...mapGetters(["coords", "address", "requestStatus"]),
    zoom: () => 16,
    isModalVisible() {
      return status.FINISH === this.requestStatus;
    },
    //isMissionCancel() {
    //  return status.FAIL === this.requestStatus;
    //},
    isLocationEntered() {
      return !!this.address;
    },
    mapOptions: () => ({
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    }),
  },

  beforeCreate() {
    this.preload = true;
  },

  mounted() {
    this.$refs.map.$mapPromise.then(() => {
      this.getCurrentLocation();
      this.preload = false;
    });
  },

  methods: {
    ...mapActions(["getCurrentLocation", "setAddress", "resetStatus"]),
    resetCenter() {
      this.$refs.map.panTo(this.coords);
    },
    clearInput() {
      //или this.$set и создание нового объекта 
      //или мутация есть добавить в computed   ...mapState({ message: state => state.obj.message
      //или это в метод, а в computed задать значение
        this.address = this.$store.state.address = "";
        console.log(this.$store.state.address);
    },
    
    MissionCancel(value) {
      if(value) {
        this.isMissionCancel = false;
      } else if (!value) {
        this.isMissionCancel = false;
      }
    }, 
  },

};
</script>

<template>
  <div class="find-location-page">
    <div class="find-location-page__map">
      <router-link
        :to="{name: 'home-page', params: {
          fromLookup: true
        }}"
        class="find-location-page__backward"
      >
        <s-icon name="paw" fill="var(--white)" />
      </router-link>

      <button class="find-location-page__location-btn" @click="resetCenter">
        <s-icon name="location" />
      </button>

      <google-map ref="map" :zoom="zoom" :center="coords" :options="mapOptions">
        <google-map-marker
          :position="coords"
          :icon="{
            url: require('../assets/vector/placeholder.pure.svg')
          }"
        />
      </google-map>
    </div>

    <div class="find-location-page__footer" v-if="footer">
      <s-input
        label="Місце розташування"
        class="find-location-page__textfield"
        type="search"
        @clear="clearInput"
      >
        <google-map-autocomplete :value="address" placeholder @place_changed="setAddress" />
      </s-input>

      <s-button
        class="find-location-page__footer-submit"
        :disabled="!isLocationEntered"
        :to="{name: 'set-info-page'}"
      >Знайшов тварину</s-button>
    </div>
    <s-driver-feedback v-else-if="!footer">
 
    </s-driver-feedback>

    <portal-target name="modal">
      <s-modal v-if="isModalVisible" class="find-location-page__modal" title="Дякуємо тобі!">
        <p
          class="find-location-page__modal-message"
        >Сподіваємося знайти тварину на локації, яку ти нам залишив.</p>

        <s-button slot="footer" @click="resetStatus">Місія завершена</s-button>
      </s-modal>
    </portal-target>
    <portal-target name="modal-cancel-mission">
      <s-modal v-if="isMissionCancel" class="modal-cancel-mission" title="Щось пішло не так?">
        <fieldset class="modal-cancel-mission__body">
          <s-radio name="s" v-model="cancelM.radio" :value="'animal escaped'" label="тварина втікла" />
          <s-radio name="s" v-model="cancelM.radio" :value="'the service took a long time'" label="служба дуже довго їхала" />
          <s-radio name="s" v-model="cancelM.radio" :value="'personal circumstances'" label="не зміг залишитися через власні обставини" />
          <label class="modal-cancel-mission-message">
            <p>Твоя відповідь:</p>
            <textarea v-model="cancelM.textarea" name="s" rows="6" />
          </label>
        </fieldset>

        <s-button class="modal-cancel-mission-message__btn" slot="footer" @click="MissionCancel(true)" :disabled="!(cancelM.radio || cancelM.textarea)">Підтвердити</s-button>
        <s-button class="modal-cancel-mission-message__btn" slot="footer" @click="MissionCancel(false)" type="secondary">Скасувати</s-button>
      </s-modal>
    </portal-target>
    <s-preloader v-if="preload"/>
  </div>
</template>

<style lang="scss" scoped>

.find-location-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.find-location-page__map {
  flex: 1 0;
  position: relative;
}

.find-location-page__footer {
  height: 185px;
  padding: 15px 15px 23px;
  position: relative;

  background: var(--white);
  border-top: 1px solid rgba(51, 51, 51, 0.2);
}

.find-location-page__backward {
  position: absolute;
  right: 16px;
  top: 18px;
  z-index: 99;

  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background: var(--primary);
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
}

.find-location-page__location-btn {
  width: 40px;
  height: 40px;

  position: absolute;
  left: 16px;
  bottom: 32px;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--white);
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 0;
}

.find-location-page__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.find-location-page__footer-submit {
  margin-top: auto;
}

.find-location-page__textfield {
  width: 100%;
}

.find-location-page__modal-message-mission {
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

.find-location-page__footer .pac-target-input {
  padding-right: 40px;
}

.modal-cancel-mission__body {
  border: none;
  padding: 0;
}

.modal-cancel-mission .s-radio{
  border: none;
}

.modal-cancel-mission-message p {
  margin: 20px 0 10px 20px;
  font-size: 13px;
}

.modal-cancel-mission-message textarea{
  border-color: var(--primary);
  border-radius: 20px;
  width: 100%;
  resize: none;
  padding: 10px;
}


</style>

<style>
.find-location-page__modal .s-modal__container {
  max-width: 280px;
}

.modal-cancel-mission .s-modal__container {
  max-width: 340px;
  display: flex;
  flex-direction: column;
}

.modal-cancel-mission .s-radio__indicator {
  border: 2px solid var(--primary);
}

.modal-cancel-mission .s-modal__footer button {
  margin: 0 auto 16px;
  width: 70%;
}
</style>

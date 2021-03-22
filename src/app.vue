<script>
import * as views from "./lib/views-list";
import WelcomeView from "./views/welcome-view.vue";
import FindLocationView from "./views/find-location-view.vue";
import SetInfoView from "./views/set-info-view.vue";
import SModal from "./components/s-modal.vue";
import SButton from "./components/s-button.vue";

export default {
  name: "app",

  components: {
    WelcomeView,
    SetInfoView,
    FindLocationView,
    SModal,
    SButton,
  },

  data: () => ({
    activeView: views.WELCOME_VIEW,
    isModalVisible: false,
  }),
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<template>
  <div id="app">
    <keep-alive>
      <component
        :is="activeView"
        @change-view="activeView = $event"
        @success-message="showModal"
      />
    </keep-alive>
    <s-modal
      v-if="isModalVisible"
    >
      <p slot="header">
        Дякуємо тобі!
      </p>
      <p slot="body">
        Сподіваємося знайти тварину на локації, яку ти нам залишив.
      </p>
      <s-button
        slot="footer"
        class="modal-button"
        @click="closeModal"
      >
        Місія завершена
      </s-button>
    </s-modal>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/vars.scss";

*, *::before, *::after {
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

html {
  font-family: 'Rubik', sans-serif;
  min-height: -webkit-fill-available;
}

body {
  margin: 0;
}

#app {
  display: flex;
}

.view {
  width: 100%;
  flex: 1 0;

  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

.s-input__control {
  appearance: none;
  width: 100%;
  border: 1px solid var(--neutral-100);
  box-shadow: none;
  outline: none;
  font-size: 16px;
  border-radius: 33px;
  color: var(--secondary);

  padding: 11px 16px 12px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
}

img {
  display: block;
  max-width: 100%;
}

.pac-container {
  transform: translateY(calc(-100% - 70px));
}
</style>

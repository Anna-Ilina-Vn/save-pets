<script>
import SButton from "../components/s-button.vue";
import * as views from "../lib/views-list";

export default {
  name: "welcome-view",

  components: {
    SButton,
  },

  methods: {
    handleChangeView() {
      this.$emit("change-view", views.FIND_LOCATION_VIEW);
    },
  },
};
</script>

<template>
  <div class="view welcome-view">
    <div class="logo">
      <img
        src="../assets/logo.svg"
        alt="Savepets логотип"
      >
    </div>

    <div class="welcome-view__dog-picture">
      <img
        src="../assets/dog-picture.png"
        alt="Зображена собака"
      >
    </div>

    <p class="welcome__descr">
      Ми допомогаємо безпритульним тваринам знайти дім.
      Наша служба приїжджає на виклик та відвозить тварину у притулок,
      де їй надають належний догляд, після чого починають шукати їй родину.
    </p>

    <p class="welcome__descr">
      Усе, що тобі треба зробити - зв’язатися з нами і ми приїдемо за твариною.
    </p>

    <s-button
      class="welcome-view__action"
      @click="handleChangeView"
    >
      Знайшов тварину
    </s-button>
  </div>
</template>

<style lang="scss" scoped>
.welcome-view {
  margin: 32px 20px 24px;
  align-items: center;
}

.logo {
  width: 180px;
}

.welcome-view__dog-picture {
  margin: 32px 0;
}

.welcome__descr {
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
}

.welcome-view__action {
  margin-top: auto;
}
</style>

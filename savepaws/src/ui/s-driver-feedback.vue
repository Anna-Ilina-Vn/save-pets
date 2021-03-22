<script>

import SButton from "./s-button.vue";

export default {
  name: "s-driver-feedback",

  components: {
    SButton,
  },

};
</script>

<template>
  <div class="feedback">
    <slot name="feedback">
      <h2 class="feedback-title">
        Прийом, збираємося до тебе!
      </h2>
      <p class="feedback-dscr">
        Залишайся на місці, ми зв’яжемося з тобою
        протягом п’яти хвилин.
      </p>
    </slot>
    <p class="feedback-btn-dscr">
      Подзвони водію, якщо є питання
    </p>
    <a href="tel:0664273369">
      <s-button
        type="primary"
        @click="isMissionCancel = true"
      >
        Зв'язатися з водієм
      </s-button>
    </a>
    <s-button
      type="secondary"
      @click="isMissionCancel = true"
    >
      Отменить заявку
    </s-button>
  </div>
</template>

<style scoped>
* {
  color: var(--primary-text);
  margin: 0;
}

.feedback {
  text-align: center;
}

.feedback-title {
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;

  margin: 8px 0 16px 0;
}

.feedback-dscr {
  font-size: 16px;
  line-height: 24px;
  margin: 0 18px 16px;
  text-align: left;
}

.feedback-btn-dscr {
  color: #333333;
  opacity: 50%;
  font-size: 12px;
  line-height: 20px;
  margin: 0 20px 16px;
}

.feedback button {
  margin-bottom: 16px;
  width: 60%;
}

.feedback button a {
  color: var(--white);
}
</style>

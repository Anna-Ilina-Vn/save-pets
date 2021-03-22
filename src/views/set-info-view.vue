<script>
import * as views from "../lib/views-list";
import SButton from "../components/s-button.vue";
import SInput from "../components/s-input.vue";
import SRadio from "../components/s-radio.vue";
import SUpload from "../components/s-upload.vue";

class Model {
  fullname = ""

  phoneNumber = ""

  count = ""

  eng = ""

  isWait = true

  photos = []
}

export default {
  name: "set-info-view",

  components: {
    SButton,
    SInput,
    SRadio,
    SUpload,
  },

  data: () => ({
    model: new Model(),
  }),

  methods: {
    handleChangeView() {
      this.$emit("change-view", views.FIND_LOCATION_VIEW);
    },
    handleSubmit() {
      this.$emit("success-message", {
        isWait: this.isWait,
      });

      this.handleChangeView();
      this.model = new Model();
    },
  },
};
</script>

<template>
  <!-- eslint-disable max-len -->
  <div class="view set-info-view">
    <header class="set-info-view__header">
      <s-button
        type="icon"
        class="set-info-view__backward"
        @click="handleChangeView"
      >
        <svg
          width="12"
          height="21"
          viewBox="0 0 12 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5424 18.4052C12.1301 18.9785 12.1526 19.9312 11.5927 20.5331C11.0328 21.1349 10.1025 21.158 9.51477 20.5846C9.51477 20.5846 0.44563 11.5994 0.420894 11.5733C-0.158688 10.9524 -0.137011 9.96789 0.46931 9.37436L9.51468 0.417115C10.1014 -0.157264 11.0318 -0.13578 11.5927 0.465098C12.1536 1.06598 12.1326 2.01871 11.5458 2.59309L4.04732 10.1469C3.85382 10.3418 3.85378 10.6564 4.04724 10.8513L11.5424 18.4052Z"
            fill="#333333"
          />
        </svg>
      </s-button>

      <h1 class="set-info-view__title">
        Заявка
      </h1>
    </header>

    <form
      class="set-info-view__form"
      @submit.prevent="handleSubmit"
    >
      <fieldset>
        <legend hidden>
          Інформація
        </legend>

        <s-input
          v-model="model.fullname"
          label="Твоє ім'я"
          tip="(Не обов'язково)"
        />

        <s-input
          v-model="model.phoneNumber"
          v-mask="`(###) ### ## ##`"
          placeholder="(073) 999 99 99"
          label="Номер телефону"
          type="tel"
          required
        />

        <s-input
          v-model="model.count"
          label="Кількість тварин"
          type="number"
          required
        />

        <s-input
          v-model="model.eng"
          label="Опиши травми тварини, якщо є"
          required
        />
      </fieldset>

      <fieldset class="set-info-view__form-toggle">
        <legend>Зачекаєш приїзд служби?</legend>

        <div class="set-info-view__radio-group">
          <s-radio
            v-model="model.isWait"
            name="status"
            :value="true"
            label="Так"
          />
          <s-radio
            v-model="model.isWait"
            name="status"
            :value="false"
            label="Ні"
          />
        </div>
      </fieldset>

      <s-upload
        v-model="model.photos"
        class="set-info-view__upload"
        label="Фото тварини"
        tip="(Не обов'язково)"
      />

      <s-button class="set-info-view__submit">
        Підтвердити
      </s-button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.set-info-view__header {
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--light-100);

  position: sticky;
  left: 0;
  top: 0;

  flex: 0 0 60px;
}

.set-info-view__backward {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.set-info-view__form {
  margin-top: 12px;
  padding: 0 25px;
  flex: 1 0 auto;

  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

.set-info-view__form-toggle {
  margin-top: 8px;

  legend {
    color: var(--secondary);
    margin: 0 0 12px 0;
    text-align: center;
  }
}

.set-info-view__radio-group {
  display: flex;
  justify-content: center;

  > *:not(:first-child) {
    margin-left: 24px;
  }
}

.set-info-view__upload {
  margin: 24px 0;
}

.set-info-view__submit {
  margin: auto 0 24px;
  flex: 0 0 auto;
  display: block;
  width: 100%;
}
</style>

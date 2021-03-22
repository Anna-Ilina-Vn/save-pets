<script>
import {mapGetters, mapActions} from "vuex";
import SButton from "../ui/s-button.vue";
import SInput from "../ui/s-input.vue";
import SRadio from "../ui/s-radio.vue";
import SUpload from "../ui/s-upload.vue";

export default {
  name: "set-info-page",

  components: {
    SButton,
    SInput,
    SRadio,
    SUpload,
  },

  data: () => ({
    model: {},
  }),

  computed: {
    ...mapGetters(["userInfo"]),
  },

  watch: {
    model: {
      deep: true,
      handler: "updateUserInfo",
    },
  },

  created() {
    this.model = {...this.userInfo};
  },

  methods: {
    ...mapActions(["updateUserInfo", "submitRequest"]),
    handleSubmit() {
      if (!this.model.isWait) {
        this.submitRequest();
        this.$router.push({
          name: "find-location-page",
        });
      }
    },
  },
};
</script>

<template>
  <div class="set-info-page">
    <header class="set-info-page__header">
      <s-button
        type="icon"
        class="set-info-page__backward-btn"
        :to="{name: 'find-location-page'}"
      >
        <s-icon
          name="arrow-left"
          fill="var(--primary-text)"
        />
      </s-button>

      <h1 class="set-info-page__title">
        Заявка
      </h1>
    </header>

    <form
      class="set-info-page__form"
      @submit.prevent="handleSubmit"
    >
      <fieldset>
        <legend class="visually-hidden">
          Основна інформація
        </legend>

        <s-input
          v-model="model.fullName"
          label="Твоє ім'я"
          tip="(Не обов'язково)"
          name="fullName"
        />
        <s-input
          v-model="model.phoneNumber"
          v-mask="`(###) ### ## ##`"
          label="Номер телефону"
          type="tel"
          name="phoneNumber"
          required
        />
        <s-input
          v-model="model.numberOfAnimals"
          label="Кількість тварин"
          type="number"
          name="numberOfAnimals"
          required
        />
        <s-input
          v-model="model.description"
          label="Опиши травми, якщо є"
          name="description"
          required
        />
      </fieldset>

      <fieldset>
        <legend>
          <div class="set-info-page__legend">
            Зачекаєш приїзд служби?
          </div>
        </legend>

        <div class="set-info-page__radio-group">
          <s-radio
            v-model="model.isWait"
            label="Так"
            :value="true"
          />
          <s-radio
            v-model="model.isWait"
            label="Ні"
            :value="false"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <div class="set-info-page__legend">
            Фото тварини
          </div>
        </legend>

        <s-upload
          v-model="model.photos"
          tip="(Не обов'язково)"
        />
      </fieldset>

      <footer class="set-info-page__footer">
        <s-button>
          Підтвердити
        </s-button>
      </footer>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.set-info-page__header {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;
}

.set-info-page__backward-btn {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}

.set-info-page__title {
  margin: 0;

  color: var(--primary-text);
  font-size: 25px;
  line-height: 30px;
  font-weight: normal;
}

.set-info-page__form {
  width: 100%;
  padding: 0 50px;
  margin-top: 32px;

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    appearance: none;
  }

  legend {
    padding: 0;
    display: table;
    text-align: center;
    color: var(--primary-text);
    appearance: none;
  }

  .s-input {
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
}

.set-info-page__legend {
  margin-top: 24px;
}

.set-info-page__radio-group {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin: 12px -12px 0;

  > * {
    margin: 0 12px;
  }
}

.set-info-page__footer {
  margin-top: 20px;
  padding-bottom: 23px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

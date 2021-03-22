<script>
import SLogo from "../ui/s-logo.vue";
import SButton from "../ui/s-button.vue";
import SCollapse from "../ui/s-collapse.vue";
import SCollapseItem from "../ui/s-collapse-item.vue";

export default {
  name: "home-page",

  components: {
    SLogo,
    SButton,
    SCollapse,
    SCollapseItem,
  },

  data: (vm) => ({
    activeTab: "",
    fromLookup: vm.$route.params?.fromLookup ?? null,
  }),
};
</script>

<template>
  <div
    class="home-page px-4 py-8"
    :class="{
      'home-page--backward-spacing': fromLookup
    }"
  >
    <div
      v-if="fromLookup"
      class="home-page__backward"
    >
      <s-button
        class="home-page__backward-btn"
        :to="{name: 'find-location-page'}"
      >
        Повернутися до заявки
      </s-button>
    </div>
    <s-logo class="home-page__logo" />

    <div class="home-page__picture">
      <img
        src="../assets/img/dog.png"
        alt="пес"
        class="w-40 my-8"
      >
    </div>

    <section>
      <h1 class="home-page__main-title">
        Привіт!
      </h1>

      <article class="home-page__descr">
        <h2>
          Хто ми?
        </h2>

        <p>
          Ми - група волонтерів, які об’єдналися для того аби врятувати усіх безпритульних тварин в Україні.
          Ми - це (название приютов і орг) Наразі програма тестується тількі у Києві та київській області,
          але ми намагаємося швидше розширювати проект.
        </p>
      </article>
    </section>

    <s-collapse
      v-model="activeTab"
      class="home-page__collapse"
    >
      <s-collapse-item
        name="mission"
        title="Наша місія"
      >
        Врятувати усіх безпритульних собак і котів з вулиці та знайти їм дім.
      </s-collapse-item>

      <s-collapse-item
        name="todo"
        title="Як працює додаток"
      >
        Якщо ти знайшов тварину, тобі треба заповнити заявку та зачекати приїзд
        служби. Це може зайняти до 20 хвилин.
      </s-collapse-item>

      <s-collapse-item
        name="future"
        title="Що буде далі з твариною?"
      >
        Коли ти допоміг нам знайти тварину, наша служба відвозить її у притулок,
        де тварину обстежують, приводять у належний вигляд та починають шукати їй дім.
      </s-collapse-item>

      <s-collapse-item
        name="contacts"
        title="Зв'язатися з нами"
      >
        Пошта — <a href="mailto:savecatsand@gmail.com">savecatsand@gmail.com</a> <br>
        Служба підтримки — <a href="mailto:ssupport@gmail.com">support@gmail.com</a>
      </s-collapse-item>
    </s-collapse>

    <footer
      class="home-page__footer"
    >
      <s-button
        :to="{name: 'find-location-page'}"
        :disabled="fromLookup"
      >
        Знайшов тварину
      </s-button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 32px 16px 90px;
}

.home-page--backward-spacing {
  padding-top: 60px;
}

.home-page__backward {
  position: fixed;
  left: 12px;
  top: 8px;
  width: calc(100% - 24px);
}

.home-page__backward-btn {
  width: 100%;
  padding: 10px 0;
  font-weight: normal;
}

.home-page__logo,
.home-page__picture {
  display: flex;
  justify-content: center;
}

.home-page__picture {
  margin: 32px 0;
}

.home-page__main-title {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.15;

  margin: 0 0 16px 0;
}

.home-page__descr {
  > * {
    line-height: 24px;
    color: var(--primary-text);
    margin: 0;
  }

  > h2 {
    font-size: 20px;
    font-weight: normal;
  }

  > p {
  font-size: 16px;
  }

  > *:not(:first-child) {
    margin-top: 16px;
  }
}

.home-page__collapse {
  margin-top: 32px;
}

.home-page__footer {
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;

  padding-bottom: 23px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "s-modal",

  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="s-modal">
    <div class="s-modal__container">
      <h1
        v-if="title"
        class="s-modal__title"
      >
        {{title}}
      </h1>

      <slot />

      <footer class="s-modal__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: rgba(51, 51, 51, 0.4);

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.s-modal__container {
  background: var(--white);
  padding: 18px 20px;
  border-radius: 33px;
  width: 100%;
}

.s-modal__title {
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000;
  font-weight: normal;

  margin: 0 0 32px 0;
}

.s-modal__footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
}
</style>

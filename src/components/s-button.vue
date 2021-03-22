<script>
const types = ["primary", "icon"];

export default {
  name: "s-button",

  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: "primary",
      validator: (prop) => types.includes(prop),
    },
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    class="s-button"
    :class="[type]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.s-button {
  border: none;
  padding: 0;
  cursor: pointer;

  &.primary {
    background: var(--primary);
    color: var(--light-100);
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 14px 20px 16px;
    border-radius: 33px;
  }

  &.icon {
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: none;
  }

  &[disabled] {
    background: var(--neutral-200);
    color: var(--neutral-300);
    cursor: no-drop;
  }
}
</style>

<style lang="scss">
.s-button svg {
  width: 20px;
  height: 20px;
}
</style>

<script>
export default {
  name: "s-button",

  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      return this.$attrs.to ? "router-link" : "button";
    },
  },
};
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :disabled="disabled"
    class="s-button"
    :class="[
      `s-button--${type}`,
      {disabled}
    ]"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.s-button {
  border: none;
  font-size: 16px;
  line-height: 20px;
  color: var(--white);
  border-radius: 33px;
  padding: 15px;
  min-width: 50px;
  font-weight: 500;
  outline: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-family: "Rubik", sans-serif;
  cursor: pointer;

  &:disabled, &.disabled {
    background: rgba(51, 51, 51, .2);
    border-color: rgba(51, 51, 51, .01);
    color: var(--white);
    cursor: no-drop;
    pointer-events: none;
  }
}

.s-button--primary {
  background: var(--primary);
}

.s-button--secondary {
  background: var(--white);
  color: var(--primary-text);
  border: 1px solid var(--primary);
}

.s-button--icon {
  border: none;
  background: transparent;

  width: 50px;
  height: 50px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>

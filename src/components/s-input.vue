<script>
export default {
  name: "s-input",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null,
    },
    tip: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <label class="s-input">
    <span class="s-input__label">
      {{label}}

      <span
        v-if="tip"
        class="s-input__tip"
      >
        {{tip}}
      </span>
    </span>

    <input
      v-if="!$slots['custom-input']"
      v-bind="$attrs"
      class="s-input__control"
      @input="$emit('input', $event.target.value)"
    >

    <slot
      v-else
      name="custom-input"
    />
  </label>
</template>

<style lang="scss" scoped>
.s-input {
  margin-bottom: 16px;
  display: block;

  appearance: none;
}

.s-input__label {
  display: block;
  margin-left: 15px;

  letter-spacing: -0.24px;
  font-size: 13px;
  line-height: 20px;
  color: var(--secondary);
}

.s-input__tip {
  font-style: italic;
  color: var(--neutral-300);
}
</style>

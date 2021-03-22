<script>
export default {
  name: "s-radio",

  inheritAttrs: false,

  model: {
    event: "input",
    prop: "checked",
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <label class="s-radio">
    <input
      type="radio"
      class="s-radio__control"
      :checked="value === checked"
      v-bind="$attrs"
      @input="$emit('input', value)"
    >
    <span
      class="s-radio__circle"
      aria-hidden="true"
    />
    <span
      v-if="!!label"
      class="s-radio__label"
    >
      {{label}}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.s-radio {
  border: 1px solid var(--primary-light);
  padding: 12px 10px;
  min-width: 82px;
  display: inline-block;
  border-radius: 15px;
  display: inline-flex;
  align-items: center;
}

.s-radio__circle {
  border: 1px solid var(--neutral-200);
  border-radius: 50%;

  width: 22px;
  height: 22px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: border-color .05s linear;

  position: relative;

  &::after {
    content: '';
    border-radius: 50%;

    width: 16px;
    height: 16px;
    transform: scale(0);
    transition: transform .05s linear;

    background: var(--primary);
  }
}

.s-radio__control {
  appearance: none;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  position: absolute;
  &:checked + .s-radio__circle {
    border-color: var(--primary);

    &::after {
      transform: scale(1);
    }
  }
}

.s-radio__label {
  color: var(--secondary);
  font-size: 16px;
  line-height: 22px;
  padding-left: 11px;

}
</style>

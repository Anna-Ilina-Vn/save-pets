<script>
export default {
  name: "s-input",

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
    <span
      v-if="label"
      class="s-input__label"
    >
      {{label}}
      <span
        v-if="tip"
        class="s-input__tip"
      >{{tip}}</span>
    </span>

    <div class="s-input__control-wrapper">
      <slot v-if="$slots.default" />
      <input
        v-else
        v-bind="$attrs"
        class="s-input__control"
        @input="$emit('input', $event.target.value)"
      >
      <button
        v-if="this.$route.name == 'find-location-page'"
        class="
        find-location-page__clear-input-btn"
        @click="$emit('clear')"
      >
        <s-icon name="cancel" />
      </button>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.s-input {
  display: block;
  width: 100%;
}

.s-input__label {
  font-size: 13px;
  line-height: 20px;
  display: block;
  margin-left: 15px;

  color: var(--secondary-text);
}

.s-input__tip {
  font-style: italic;
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  line-height: 20px;
}

.s-input__control {
  appearance: none;
  width: 100%;
  margin-top: 5px;
  border: 1px solid rgba(51, 51, 51, 0.1);
  outline: none;

  padding: 14px 18px;
  color: var(--primary-text);
  font-size: 16px;
  line-height: 20px;
  border-radius: 30px;

  &[type="number"] {
    -moz-appearance: textfield;
  }
}
.find-location-page__clear-input-btn {
  width: 40px;
  height: 40px;

  position: absolute;
  right: 20px;
  top: 45px;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  padding: 0;
}
</style>

<script>
export default {
  name: "s-radio",

  model: {
    prop: "checked",
    event: "change",
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    checked: {
      type: [String, Number, Boolean],
      default: "",
    },
  },

  computed: {
    isChecked() {
      return this.value === this.checked;
    },
  },

  methods: {
    handleChange() {
      this.$emit("change", this.value);
    },
  },
};
</script>

<template>
  <label class="s-radio">
    <input
      type="radio"
      class="s-radio__control visually-hidden"
      :checked="isChecked"
      v-bind="$attrs"
      @change="handleChange"
    >

    <span class="s-radio__indicator" />
    <span class="s-radio__label">
      {{label}}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.s-radio {
  display: inline-flex;
  min-width: 80px;
  align-items: center;
  padding: 9px 8px;

  border: 1px solid var(--primary);
  border-radius: 10px;
}

.s-radio__indicator {
  min-width: 22px;
  min-height: 22px;
  display: inline-block;
  border: 1px solid #c2c2c2;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    display: none;
  }
}

.s-radio__control {
  &:checked + .s-radio__indicator {
    border-color: var(--primary);

    &::after {
      display: block;
    }
  }
}

.s-radio__label {
  font-size: 16px;
  line-height: 22px;
  color: var(--primary-text);
  display: inline-block;
  margin-left: 11px;
}
</style>

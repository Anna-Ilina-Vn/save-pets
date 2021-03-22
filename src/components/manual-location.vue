<script>
import SInput from "./s-input.vue";

export default {
  name: "manual-location",

  components: {
    SInput,
  },

  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="manual-location">
    <s-input
      class="manual-location__input"
      label="Місце розташування"
    >
      <template slot="custom-input">
        <google-map-autocomplete
          class="s-input__control"
          :value="value"
          placeholder=""
          @place_changed="$emit('change', $event)"
        />
      </template>
    </s-input>

    <div class="manual-location__btn">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manual-location {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.manual-location__input {
  width: 100%;
  margin-bottom: 0;
}

.manual-location__btn {
  margin-top: auto;
}
</style>

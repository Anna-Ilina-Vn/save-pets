<script>
import {components, names} from "../assets/vector";

export default {
  name: "s-icon",

  components,

  inheritAttrs: false,

  props: {
    name: {
      type: String,
      required: true,
      validator: (prop) => names.includes(prop),
    },
  },
};
</script>

<template>
  <component
    :is="`${name}-icon`"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

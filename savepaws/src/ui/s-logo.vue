<script>
export default {
  name: "s-logo",
};
</script>

<template functional>
  <picture
    class="logo"
    :class="data.staticClass"
  >
    <img
      src="../assets/vector/logo.pure.svg"
      alt="SAVEPAWS логотип"
    >
  </picture>
</template>

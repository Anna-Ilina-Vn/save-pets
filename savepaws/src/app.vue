<script>
export default {
  name: "app",
};
</script>

<template>
  <div id="app">
    <router-view />
    <portal to="modal" />
  </div>
</template>

<style lang="scss" src="./assets/css/main.scss"></style>

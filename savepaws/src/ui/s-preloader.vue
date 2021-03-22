<template>
  <div class="loader" />
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  top: 40%;
  left: 50%;
  margin: -50px 0 0 -25px;
  animation: spin 2s linear infinite;
  border-top: 10px solid var(--primary-light);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-header__title">
            <slot name="header" />
          </h2>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-modal",
};
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 250px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;
    text-align: center;
  }
  .modal-header__title {
    font-weight: normal;
  }
  .modal-body {
    margin: 30px 0;
  }
  .modal-container, .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>

<script>
export default {
  name: "s-collapse-item",

  inject: ["changeActiveTab", "getActiveTab"],

  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    isActive() {
      return this.getActiveTab() === this.name;
    },
  },

  methods: {
    handleChange() {
      const name = this.isActive ? "" : this.name;
      this.changeActiveTab(name);
    },
  },
};
</script>

<template>
  <div class="s-collapse-item">
    <header class="s-collapse-item__header">
      <button
        class="s-collapse-item__title-btn"
        :class="{'s-collapse-item__title-btn--active': isActive}"
        @click="handleChange"
      >
        {{title}}
        <span class="s-collapse-item__title-btn-arrow">
          <s-icon name="arrow" fill="var(--primary-text)" width="18" height="22" />
        </span>
      </button>
    </header>

    <div v-show="isActive" class="s-collapse-item__body" role="tabpanel" :aria-hidden="!isActive">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-collapse-item {
  width: 100%;
}

.s-collapse-item__body {
  padding: 8px 16px;
  border: 1px solid var(--primary-light);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 5px;

  color: var(--primary-text);
  font-size: 16px;
  line-height: 24px;

  a {
    text-decoration: none;
    color: var(--primary);
  }
}

.s-collapse-item__title-btn {
  outline: none;
  width: 100%;
  display: block;
  padding: 8px 35px 8px 16px;
  border-radius: 10px;
  cursor: pointer;

  background: var(--primary-light);
  color: var(--primary-text);

  border: none;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
  position: relative;
  transition: border-radius 0.2s linear;
}

.s-collapse-item__title-btn-arrow {
  width: 18px;
  height: 22px;
  background-size: contain;
  display: inline-block;

  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  will-change: transform;
  transition: transform 0.1s linear;
}

.s-collapse-item__title-btn--active {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  .s-collapse-item__title-btn-arrow {
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>

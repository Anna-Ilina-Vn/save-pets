<script>
/* eslint-disable no-restricted-syntax, no-await-in-loop */
export default {
  name: "s-upload",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null,
    },
    tip: {
      type: String,
      default: null,
    },
    value: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (e) => reject(e);
      });
    },
    async handleUpload({target}) {
      const {files} = target;

      if (!files.length) {
        return;
      }

      const photos = [];

      for (const file of files) {
        const result = await this.toBase64(file);
        photos.push(result);
      }

      this.$emit("input", [...this.value, ...photos]);

      this.resetFileInputs();
    },
    resetFileInputs() {
      if (this.$refs.primary) {
        this.$refs.primary.value = "";
      }

      if (this.$refs.secondary) {
        this.$refs.secondary.value = "";
      }
    },
    handleRemove(idx) {
      const photos = this.value.filter((_, i) => idx !== i);
      this.$emit("input", photos);
    },
  },
};
</script>

<template>
  <div class="s-upload">
    <label v-if="!value.length">
      <span
        v-if="label"
        class="s-upload__label"
      >
        {{label}}
      </span>

      <span
        v-if="tip"
        class="s-upload__tip"
      >
        {{tip}}
      </span>

      <div class="s-upload__icon">
        <img
          src="../assets/img/camera.jpg"
          alt="Завантажити файли"
        >
      </div>

      <input
        ref="primary"
        type="file"
        v-bind="$attrs"
        multiple
        class="s-upload__control"
        @change="handleUpload"
      >
    </label>

    <ul
      v-else
      class="s-upload__preview-list"
    >
      <li
        v-for="(photo, key) in value"
        :key="key"
        class="s-upload__preview-item"
        @click="handleRemove(key)"
      >
        <div class="s-upload__preview-wrap">
          <img
            :src="photo"
            :alt="`Фото тварини № ${key}`"
          >
        </div>
      </li>

      <li class="s-upload__preview-upload">
        <label>
          <input
            ref="secondary"
            type="file"
            v-bind="$attrs"
            multiple
            class="s-upload__control"
            @change="handleUpload"
          >
        </label>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.s-upload {
  display: flex;
  justify-content: center;

  label {
    display: inline-block;
  }
}

.s-upload__control {
  appearance: none;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

.s-upload__label {
  color: var(--primary-text);
  font-size: 16px;
  text-align: center;
  display: block;
}

.s-upload__icon {
  width: 51px;
  height: 41px;
  margin: 4px auto;
}

.s-upload {
  display: block;
  margin-top: 5px;

  text-align: center;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-style: italic;
  color: rgba(51, 51, 51, 0.5);
}

.s-upload__preview-list {
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
}

.s-upload__preview-upload {
  flex: 1 0 70px;
  display: flex;

  justify-content: center;
  align-items: center;

  label {
    display: block;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background: #F1F1F2 url('../assets/vector/plus.pure.svg') center center no-repeat;
  }
}

.s-upload__preview-item {
  flex: 1 0;
  margin: 15px 5px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.s-upload__preview-wrap {
  position: relative;
  width: 70px;

  &::after {
    content: '';

    position: absolute;
    right: -5px;
    top: -5px;

    width: 17px;
    height: 17px;
    background: #F1F1F2 url('../assets/vector/close.pure.svg') center center no-repeat;
    border-radius: 50%;
  }

  img {
    width: 70px;
    height: 60px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
}
</style>

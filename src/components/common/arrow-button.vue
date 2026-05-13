<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    rotation: {
      type: Number,
      required: false,
      default: 0,
    },
  })

  const rotationValue = computed(() => `${props.rotation}deg`)
</script>

<template>
  <div class="arrow-button">
    <div class="icon-box">
      <img src="/images/icons/arrow.svg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .arrow-button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: $shade-white;
    transition: background-color 200ms;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
      background: $shade-light;
      cursor: pointer;
    }
    &:active {
      background: $shade-medium;
    }

    img {
      width: 40%;
      height: 40%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
    }
  }
  .icon-box {
    width: 100%;
    height: 100%;
    rotate: v-bind('rotationValue');
  }
  .dark {
    .arrow-button {
      background: $shade-black;

      &:hover {
        background: $shade-dark;
      }

      img {
        filter: invert(1) brightness(2);
      }
    }
  }
</style>

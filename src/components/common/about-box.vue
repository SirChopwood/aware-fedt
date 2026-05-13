<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="container">
    <div class="background" />
    <div class="text-box">
      <h3>{{ props.title }}</h3>
      <slot />
    </div>
    <img :src="props.src" alt="A banner image." />
  </div>
</template>

<style scoped lang="scss">
  .container {
    color: $shade-lightest;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  @media (width >= 80rem) {
    .container {
      flex-direction: row;
      gap: 0;
    }
  }

  .background {
    background-color: $primary;
    position: absolute;
    offset-anchor: right;
    z-index: 0;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  @media (width >= 80rem) {
    .background {
      height: 125%;
      width: 100vw;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);
      padding: 0;
    }
  }

  .text-box {
    z-index: 10;
    width: 90%;
    margin-top: 1rem;
  }
  img {
    z-index: 10;
    width: 90%;
    margin-bottom: 1rem;
  }
  @media (width >= 80rem) {
    .text-box {
      flex-basis: 40%;
      margin-top: 0;
    }
    img {
      flex-basis: 55%;
      margin-bottom: 0;
    }
  }
</style>

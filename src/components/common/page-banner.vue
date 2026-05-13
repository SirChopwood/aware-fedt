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
    <img class="background" :src="props.src" alt="A banner image." />
    <div class="text-box">
      <h1 class="banner-title">
        {{ props.title }}
      </h1>
      <p class="banner-body">
        <slot name="default" />
      </p>
    </div>
    <slot name="background" />
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 42rem;
    position: relative;
  }

  .background {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -50;
    overflow: hidden;
  }

  .text-box {
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 50rem;
    height: fit-content;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);
    color: $shade-lightest;
    text-wrap: auto;
  }

  .banner-title {
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  }

  .banner-body {
    padding: 0 5%;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  }

  @media (width >= 40rem) {
    .text-box {
      width: 75%;
    }
  }
  @media (width >= 80rem) {
    .text-box {
      width: 50%;
    }
    .banner-body {
      padding: 0 15%;
    }
  }
</style>

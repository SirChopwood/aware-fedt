<script setup lang="ts">
  import MainHeader from '@/components/main-header.vue'
  import MainFooter from '@/components/main-footer.vue'
  import { useHead } from '@unhead/vue'

  useHead({
    title: 'Index',
    titleTemplate: 'Aware Store - %s',
  })
</script>

<template>
  <MainHeader />
  <div class="main">
    <RouterView />
  </div>
  <MainFooter />
</template>

<style lang="scss">
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    background-color: $shade-white;
    margin: 0;
    color: $shade-black;
    transition-property: color, background-color, border-color;
    transition-duration: 200ms;
    overflow-x: hidden;
    scrollbar-color: $shade-light $shade-medium;

    *::selection {
      background-color: $primary-dark;
      color: $shade-white;
    }
  }
  .dark {
    html,
    body {
      background-color: $shade-black;
      color: $shade-white;
      scrollbar-color: $shade-dark $shade-darkest;
      *::selection {
        background-color: $primary-light;
        color: $shade-black;
      }
    }
  }

  @media (width >= 40rem) {
    .html,
    body {
      line-height: 2;
    }
  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
  }
</style>

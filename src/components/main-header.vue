<script setup lang="ts">
  import LinkButton from '@/components/common/link-button.vue'
</script>

<template>
  <div class="background">
    <div class="sidebar" />
    <div class="item-container">
      <img class="logo" src="/images/icons/logo.svg" alt="Aware Digital Logo" />
      <div class="contacts" style="flex-grow: 1" />
      <a href="tel:01782499530" class="phone-number contacts">01782 499 530</a>
      <link-button class="contacts" link="mailto:careers@awaredigital.co.uk" text="Email Us" />
    </div>
    <div class="sidebar" />
  </div>
</template>

<style scoped lang="scss">
  .background {
    color: $shade-lightest;
    position: fixed;
    top: 0;
    background-color: rgba($shade-lightest, 0.3);
    width: 100%;
    height: fit-content;
    flex-direction: row;
    display: flex;
    // Not strictly shown in reference image, but felt appropriate else the header isn't visible over white backgrounds.
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
    z-index: 20;
  }

  .item-container {
    flex-basis: 60%;
    flex-direction: row;
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .sidebar {
    flex-basis: 20%;
  }

  .logo {
    filter: invert(1) brightness(2);
  }

  .phone-number {
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    height: min-content;
    font-size: 1rem;
    font-family: 'Futura PT Demi', sans-serif;
    color: $shade-lightest;
    text-decoration: none;
  }

  .contacts {
    display: none;
  }
  @media (width >= 40rem) {
    .contacts {
      display: block;
    }
  }
</style>

<script setup lang="ts">
  const props = defineProps({
    link: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    iconsrc: {
      type: String,
      required: false,
    },
    iconalt: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  })
</script>

<template>
  <a v-if="props.link" :href="props.link" class="link-button">
    <img v-if="props.iconsrc" :src="props.iconsrc" :alt="props.iconalt" class="content-icon" />
    <span v-if="props.text" class="content-text">{{ props.text }}</span>
  </a>
  <div v-else class="link-button">
    <img v-if="props.iconsrc" :src="props.iconsrc" :alt="props.iconalt" class="content-icon" />
    <span v-if="props.text" class="content-text">{{ props.text }}</span>
  </div>
</template>

<style scoped lang="scss">
  .link-button {
    appearance: none;
    text-decoration: none;
    background-color: $secondary-darkest;
    border-radius: 2.5rem;
    border: transparent 0.15rem solid;
    color: $shade-white;
    padding: 0;
    font-size: 0;
    transition: border-color 200ms;
    &:hover {
      border-color: $secondary;
      cursor: pointer;
    }
    &:active {
      border-color: $secondary-dark;
    }
  }
  .dark {
    .link-button {
      color: $shade-black;
      background-color: $secondary-light;
      &:hover {
        border-color: $secondary-dark;
      }
      &:active {
        border-color: $secondary-darkest;
      }
    }
  }

  .content-icon {
    width: 1rem;
    height: 1rem;
    padding: 0.5rem;
    aspect-ratio: 1;
    overflow: visible;
    transition: transform 200ms;
    filter: invert(1) brightness(2);

    &:hover {
      transform: scale(1.25);
    }
  }
  .dark {
    .content-icon {
      filter: none;
    }
  }

  .content-text {
    padding: 0.15rem 2rem;
    font-family: 'Futura PT Book', sans-serif;
    font-size: 1rem;
  }
  .dark {
    .content-text {
      filter: none;
    }
  }
</style>

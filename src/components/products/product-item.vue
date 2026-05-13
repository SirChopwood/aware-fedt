<script setup lang="ts">
  import { computed, onMounted, type PropType, ref, type Ref, watch } from 'vue'
  import type { StockProduct } from '@/stores/stock.ts'

  const props = defineProps({
    product: {
      type: Object as PropType<StockProduct>,
      required: true,
    },
  })

  onMounted(() => {
    currentVariant.value = props.product.products_colour
  })

  const currentVariant: Ref<string> = ref('')

  watch(currentVariant, (newValue, oldValue) => {
    if (oldValue) {
      console.log(`Selected Colour Variant: ${newValue}`)
    }
  })

  const getDiscountType = computed(() => {
    if (!props.product.product_price_sale) return 'Original'
    // Data does not make it clear if 0 should be treated as an erroneous value or as "Free".
    else if (props.product.product_price_sale === '0') return 'Free'
    else return 'Sale'
  })
</script>

<template>
  <div class="container">
    <a href="https://en.wikipedia.org/wiki/Clothing"
      ><img
        class="thumbnail"
        :src="`/images/products/${props.product.product_image}`"
        :alt="`A picture of ${props.product.product_title}.`"
    /></a>
    <div class="variants">
      <input
        class="variant"
        type="radio"
        v-for="variant of props.product.products_swatch"
        :value="variant"
        v-model="currentVariant"
        v-bind:key="variant"
        :class="`swatch-${variant}`"
      />
    </div>
    <div class="name">
      {{ props.product.product_title }}
    </div>
    <div class="price">
      <div class="current" v-if="getDiscountType === 'Free'">FREE</div>
      <div class="current" v-if="getDiscountType === 'Sale'">
        £{{ props.product.product_price_sale }}
      </div>
      <div class="previous" v-if="getDiscountType === 'Sale'">
        £{{ props.product.product_price_original }}
      </div>
      <div class="current" v-if="getDiscountType === 'Original'">
        £{{ props.product.product_price_original }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: min-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    flex-grow: 1;
    color: $shade-black;
    text-decoration: none;
    border: transparent 0.2rem solid;
    border-radius: 0.2rem;
    transition: box-shadow 0.2s;
    box-sizing: border-box;

    &:hover {
      border-color: $shade-medium;
      cursor: pointer;
      box-shadow: $shade-light 0 1rem 10px;
    }
  }
  .dark {
    .container {
      color: $shade-white;
      &:hover {
        border-color: $shade-medium;
        box-shadow: $shade-dark 0 1rem 10px;
      }
    }
  }

  .variants {
    //height: 1.75rem;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    margin: 0.1rem;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;

    .variant {
      margin: 0;
      padding: 0;
      appearance: none;
      height: 1.5rem;
      width: 1.5rem;
      outline: transparent solid 0.1rem;
      outline-offset: -0.2rem;
      border-radius: 50%;
      position: relative;
      transition: outline-color 200ms;

      &:hover {
        outline-color: $shade-lightest;
      }

      &:checked {
        outline-color: $shade-lightest;
      }
    }
  }

  .thumbnail {
    width: 128px;
    aspect-ratio: 1;

    &:hover {
      border-color: $secondary;
      cursor: pointer;
    }
  }

  .name {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: -1rem;
    align-items: center;
    font-family: 'Futura PT', sans-serif;
    font-size: 1.1rem;

    .current {
      font-weight: bold;
    }

    .previous {
      text-decoration-line: line-through;
      color: $shade-medium;
      font-size: 0.75rem;
    }
  }
  @media (width >= 30rem) {
    .thumbnail {
      width: 192px;
    }
  }
  @media (width >= 40rem) {
    .thumbnail {
      width: 256px;
    }
    .price {
      flex-direction: row;
      gap: 0.5rem;
      .previous {
        font-size: 1rem;
      }
    }
    .name {
      margin-top: 0.5rem;
    }
  }
  @media (width >= 64rem) {
    .thumbnail {
    }
  }
  @media (width >= 80rem) {
    .thumbnail {
    }
  }
</style>

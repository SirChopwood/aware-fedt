<script setup lang="ts">
  import ProductItem from '@/components/products/product-item.vue'
  import { useStockStore } from '@/stores/stock.ts'
  import { storeToRefs } from 'pinia'

  const stock = useStockStore()
  const { products } = storeToRefs(stock)
</script>

<template>
  <div class="main-grid">
    <product-item v-for="prod of products" :product="prod" v-bind:key="prod.product_title" />
  </div>
</template>

<style scoped lang="scss">
  .main-grid {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 2rem;
  }
  @media (width >= 64rem) {
    .main-grid {
      grid-template-columns: auto auto auto;
    }
  }
  @media (width >= 80rem) {
    .main-grid {
      grid-template-columns: auto auto auto auto;
      justify-content: space-between;
    }
  }
</style>

<script setup lang="ts">
  import { computed, ref, useTemplateRef } from 'vue'
  import ProductItem from '@/components/products/product-item.vue'
  import ArrowButton from '@/components/common/arrow-button.vue'
  import { useStockStore } from '@/stores/stock.ts'
  import { storeToRefs } from 'pinia'

  const stock = useStockStore()
  const { products } = storeToRefs(stock)
  const gallery = useTemplateRef('gallery')
  const currentPage = ref(0)
  const pageSize = ref(4)
  const pageCount = computed(() => {
    return Math.floor(products.value.length / 4)
  })

  function getProductPage(page: number) {
    return products.value.slice(page * pageSize.value, page * pageSize.value + pageSize.value)
  }

  function getPagePosition(page: number) {
    return page * gallery.value!.children[0]!.scrollWidth
  }

  function nextPage() {
    if (currentPage.value < pageCount.value - 1) {
      currentPage.value += 1
      gallery.value!.scrollLeft = getPagePosition(currentPage.value)
    }
  }
  function previousPage() {
    if (currentPage.value > 0) {
      currentPage.value -= 1
      gallery.value!.scrollLeft = getPagePosition(currentPage.value)
    }
  }
</script>

<template>
  <div class="container">
    <arrow-button class="scroll-left" :rotation="90" :onclick="previousPage" />
    <div class="gallery" ref="gallery">
      <div class="page" v-for="index of pageCount" v-bind:key="index">
        <product-item
          v-for="prod of getProductPage(index - 1)"
          :product="prod"
          v-bind:key="prod.product_title"
        />
      </div>
    </div>
    <arrow-button class="scroll-right" :rotation="-90" :onclick="nextPage" />
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: min-content;
    position: relative;
    padding: 0;
  }

  .scroll-left {
    position: absolute;
    border: $shade-lightest 1rem solid;
    z-index: 10;
    box-sizing: content-box;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
  .scroll-right {
    position: absolute;
    border: $shade-lightest 1rem solid;
    z-index: 10;
    box-sizing: content-box;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  .dark {
    .scroll-left {
      border: $shade-darkest 1rem solid;
    }
    .scroll-right {
      border: $shade-darkest 1rem solid;
    }
  }
  @media (width >= 40rem) {
    .scroll-left .scroll-right {
      top: 128px;
    }
  }

  .gallery {
    width: 100%;
    display: flex;
    overflow-x: hidden;
    overflow-y: overlay;
    height: min-content;
    scroll-behavior: smooth;
  }

  .page {
    flex-basis: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: center;
    gap: 2rem;
    flex-shrink: 0;
    height: min-content;
    padding-bottom: 3rem;
  }
  @media (width >= 40rem) {
    .page {
      gap: 2rem;
    }
  }
  @media (width >= 80rem) {
    .page {
      grid-template-columns: auto auto auto auto;
      grid-template-rows: none;
      justify-content: space-between;
    }
  }
</style>

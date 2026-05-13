<script setup lang="ts">
  import PageBanner from '@/components/common/page-banner.vue'
  import ProductGrid from '@/components/products/product-grid.vue'
  import ProductGallery from '@/components/products/product-gallery.vue'
  import AboutBox from '@/components/common/about-box.vue'
  import { onMounted, useTemplateRef } from 'vue'
  import { useRoute } from 'vue-router'
  import { useHead } from '@unhead/vue'
  import ArrowButton from '@/components/common/arrow-button.vue'
  import { useStockStore } from '@/stores/stock.ts'

  const stock = useStockStore()
  onMounted(() => {
    stock.loadProducts()
  })
  const contentStart = useTemplateRef('content-start')

  function scrollToContent() {
    contentStart.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useHead({
    title: 'Home',
    meta: [
      // Base Meta Tags
      { name: 'description', content: 'The one and only place for all your Aware merch needs!' },
      { name: 'author', content: 'Aware Digital' },
      { name: 'keywords', content: 'Aware, Merch, Store, Clothing' },
      // Facebook Tags
      { property: 'og:url', content: useRoute().path },
      { property: 'og:image', content: '/some/path/here.png' },
      {
        property: 'og:description',
        content: 'The one and only place for all your Aware merch needs!',
      },
      { property: 'og:title', content: 'Aware Digital' },
      // Twitter Tags
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: useRoute().path },
      { name: 'twitter:title', content: 'Aware Digital' },
      {
        name: 'twitter:description',
        content: 'The one and only place for all your Aware merch needs!',
      },
      { name: 'twitter:image', content: '/some/path/here.png' },
    ],
    link: [{ rel: 'icon', href: '/images/icons/logo.svg', sizes: 'any', type: 'image/svg+xml' }],
  })
</script>

<template>
  <PageBanner src="/images/content/banner.png" title="Opportunities don't happen, you create them.">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
    <template v-slot:background>
      <arrow-button class="scroll-button" :onclick="scrollToContent" />
    </template>
  </PageBanner>
  <section ref="content-start">
    <h2>ARRIVALS</h2>
    <product-grid />
    <div class="klarna-banner">
      <div class="klarna-content">
        <h3>Flexible Finance</h3>
        Shop now. Pay in 4 interest-free installments Select Klarna at the checkout.
        <img src="/images/icons/klarna.svg" />
      </div>
    </div>
  </section>
  <div class="foreground">
    <section>
      <h2>BESTSELLERS</h2>
      <ProductGallery />
    </section>
  </div>
  <section>
    <AboutBox src="/images/content/about.png" title="ABOUT">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </AboutBox>
  </section>
</template>

<style scoped lang="scss">
  section {
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    position: relative;
  }
  @media (width >= 40rem) {
    section {
      padding: 4rem;
    }
  }
  @media (width >= 80rem) {
    section {
      padding: 4rem 0;
      max-width: $content-max-width;
    }
  }

  .foreground {
    background-color: $shade-lightest;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dark {
    .foreground {
      background-color: $shade-darkest;
    }
  }

  .klarna-banner {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    background: #feb3c7;
  }
  .klarna-content {
    color: $shade-darkest;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    h3 {
      text-wrap: nowrap;
    }
  }
  @media (width >= 40rem) {
    .klarna-content {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .scroll-button {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
    transition-property: opacity, background-color;
    transition-duration: 200ms;
    opacity: 60%;

    &:hover {
      opacity: 80%;
    }
  }
</style>

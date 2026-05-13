<script setup lang="ts">
  import LinkButton from '@/components/common/link-button.vue'
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="container">
    <div class="links-grid">
      <div class="column optional">
        <h4>Heading</h4>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
      </div>
      <div class="column optional">
        <h4>Heading</h4>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
      </div>
      <div class="column essential">
        <h4>Heading</h4>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem ipsum</a>
        <a href="tel:01782499530">01782499530</a>
        <a href="mailto:careers@awaredigital.co.uk">careers@awaredigital.co.uk</a>
      </div>
    </div>
    <div class="page-end">
      <div class="social-media">
        <link-button
          link="https://www.facebook.com/"
          iconsrc="/images/icons/facebook.svg"
          iconalt="facebook"
        />
        <link-button
          link="https://twitter.com/"
          iconsrc="/images/icons/twitter.svg"
          iconalt="twitter"
        />
        <link-button
          link="https://www.instagram.com/"
          iconsrc="/images/icons/instagram.svg"
          iconalt="instagram"
        />
        <link-button
          link="https://www.linkedin.com/"
          iconsrc="/images/icons/linkedin.svg"
          iconalt="linkedin"
        />
        <link-button
          :iconsrc="
            isDark
              ? '/images/extra-icons/MaterialSymbolsDarkMode.svg'
              : '/images/extra-icons/MaterialSymbolsLightMode.svg'
          "
          iconalt="Dark Mode Toggle"
          @click="toggleDark()"
        />
      </div>
      <div class="disclaimer">Created by Louis, based on designs from Aware Digital.</div>
      <div class="payment-providers">
        <img src="/images/icons/maestro.svg" alt="maestro" />
        <img src="/images/icons/paypal.svg" alt="paypal" />
        <img src="/images/icons/mastercard.svg" alt="mastercard" />
        <img src="/images/icons/visa.svg" alt="visa" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    align-items: center;
    border-top: $shade-lightest solid 2px;
    padding-top: 4rem;
    margin-top: 4rem;
  }
  .dark {
    .container {
      border-color: $shade-darkest;
    }
  }

  .links-grid {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: $content-width;
    max-width: $content-max-width;
    justify-content: center;
    text-align: center;

    .optional {
      display: none;
    }

    a {
      color: $shade-black;
      text-decoration: none;
      transition: transform 200ms;

      &:hover {
        transform: translateX(0.25rem);
      }
    }
  }
  .dark {
    .links-grid {
      a {
        color: $shade-white;
      }
    }
  }
  @media (width >= 40rem) {
    .links-grid {
      text-align: start;
      justify-content: space-between;
      .optional {
        display: flex;
      }
    }
  }

  .page-end {
    width: 100%;
    padding: 2rem 8rem 1rem 8rem;
    border-top: $shade-lightest solid 2px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .dark {
    .page-end {
      border-color: $shade-darkest;
    }
  }
  @media (width >= 40rem) {
    .page-end {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: start;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .social-media {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: start;
  }

  .payment-providers {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: start;
    img {
      height: 2rem;
    }
  }

  .disclaimer {
    font-family: 'Open Sans Light', sans-serif;
    color: $shade-medium;
    font-size: 0.75rem;
    align-self: center;
  }
  @media (width >= 40rem) {
    .disclaimer {
      padding: 4rem 0 1rem 0;
    }
  }
</style>

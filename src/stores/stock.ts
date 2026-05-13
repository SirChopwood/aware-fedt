import { defineStore } from 'pinia'

export interface StockProduct {
  product_title: string
  product_image: string
  product_price_original: string
  product_price_sale?: string
  products_colour: string
  products_swatch: Array<string>
}

export const useStockStore = defineStore('Stock', {
  state: () => ({
    products: [] as Array<StockProduct>,
  }),
  actions: {
    loadProducts() {
      fetch('/product-details.json').then((res) => {
        if (!res.ok) return null

        res.json().then((products) => {
          this.products = products.products
        })
      })
    },
  },
})

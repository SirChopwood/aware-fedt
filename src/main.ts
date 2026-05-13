import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import router from './router.ts'
import { useStockStore } from '@/stores/stock.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createHead())

app.mount('#app')

router.beforeEach((_to) => {
  const _stock = useStockStore()
})

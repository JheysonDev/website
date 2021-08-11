import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead, Head } from '@vueuse/head'
import LayoutDefault from '@/layouts/Default.vue'
import routes from '@/routes'
import App from '@/App.vue'

export default viteSSR(App, { routes }, ({ app }) => {
  // Head Plugin
  const head = createHead()
  app.use(head)
  app.component(Head.name, Head)

  // Vite SSR
  app.component(ClientOnly.name, ClientOnly)

  // Layouts
  app.component(LayoutDefault.name, LayoutDefault)
})

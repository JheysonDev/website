import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead, Head } from '@vueuse/head'
import routes from '@/routes'
import App from '@/App.vue'

export default viteSSR(App, { routes }, ({ app }) => {
  const head = createHead()
  app.use(head)

  app.component(ClientOnly.name, ClientOnly)
  app.component(Head.name, Head)
})

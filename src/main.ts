import viteSSR, { ClientOnly } from 'vite-ssr'
import routes from '@/routes'
import App from '@/App.vue'
import { createHead, Head } from '@vueuse/head'
import LayoutDefault from '@/layouts/Default.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default viteSSR(App, { routes }, ({ app }) => {
  // Head Plugin
  const head = createHead()
  app.use(head)
  app.component(Head.name, Head)

  // Vite SSR
  app.component(ClientOnly.name, ClientOnly)

  // Layouts
  app.component('DefaultLayout', LayoutDefault)

  // FontAwesome
  library.add(faGithub, faTwitter)
  app.component('VIcon', FontAwesomeIcon)
})

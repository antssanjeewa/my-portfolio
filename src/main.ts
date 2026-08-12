import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import revealDirective from './directives/reveal'

import '@/assets/css/main.css'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.directive('reveal', revealDirective)
})

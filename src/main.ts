import { createApp } from 'vue'
import App from './App.vue'
import { plugin as VueTippy } from 'vue-tippy'
import 'uno.css'

import 'tippy.js/dist/tippy.css' // optional for styling
import 'tippy.js/animations/shift-toward-subtle.css'

import './index.css'

const app = createApp(App)

app.use(VueTippy, {
  arrow: true,
  directive: 'tippy', // => v-tippy
  component: 'tippy', // => <tippy/>
  componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
  defaultProps: {
    theme: 'dark',
    placement: 'auto',
    allowHTML: true,
    delay: 100,
    animation: 'shift-toward-subtle',
    appendTo: () => document.querySelector('body')
  }, // => Global default options * see all props
})

app.mount('#app')

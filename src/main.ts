import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi' // Ensure 'mdi' is set as the default icon set
  }
})

app.use(router)
app.use(vuetify)

app.mount('#app')

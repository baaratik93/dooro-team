import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#ffffff',
        secondary: '#f06700',
        accent: '#088b86',
        error: '#b71c1c',
      },
    },
  },
})
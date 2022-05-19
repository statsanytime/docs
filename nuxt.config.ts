import { defineNuxtConfig } from 'nuxt'
import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  generate: {
    routes: []
  },
  modules: ['@nuxthq/admin'],
  extends: [
    (process.env.DOCUS_THEME_PATH || './node_modules/@docus/docs-theme')
  ],
  github: {
    repo: 'statsanytime/docs',
    releases: false
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: colors.orange
          }
        }
      }
    }
  },
  theme: {}
})

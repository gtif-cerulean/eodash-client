// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '../../.eodash/dist/eo-dash'
import '../../.eodash/dist/style.css'
import "@eox/storytelling"
import "@eox/jsonform"

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    //
  }
}

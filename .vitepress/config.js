import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GTIF Cerulean",
  description: "Project information and service endpoint",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      { text: 'Stories', link: '/stories/' },
      { text: 'Editor', link: '/editor/' }
    ],
  }
})

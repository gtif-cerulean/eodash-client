import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "POLAR DASHBOARD",
  description: "Project information and service endpoint",
  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    logo: '/assets/Polar-TEP-Logo-White-300x135.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      // { text: 'Stories', link: '/stories/' },
      { text: 'Editor', link: '/editor/' }
    ],
  }
})

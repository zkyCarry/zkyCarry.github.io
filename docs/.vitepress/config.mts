import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blogs",
  description: "My Blos Description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基础',
        collapsed: false,
        items: [
          { text: 'Html', link: '/基础/html.md' },
          { text: '浏览器', link: '/基础/浏览器.md' },
          { text: 'CSS', link: '/基础/css.md' },
          { text: 'Vue2', link: '/基础/vue2.md' },
          { text: 'Vue3', link: '/基础/vue3.md' },
          { text: 'vue-router', link: '/基础/vueRouter.md' },
          { text: 'pinia', link: '/基础/pinia.md' },
          { text: 'vuex', link: '/基础/vuex.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blogs",
  description: "My Blos Description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/基础/html.md' }
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
      },
      {
        text: '正则表达式',
        collapsed: true,
        link: '/regularExpression/index.md',
        items: [
          { text: '第1章 正则表达式入门', link: '/regularExpression/chapter-01.md' },
          { text: '第2章 匹配单个字符', link: '/regularExpression/chapter-02.md' },
          { text: '第3章 匹配一组字符', link: '/regularExpression/chapter-03.md' },
          { text: '第4章 使用元字符', link: '/regularExpression/chapter-04.md' },
          { text: '第5章 重复匹配', link: '/regularExpression/chapter-05.md' },
          { text: '第6章 位置匹配', link: '/regularExpression/chapter-06.md' },
          { text: '第7章 使用子表达式', link: '/regularExpression/chapter-07.md' },
          { text: '第8章 回溯引用：前后一致匹配', link: '/regularExpression/chapter-08.md' },
          { text: '第9章 前后查找', link: '/regularExpression/chapter-09.md' },
          { text: '第10章 嵌入条件', link: '/regularExpression/chapter-10.md' },
          { text: '小结', link: '/regularExpression/summary.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

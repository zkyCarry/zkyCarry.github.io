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
          { text: 'vue3使用问题记录', link: '/基础/vue3使用问题记录.md' },
          { text: 'react', link: '/基础/react.md' },
          { text: 'vue-router', link: '/基础/vueRouter.md' },
          { text: 'pinia', link: '/基础/pinia.md' },
          { text: 'vuex', link: '/基础/vuex.md' },
          { text: 'ts', link: '/基础/ts.md' },
          { text: 'webpack', link: '/基础/webpack.md' },
          { text: 'vue cli', link: '/基础/vueCli.md' },
          { text: 'vite', link: '/基础/vite.md' },
          { text: 'rollup', link: '/基础/rollup.md' },
          { text: 'scss', link: '/基础/scss.md' },
          { text: '动画', link: '/基础/动画.md' },
          { text: '视频', link: '/基础/视频.md' },
          { text: 'npm', link: '/基础/npm.md' },
          {text: 'js-promise', link: '/基础/js-promise.md'}
        ]
      },
      {
        text: '记录',
        collapsed: false,
        items: [
          {text: '如何向Ai大模型正确提问', link: '/记录/如何向Ai大模型正确提问.md' },
          { text: '域名劫持', link: '/记录/域名劫持.md' },
          { text: '服务端名词', link: '/记录/服务端名词.md' },
          { text: 'oclif 命令行库', link: '/记录/oclif.md' },
          { text: 'uni-app学习记录', link: '/记录/uni-app.md' },
          { text: '使用mysql', link: '/记录/使用mysql.md' },
          { text: 'git-submodule', link: '/记录/git-submodule.md' },
          { text: '快速从unpkg拿到某个库的js文件', link: '/记录/快速从unpkg拿到某个库的js文件.md' },
          { text: 'vscode插件开发', link: '/记录/vscode插件开发.md'}
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
      { icon: 'github', link: 'https://github.com/zkyCarry/zkyCarry.github.io/tree/main-blog' }
    ]
  }
})

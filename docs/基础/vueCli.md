---
outline: deep
---

# vue cli

## vue cli核心概念
Vue2 推荐使用。 Vue3 使用vite。

Vue CLI 实际上是对 Webpack 的一个封装，它使用 Webpack 作为底层的打包工具，但提供了更高层次的抽象和简化。通过 Vue CLI，开发者不需要直接配置 Webpack，可以通过 Vue CLI 提供的命令和配置文件来完成大部分的工作。

默认配置：Vue CLI 提供了一些默认的 Webpack 配置，适合大多数项目需求。  
可扩展性：如果需要自定义 Webpack 配置，Vue CLI 允许通过 vue.config.js 文件进行配置，或者使用 Vue CLI 插件来扩展功能。  
插件化：Vue CLI 的插件系统可以在项目初始化时或之后添加各种功能，而这些插件很多都是基于 Webpack 的。

### 使用 ~ 的场景
#### 1. 在 CSS/SCSS 文件中引入资源：
```
.background {
  background-image: url('~@/assets/images/background.png');
}

```
#### 2. 在 Vue 模板中引入资源：
```
<img src="~@/assets/indexPage/bottom_ornament.png" alt=""/>

```
使用 ~ 来引入资源路径可以确保 Webpack 按照模块解析的方式来处理路径，避免相对路径解析错误的问题。@ 则是一个别名，通常指向项目的 src 目录，通过这种方式可以简化路径的书写，使代码更清晰易读。
### 使用：
```
vue create hello-world
```
会进行一些选项选择， 选项可以存储一个 Preset。  
<img src="/vue-cli.jpg" style="max-width: 68%" />

### Preset：
Preset 支持远程加载。  里面可以指定一些自定义的插件。  

preset 的示例：
```
{
  "useConfigFiles": true,
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "airbnb",
      "lintOn": ["save", "commit"]
    },
    "@vue/cli-plugin-router": {},
    "@vue/cli-plugin-vuex": {}
  }
}
```
### 自定义开发 preset：
你可以通过发布 git repo 将一个 preset 分享给其他开发者。这个 repo 应该包含以下文件：  
preset.json: 包含 preset 数据的主要文件（必需）。  
generator.js: 一个可以注入或是修改项目中文件的 Generator。  
prompts.js 一个可以通过命令行对话为 generator 收集选项的 prompts 文件。  
```
使用：
vue create --preset gitlab:my-gitlab-server.com:group/projectname --clone my-project
```

@vue/cli-service 也会安装 yorkie，它会让你在 package.json 的 gitHooks 字段中方便地指定 Git hook
```
// package.json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
   "lint-staged": {
    "*.{js,vue}": "vue-cli-service lint"
  }
}
````
### vue cli的自定义配置: vue.config.js
configureWebpack 扩展一些webpack的配置再这里写。比如新插件  
pluginOptions 一些插件的选项配置  
配置参考：https://cli.vuejs.org/zh/config/#crossorigin

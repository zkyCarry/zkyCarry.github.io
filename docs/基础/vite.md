---
outline: deep
---

# vite

## Vite 核心概念
+ ### vite的配置文件：vite.config.js. vite 是基于 Rollup  
```
使用：
npm create vite@latest (yarn, pnpm 都可以)
指定模版:
npm create vite@latest my-vue-app --template vue-ts
```

+ ### 性能瓶颈：(Node.js 调试器来创建 CPU 性能分析文件)
```
dev server： vite --profile --open
build： vite build --profile
```
Node.js 调试器将在根文件夹中生成 vite-profile-0.cpuprofile 文件，前往 https://www.speedscope.app/ ，点击 BROWSE 按钮上传 CPU 性能分析文件以检查结果。  
可以安装 vite-plugin-inspect 插件，它可以让你检查 Vite 插件转换时的中间态，并帮助你确定哪些插件或中间件是你应用的瓶颈。

+ ###  插件开发：
命名：Rollup 插件应该有一个带 rollup-plugin- 前缀、语义清晰的名称。  
在 package.json 中包含 rollup-plugin 和 vite-plugin 关键字。  
对于vite专属插件用 vite-plugin-vue- 前缀作为 Vue 插件  
rollup兼容插件： rollup-plugin-    

## 具体开发一个插件：
编写一个 Vite 插件需要了解 Vite 插件系统的基本结构和工作原理。Vite 插件基于 Rollup 插件系统，但增加了一些特定于 Vite 的钩子。以下是编写一个简单 Vite 插件的步骤和示例。

### 步骤

1. **创建插件文件**：创建一个新的 JavaScript 或 TypeScript 文件来编写插件代码。
2. **导出插件函数**：插件是一个导出函数，返回一个包含钩子函数的对象。
3. **实现钩子函数**：根据需要实现不同的钩子函数。

### 示例

下面是一个简单的 Vite 插件示例，该插件在每次构建开始时打印一条消息。

```javascript
// my-vite-plugin.js

export default function myVitePlugin() {
  return {
    name: 'my-vite-plugin', // 插件名称，必须是唯一的
    buildStart() {
      console.log('构建开始！');
    },
    transform(code, id) {
      if (id.endsWith('.js')) {
        // 在这里可以对 JavaScript 文件进行处理
        console.log(`正在处理文件: ${id}`);
      }
      return code;
    },
    buildEnd() {
      console.log('构建结束！');
    }
  };
}
```

### 使用插件

在 Vite 项目的配置文件 `vite.config.js` 中引入并使用该插件：

```javascript
import { defineConfig } from 'vite';
import myVitePlugin from './my-vite-plugin';

export default defineConfig({
  plugins: [myVitePlugin()]
});
```

### 插件钩子

Vite 插件可以使用多种钩子，以下是一些常用的钩子：

- **buildStart**: 构建开始时调用。
- **resolveId**: 用于自定义模块解析逻辑。
- **load**: 加载模块内容。
- **transform**: 转换模块内容。
- **buildEnd**: 构建结束时调用。
- **configureServer**: 用于配置开发服务器。
- **handleHotUpdate**: 处理模块热更新。

### 示例：添加自定义的 HTML 注入

下面是一个更复杂的示例，展示如何在 HTML 文件中注入自定义内容：

```javascript
// html-inject-plugin.js

export default function htmlInjectPlugin() {
  return {
    name: 'html-inject-plugin',
    transformIndexHtml(html) {
      return html.replace(
        '</body>',
        `<script>console.log('Hello from Vite plugin!');</script></body>`
      );
    }
  };
}
```

在 `vite.config.js` 中使用该插件：

```javascript
import { defineConfig } from 'vite';
import htmlInjectPlugin from './html-inject-plugin';

export default defineConfig({
  plugins: [htmlInjectPlugin()]
});
```

### 参考文档

- [Vite 插件 API](https://vitejs.dev/guide/api-plugin.html)
- [Rollup 插件文档](https://rollupjs.org/guide/en/#plugin-development)

通过这些步骤和示例，你可以开始编写自己的 Vite 插件，根据项目需求自定义构建和开发流程。

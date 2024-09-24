---
outline: deep
---

# npm

## npm 本地调试
1. 在对应的库文件中，执行 npm link
2. 在需要使用的项目中，执行 npm link 库的名称。
3. 如果需要更新，执行 npm update 库的名称。
4. 如果需要卸载，执行 npm unlink 库的名称/  npm unlink。
5. 引用本地路径，这个方式并不好。
```js
 "dependencies": {
    "my-local-lib": "file:libs/my-local-lib"
  }
```
## 问题：
1. 如果在库代码中加入 debugger，没有触发，可能是因为代码压缩混淆的原因。
2. package.json 中的 main 字段，指定了入口文件，如果改成源代码文件，可能会报错，因为代码没有经过打包转换，代码版本太高运行不了。可能得使用 Babel等工具进行转换。

## npm 包管理
### 1. npm init
- **作用**：初始化一个新的 npm 项目，生成 `package.json` 文件。
- **命令**：`npm init` 或 `npm init -y`（快速生成默认配置）。

### 2. npm install
- **作用**：安装项目依赖。

## 发布自己的npm包
npm login   //输入npm网站注册的账号       
npm publish    //发布



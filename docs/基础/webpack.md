---
outline: deep
---

# webpack

## 1. webpack核心概念
+ 入口(Entry)：Webpack 执行构建的第一步将从 Entry 开始，可以把它理解为应用程序的起点。
+ 输出(Output)：告诉 Webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值是 ./dist/main.js。
+ 加载器(Loaders)：Webpack 只能理解 JavaScript 和 JSON 文件，Loaders 让 Webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。
+ 插件(Plugins)：插件可以用于执行范围更广的任务，如 bundle 优化，资源管理和环境变量注入等。
+ 模式(Mode)：通过设置 development 或 production 之中的一个，可以启用 Webpack 相应模式下的内置优化。
+ 优化

### 入口配置
```
1. 单页面：entry: './path/to/my/entry/file.js',
2. 多页面: entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js',
  },
3. 第三方库分离 vendor： entry: {
    main: './src/app.js',
    vendor: './src/vendor.js',
  },
4. 还有其他。
```
### 输出配置：
```
1. 单页面： 
  output: {
    filename: 'bundle.js',
  },
2. 多页面： [name] 取的入口多配置的名字
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
3. 输出文件的hash, 还有其他的hash方式
output: {
    path: '/home/proj/cdn/assets/[fullhash]',
    }
```
### loader配置：
```
 module / rules。 css-loader 是引入的npm包的名字
 module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },   //  use: [{loader:'css-loader'}] 可配置多个loader
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
```
自定义loader开发：https://webpack.docschina.org/contribute/writing-a-loader/

### 插件：
#### 1.插件配置：
```
plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
```
#### 2.插件开发
```
// MyPlugin.js
class MyPlugin {
  apply(compiler) {
  	//第一个钩子
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      console.log('Hello Webpack Plugin!');
    });
    //其他钩子
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      compilation.hooks.optimize.tap('MyPlugin', () => {
        console.log('The compilation is optimizing...');
      });
    });
    // ...其他钩子函数
  }
}

module.exports = MyPlugin;
```
#### 3.钩子介绍
compiler.hooks.done.tap 是钩子，类似生命周期函数，特定的时间点会调用

compiler.hooks钩子介绍：https://webpack.docschina.org/api/compiler-hooks/ 很多钩子
#### 4.tap vs tapAsync vs tapPromise： (钩子函数的执行方式是同步，异步)
+ tap：用于同步操作，立即执行回调函数。
+ tapAsync：用于异步操作，回调函数在完成时需要调用 callback。
+ tapPromise：用于基于 Promise 的异步操作，回调函数返回一个 Promise。
### 模块：
开发者将程序分解为功能离散的 chunk，并称之为 模块。可以把一些动态载入的模版，打包成专门的chunk。减少一进页面加载的内容。
## 2. 配置示例
### 基本配置：
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 或 'production' //模式
  entry: './src/index.js', //入口
  output: { //生成文件。contenthash 是 hash码配置
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map', //source map 发布环境不需要。
  module: { //loader配置
    rules: [
      {
        test: /\.js$/, // js loader
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/, //scss loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //图片loader
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //字体loader
        type: 'asset/resource',
      },
    ],
  },
  plugins: [ //插件配置
    new CleanWebpackPlugin(), //clean 目录插件
    new HtmlWebpackPlugin({ //html生成插件
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({ //用于将 CSS 从 JavaScript 文件中提取出来，生成独立的 CSS 文件
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new webpack.DefinePlugin({ //环境变量
      'process.env.NODE_ENV': JSON.stringify('development'), // 或 'production'
    }),
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR 插件
  ],
  optimization: { //代码优化分隔
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: { //本地开发服务器
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true, // 启用 HMR
  },
};
```
### Tree Shaking 开启：
```
mode: 'production' //生产环境自动开启 Tree Shaking
package.json  // package需要配置这个
{
	"sideEffects": false,  //表示项目中的所有模块都没有副作用，因此未使用的代码可以安全地删除
}
```

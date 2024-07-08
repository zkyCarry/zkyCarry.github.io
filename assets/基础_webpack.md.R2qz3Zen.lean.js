import{_ as a,c as s,o as n,a1 as p}from"./chunks/framework.CF4Fx_O3.js";const k=JSON.parse('{"title":"webpack","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/webpack.md","filePath":"基础/webpack.md"}'),e={name:"基础/webpack.md"},l=p(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><h2 id="_1-webpack核心概念" tabindex="-1">1. webpack核心概念 <a class="header-anchor" href="#_1-webpack核心概念" aria-label="Permalink to &quot;1. webpack核心概念&quot;">​</a></h2><ul><li>入口(Entry)：Webpack 执行构建的第一步将从 Entry 开始，可以把它理解为应用程序的起点。</li><li>输出(Output)：告诉 Webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值是 ./dist/main.js。</li><li>加载器(Loaders)：Webpack 只能理解 JavaScript 和 JSON 文件，Loaders 让 Webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。</li><li>插件(Plugins)：插件可以用于执行范围更广的任务，如 bundle 优化，资源管理和环境变量注入等。</li><li>模式(Mode)：通过设置 development 或 production 之中的一个，可以启用 Webpack 相应模式下的内置优化。</li><li>优化</li></ul><h3 id="入口配置" tabindex="-1">入口配置 <a class="header-anchor" href="#入口配置" aria-label="Permalink to &quot;入口配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 单页面：entry: &#39;./path/to/my/entry/file.js&#39;,</span></span>
<span class="line"><span>2. 多页面: entry: {</span></span>
<span class="line"><span>    pageOne: &#39;./src/pageOne/index.js&#39;,</span></span>
<span class="line"><span>    pageTwo: &#39;./src/pageTwo/index.js&#39;,</span></span>
<span class="line"><span>    pageThree: &#39;./src/pageThree/index.js&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>3. 第三方库分离 vendor： entry: {</span></span>
<span class="line"><span>    main: &#39;./src/app.js&#39;,</span></span>
<span class="line"><span>    vendor: &#39;./src/vendor.js&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>4. 还有其他。</span></span></code></pre></div><h3 id="输出配置" tabindex="-1">输出配置： <a class="header-anchor" href="#输出配置" aria-label="Permalink to &quot;输出配置：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 单页面： </span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>2. 多页面： [name] 取的入口多配置的名字</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span>    path: __dirname + &#39;/dist&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>3. 输出文件的hash, 还有其他的hash方式</span></span>
<span class="line"><span>output: {</span></span>
<span class="line"><span>    path: &#39;/home/proj/cdn/assets/[fullhash]&#39;,</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="loader配置" tabindex="-1">loader配置： <a class="header-anchor" href="#loader配置" aria-label="Permalink to &quot;loader配置：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> module / rules。 css-loader 是引入的npm包的名字</span></span>
<span class="line"><span> module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      { test: /\\.css$/, use: &#39;css-loader&#39; },   //  use: [{loader:&#39;css-loader&#39;}] 可配置多个loader</span></span>
<span class="line"><span>      { test: /\\.ts$/, use: &#39;ts-loader&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>自定义loader开发：<a href="https://webpack.docschina.org/contribute/writing-a-loader/" target="_blank" rel="noreferrer">https://webpack.docschina.org/contribute/writing-a-loader/</a></p><h3 id="插件" tabindex="-1">插件： <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件：&quot;">​</a></h3><h4 id="_1-插件配置" tabindex="-1">1.插件配置： <a class="header-anchor" href="#_1-插件配置" aria-label="Permalink to &quot;1.插件配置：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>plugins: [</span></span>
<span class="line"><span>    new webpack.ProgressPlugin(),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; }),</span></span>
<span class="line"><span>  ],</span></span></code></pre></div><h4 id="_2-插件开发" tabindex="-1">2.插件开发 <a class="header-anchor" href="#_2-插件开发" aria-label="Permalink to &quot;2.插件开发&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// MyPlugin.js</span></span>
<span class="line"><span>class MyPlugin {</span></span>
<span class="line"><span>  apply(compiler) {</span></span>
<span class="line"><span>  	//第一个钩子</span></span>
<span class="line"><span>    compiler.hooks.done.tap(&#39;MyPlugin&#39;, (stats) =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;Hello Webpack Plugin!&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    //其他钩子</span></span>
<span class="line"><span>    compiler.hooks.compilation.tap(&#39;MyPlugin&#39;, (compilation) =&gt; {</span></span>
<span class="line"><span>      compilation.hooks.optimize.tap(&#39;MyPlugin&#39;, () =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;The compilation is optimizing...&#39;);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    // ...其他钩子函数</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = MyPlugin;</span></span></code></pre></div><h4 id="_3-钩子介绍" tabindex="-1">3.钩子介绍 <a class="header-anchor" href="#_3-钩子介绍" aria-label="Permalink to &quot;3.钩子介绍&quot;">​</a></h4><p>compiler.hooks.done.tap 是钩子，类似生命周期函数，特定的时间点会调用</p><p>compiler.hooks钩子介绍：<a href="https://webpack.docschina.org/api/compiler-hooks/" target="_blank" rel="noreferrer">https://webpack.docschina.org/api/compiler-hooks/</a> 很多钩子</p><h4 id="_4-执行方式-钩子函数的执行方式是同步-异步" tabindex="-1">4.执行方式 (钩子函数的执行方式是同步，异步) <a class="header-anchor" href="#_4-执行方式-钩子函数的执行方式是同步-异步" aria-label="Permalink to &quot;4.执行方式 (钩子函数的执行方式是同步，异步)&quot;">​</a></h4><ul><li>tap：用于同步操作，立即执行回调函数。</li><li>tapAsync：用于异步操作，回调函数在完成时需要调用 callback。</li><li>tapPromise：用于基于 Promise 的异步操作，回调函数返回一个 Promise。</li></ul><h3 id="模块" tabindex="-1">模块： <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块：&quot;">​</a></h3><p>开发者将程序分解为功能离散的 chunk，并称之为 模块。可以把一些动态载入的模版，打包成专门的chunk。减少一进页面加载的内容。</p><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h3><h4 id="_1-缓存-提升二次构建速度。" tabindex="-1">1. 缓存，提升二次构建速度。 <a class="header-anchor" href="#_1-缓存-提升二次构建速度。" aria-label="Permalink to &quot;1. 缓存，提升二次构建速度。&quot;">​</a></h4><h4 id="_2-代码分割-提取公共代码-减少首屏加载时间。" tabindex="-1">2. 代码分割，提取公共代码，减少首屏加载时间。 <a class="header-anchor" href="#_2-代码分割-提取公共代码-减少首屏加载时间。" aria-label="Permalink to &quot;2. 代码分割，提取公共代码，减少首屏加载时间。&quot;">​</a></h4><h4 id="_3-动态导入-按需加载。" tabindex="-1">3. 动态导入，按需加载。 <a class="header-anchor" href="#_3-动态导入-按需加载。" aria-label="Permalink to &quot;3. 动态导入，按需加载。&quot;">​</a></h4><h4 id="_4-减少代码体积-tree-shaking-代码混淆-压缩代码。" tabindex="-1">4. 减少代码体积，tree-shaking，代码混淆，压缩代码。 <a class="header-anchor" href="#_4-减少代码体积-tree-shaking-代码混淆-压缩代码。" aria-label="Permalink to &quot;4. 减少代码体积，tree-shaking，代码混淆，压缩代码。&quot;">​</a></h4><h4 id="_5-提取css-压缩css" tabindex="-1">5. 提取css，压缩css <a class="header-anchor" href="#_5-提取css-压缩css" aria-label="Permalink to &quot;5. 提取css，压缩css&quot;">​</a></h4><h4 id="_6-使用-webpack-bundle-analyzer-插件来分析打包后的文件大小-找出优化空间" tabindex="-1">6. 使用 webpack-bundle-analyzer 插件来分析打包后的文件大小，找出优化空间 <a class="header-anchor" href="#_6-使用-webpack-bundle-analyzer-插件来分析打包后的文件大小-找出优化空间" aria-label="Permalink to &quot;6. 使用 webpack-bundle-analyzer 插件来分析打包后的文件大小，找出优化空间&quot;">​</a></h4><h4 id="_7-图片压缩" tabindex="-1">7. 图片压缩 <a class="header-anchor" href="#_7-图片压缩" aria-label="Permalink to &quot;7. 图片压缩&quot;">​</a></h4><h4 id="_8-webpack-5-引入了模块联邦-可以实现不同应用之间的代码共享。" tabindex="-1">8.Webpack 5 引入了模块联邦，可以实现不同应用之间的代码共享。 <a class="header-anchor" href="#_8-webpack-5-引入了模块联邦-可以实现不同应用之间的代码共享。" aria-label="Permalink to &quot;8.Webpack 5 引入了模块联邦，可以实现不同应用之间的代码共享。&quot;">​</a></h4><h2 id="_2-配置示例" tabindex="-1">2. 配置示例 <a class="header-anchor" href="#_2-配置示例" aria-label="Permalink to &quot;2. 配置示例&quot;">​</a></h2><h3 id="基本配置" tabindex="-1">基本配置： <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span>const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span>const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  mode: &#39;development&#39;, // 或 &#39;production&#39; //模式</span></span>
<span class="line"><span>  entry: &#39;./src/index.js&#39;, //入口</span></span>
<span class="line"><span>  output: { //生成文件。contenthash 是 hash码配置</span></span>
<span class="line"><span>    filename: &#39;[name].[contenthash].js&#39;,</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  devtool: &#39;source-map&#39;, //source map 发布环境不需要。</span></span>
<span class="line"><span>  transpileDependencies: [&#39;vue3-lazyload&#39;], //依赖的库也进行js转换，不是特别常用</span></span>
<span class="line"><span>  module: { //loader配置</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.js$/, // js loader</span></span>
<span class="line"><span>        exclude: /node_modules/,</span></span>
<span class="line"><span>        use: {</span></span>
<span class="line"><span>          loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            presets: [&#39;@babel/preset-env&#39;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.scss$/, //scss loader</span></span>
<span class="line"><span>        use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;sass-loader&#39;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|svg|jpg|jpeg|gif)$/i, //图片loader</span></span>
<span class="line"><span>        type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(woff|woff2|eot|ttf|otf)$/i, //字体loader</span></span>
<span class="line"><span>        type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [ //插件配置</span></span>
<span class="line"><span>    new CleanWebpackPlugin(), //clean 目录插件</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({ //html生成插件</span></span>
<span class="line"><span>      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({ //用于将 CSS 从 JavaScript 文件中提取出来，生成独立的 CSS 文件</span></span>
<span class="line"><span>      filename: &#39;[name].[contenthash].css&#39;,</span></span>
<span class="line"><span>      chunkFilename: &#39;[id].[contenthash].css&#39;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new webpack.DefinePlugin({ //环境变量</span></span>
<span class="line"><span>      &#39;process.env.NODE_ENV&#39;: JSON.stringify(&#39;development&#39;), // 或 &#39;production&#39;</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new webpack.HotModuleReplacementPlugin(), // 启用 HMR 插件</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: { //代码优化分隔</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &#39;all&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  devServer: { //本地开发服务器</span></span>
<span class="line"><span>    contentBase: path.join(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>    compress: true,</span></span>
<span class="line"><span>    port: 9000,</span></span>
<span class="line"><span>    hot: true, // 启用 HMR</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="tree-shaking-开启" tabindex="-1">Tree Shaking 开启： <a class="header-anchor" href="#tree-shaking-开启" aria-label="Permalink to &quot;Tree Shaking 开启：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mode: &#39;production&#39; //生产环境自动开启 Tree Shaking</span></span>
<span class="line"><span>package.json  // package需要配置这个</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;sideEffects&quot;: false,  //表示项目中的所有模块都没有副作用，因此未使用的代码可以安全地删除</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="扩展文章" tabindex="-1">扩展文章 <a class="header-anchor" href="#扩展文章" aria-label="Permalink to &quot;扩展文章&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844904094281236487" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904094281236487</a></p>`,38),i=[l];function c(t,o,r,h,d,u){return n(),s("div",null,i)}const g=a(e,[["render",c]]);export{k as __pageData,g as default};

import{_ as a,c as n,o as s,a1 as p}from"./chunks/framework.PM4xAEU8.js";const g=JSON.parse('{"title":"uni-app 学习记录","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"记录/uni-app.md","filePath":"记录/uni-app.md"}'),l={name:"记录/uni-app.md"},e=p(`<h1 id="uni-app-学习记录" tabindex="-1">uni-app 学习记录 <a class="header-anchor" href="#uni-app-学习记录" aria-label="Permalink to &quot;uni-app 学习记录&quot;">​</a></h1><h2 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h2><p>官方文档：<a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/</a></p><h2 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to &quot;源代码&quot;">​</a></h2><p><a href="https://github.com/zkyCarry/uni-app-develop/tree/main" target="_blank" rel="noreferrer">https://github.com/zkyCarry/uni-app-develop/tree/main</a></p><h2 id="记录" tabindex="-1">记录 <a class="header-anchor" href="#记录" aria-label="Permalink to &quot;记录&quot;">​</a></h2><ul><li><ol><li>安装 HBuilder 官方的开发工具，打包也需要，肯定要装。 <a href="https://hx.dcloud.net.cn/Tutorial/install/macosx" target="_blank" rel="noreferrer">https://hx.dcloud.net.cn/Tutorial/install/macosx</a> (HBuilder 创建项目时可以选vue3)</li></ol></li><li><ol start="2"><li>安装微信开发者工具，浏览小程序时候需要。 (HBuilder-&gt;运行-》运行配置-》上面有个哥平台小程序IDE的下载地址。)</li></ol></li><li><ol start="3"><li>HBuilder -》 运行 -》 运行到小程序模拟器(运行配置配置好微信开发者工具的路径) -》 微信开发者工具(设置-》安全设置-》安全-》服务端端口(打开))</li></ol></li><li><ol start="4"><li>uniapp 内置了一些组件，不能直接使用html的标签。比如div，在uniapp中是<view></view>。 <a href="https://uniapp.dcloud.net.cn/component/view.html" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/component/view.html</a></li></ol></li><li><ol start="5"><li>开发代码模版，跟vue3基本一样</li></ol></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;view class=&quot;page-wrapper&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>	import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>	.page-wrapper {</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><ul><li><ol start="6"><li>uni-app为了兼容各种小程序，有自己的生命周期函数，比如onLoad，onShow等。 <a href="https://uniapp.dcloud.net.cn/tutorial/page.html#onload" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/tutorial/page.html#onload</a> ， vue3的生命周期函数也可以用，但是推荐使用uni-app的生命周期函数。</li></ol></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>页面级别的生命周期钩子：</span></span>
<span class="line"><span>onLoad：页面加载时触发。 可以拿url参数。</span></span>
<span class="line"><span>onShow：页面显示时触发。</span></span>
<span class="line"><span>onReady：页面初次渲染完成时触发。</span></span>
<span class="line"><span>onHide：页面隐藏时触发。</span></span>
<span class="line"><span>onUnload：页面卸载时触发。</span></span>
<span class="line"><span>onPullDownRefresh：用户下拉动作触发时触发。</span></span>
<span class="line"><span>onReachBottom：页面上拉触底时触发。</span></span>
<span class="line"><span>onPageScroll：页面滚动时触发。</span></span>
<span class="line"><span>onShareAppMessage：用户点击右上角分享时触发。</span></span>
<span class="line"><span>onResize：页面尺寸变化时触发。</span></span>
<span class="line"><span>onTabItemTap：点击 tab 时触发。</span></span>
<span class="line"><span>...</span></span></code></pre></div><ul><li><ol start="7"><li>uni-app的响应式单位，rpx。 设计稿的宽度要以 750px 来设计。 程序写的时候，单位都写rpx。</li></ol></li><li><ol start="8"><li>目录介绍</li></ol></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── components            // 组件目录 组件放在这里面，在其他页面使用，不需要写import引入。自动引入。</span></span>
<span class="line"><span>├── pages                 // 页面目录</span></span>
<span class="line"><span>│   ├── index</span></span>
<span class="line"><span>│   │   └── index.vue    // index页面</span></span>
<span class="line"><span>├── static                // 静态资源目录 自定义的scss，也可以写在这里面，都会参与编译，不要的东西不要放进去。</span></span>
<span class="line"><span>├── store                 // Vuex状态管理目录</span></span>
<span class="line"><span>├── App.vue               // 入口页面</span></span>
<span class="line"><span>├── main.js               // 入口文件，加载组件初始化</span></span>
<span class="line"><span>├── manifest.json         // 配置文件 配置跟平台相关的东西，比如微信小程appid</span></span>
<span class="line"><span>├── pages.json            // 页面配置</span></span>
<span class="line"><span>└── uni.scss              // 全局样式 预编译的，改变要重新启动，要不会报错。</span></span></code></pre></div><ul><li><ol start="9"><li>tabbar配置，底部导航栏。 <a href="https://uniapp.dcloud.net.cn/collocation/pages.json#tabbar" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/collocation/pages.json#tabbar</a></li></ol></li><li><ol start="10"><li>vue3自动引入插件，unplugin-auto-import。 <a href="https://github.com/antfu/unplugin-auto-import%E3%80%82%E9%82%A3%E5%9C%A8%E9%A1%B5%E9%9D%A2%E4%B8%AD%E5%86%8D%E4%B8%8D%E7%94%A8%E5%86%99" target="_blank" rel="noreferrer">https://github.com/antfu/unplugin-auto-import。那在页面中再不用写</a> import</li></ol></li><li><ol start="11"><li>微信小程序请求报错，需要在微信小程序开发工具中设置： 详情(右边)-》本地设置-》勾选 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。</li></ol></li><li><ol start="12"><li>微信平台登陆：<a href="https://mp.weixin.qq.com" target="_blank" rel="noreferrer">https://mp.weixin.qq.com</a>。 选择小程序，填写相应信息，生成appid。然后在HbuilderX中配置manifest.json文件。选微信小程序-》改appid。</li></ol></li><li><ol start="13"><li>微信小程序备案要花30块钱，可以不着急备案，等上线了再备案。</li></ol></li><li><ol start="14"><li>HBuilderX中，运行是调试，发行是发布，勾选压缩代码。打包后会打开微信小程序工具，点击上传，可以上传到微信的公共平台，可以真机直接预览，调试没问题之后，然后再后台提交审核。</li></ol></li><li><ol start="15"><li>http的请求域名，和cdn的图片域名，需要在微信小程序后台配置。 (开发管理-》开发设置-》服务器域名-》修改request合法域名，uploadFile合法域名，downloadFile合法域名。)</li></ol></li><li><ol start="16"><li>发布android，也可以直接在Hbuilder中发布，需要天app图标。 具体可以看 <a href="https://www.bilibili.com/video/BV1Yg4y127Fp?p=115&amp;spm_id_from=pageDriver&amp;vd_source=5fbc3fd25115452d7f726122d9292ece" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1Yg4y127Fp?p=115&amp;spm_id_from=pageDriver&amp;vd_source=5fbc3fd25115452d7f726122d9292ece</a></li></ol></li></ul>`,13),i=[e];function t(o,r,c,u,d,h){return s(),n("div",null,i)}const b=a(l,[["render",t]]);export{g as __pageData,b as default};

import{_ as s,c as a,o as n,a1 as p,aa as e,ab as l}from"./chunks/framework.Bk1mwsJI.js";const b=JSON.parse('{"title":"vscode 插件开发","description":"","frontmatter":{},"headers":[],"relativePath":"记录/vscode插件开发.md","filePath":"记录/vscode插件开发.md"}'),i={name:"记录/vscode插件开发.md"},c=p(`<h1 id="vscode-插件开发" tabindex="-1">vscode 插件开发 <a class="header-anchor" href="#vscode-插件开发" aria-label="Permalink to &quot;vscode 插件开发&quot;">​</a></h1><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p><code>.vscodeignore 不要排除node-modules，要不会出现本地开发好用，打包之后不好用的问题。</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>my-extension/</span></span>
<span class="line"><span>├── .vscode/</span></span>
<span class="line"><span>├── out/</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>├── test/</span></span>
<span class="line"><span>├── node_modules/</span></span>
<span class="line"><span>├── .gitignore</span></span>
<span class="line"><span>├── .vscodeignore  打包排除文件，不要把node-modules排除。</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── README.md</span></span></code></pre></div><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><p><code>开发基于nodejs，除了下面api，其他nodejs以及相关npm库都可以用。 </code><br> ● vscode.workspace - 工作区相关的功能，例如访问和修改文件，监听文件变化，管理工作区设置和配置等<br> ● vscode.window - 用于与VSCode窗口交互，包括处理编辑器面板、显示信息、警告和错误对话框、管理终端和输入框等<br> ● vscode.commands - 注册和执行命令<br> ● vscode.languages - 用于添加语言特定功能，如语法高亮、智能提示、代码片段等。<br> ● vscode.env 环境相关：打开外部url，剪切板操作。<br> ● vscode.debug - 提供了调试功能，允许扩展来管理调试会话，设置断点，控制执行流等。<br> ● vscode.extensions - 用于查询和管理VSCode的扩展。<br> ● vscode.tasks - 配置、运行和管理自动化任务。编译代码，运行测试，打包项目等。<br> ● vscode.scm - 用于集成源代码管理（如Git）功能。<br> ● 其他：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vscode.RelativePattern。 //创建匹配模式</span></span>
<span class="line"><span>vscode.Range //文本操作 范围</span></span>
<span class="line"><span>vscode.Position //文本位置</span></span>
<span class="line"><span>vscode.Hover // 创建悬停信息</span></span>
<span class="line"><span>vscode.MarkdownString  //创建和操作Markdown格式的字符串</span></span>
<span class="line"><span>vscode.Uri.file    // 统一资源标识符 文件、目录、HTTP资源等</span></span>
<span class="line"><span>vscode.ThemeIcon  //</span></span>
<span class="line"><span>vscode.window.createOutputChannel(&quot;xxx&quot;); //打开终端</span></span></code></pre></div><h2 id="配置-package-json" tabindex="-1">配置 package.json <a class="header-anchor" href="#配置-package-json" aria-label="Permalink to &quot;配置  package.json&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  activationEvents:[ * ],  //激活事件数组 图简单配置 *</span></span>
<span class="line"><span>  contributes:{    //主要插件配置</span></span>
<span class="line"><span>    configuration:{ //暴露给用户的配置，用户可以在工作区设置</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    commands:{}, //命令配置</span></span>
<span class="line"><span>    menus: {    //菜单配置</span></span>
<span class="line"><span>      &quot;explorer/context&quot;:{}, //右边资源管理器菜单</span></span>
<span class="line"><span>      &quot;editor/context&quot;:{}, //编辑区域右键菜单配置</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    keybindings: {}, //快捷键配置</span></span>
<span class="line"><span>    languages: {}, //配置一门新语言</span></span>
<span class="line"><span>    themes: {}, //主题配置</span></span>
<span class="line"><span>    snippets: {}, //代码片段设置</span></span>
<span class="line"><span>    viewsContainers: {}, // 侧边栏图标按钮</span></span>
<span class="line"><span>    views: {},      //自定义视图，可放在侧边栏内</span></span>
<span class="line"><span>    icons: {}, //icons配置</span></span>
<span class="line"><span>    iconThemes: {} //icons主题</span></span>
<span class="line"><span>    customEditors: {}  //自定义编辑器</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="本地调试" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试" aria-label="Permalink to &quot;本地调试&quot;">​</a></h2><ul><li>设置测试文件 <img src="`+e+'" alt="alt text"></li><li>先编译 npm run compile</li><li>运行vscode 调试 （快捷键 F5） <img src="'+l+`" alt="alt text"></li><li>打包与发布</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 安装打包工具</span></span>
<span class="line"><span>npm install -g @vscode/vsce</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 插件打包</span></span>
<span class="line"><span>vsce package</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//发布</span></span>
<span class="line"><span>vsce publish</span></span></code></pre></div>`,12),o=[c];function t(d,r,h,v,u,g){return n(),a("div",null,o)}const _=s(i,[["render",t]]);export{b as __pageData,_ as default};

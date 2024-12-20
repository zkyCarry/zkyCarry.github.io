# vscode 插件开发

## 目录结构
`.vscodeignore  不要排除node-modules，要不会出现本地开发好用，打包之后不好用的问题。`
```
my-extension/
├── .vscode/
├── out/
├── src/
├── test/
├── node_modules/
├── .gitignore
├── .vscodeignore  打包排除文件，不要把node-modules排除。
├── package.json
└── README.md
```

## api
`开发基于nodejs，除了下面api，其他nodejs以及相关npm库都可以用。  `  
● vscode.workspace - 工作区相关的功能，例如访问和修改文件，监听文件变化，管理工作区设置和配置等  
● vscode.window - 用于与VSCode窗口交互，包括处理编辑器面板、显示信息、警告和错误对话框、管理终端和输入框等  
● vscode.commands - 注册和执行命令  
● vscode.languages - 用于添加语言特定功能，如语法高亮、智能提示、代码片段等。  
● vscode.env   环境相关：打开外部url，剪切板操作。  
● vscode.debug - 提供了调试功能，允许扩展来管理调试会话，设置断点，控制执行流等。  
● vscode.extensions - 用于查询和管理VSCode的扩展。  
● vscode.tasks - 配置、运行和管理自动化任务。编译代码，运行测试，打包项目等。  
● vscode.scm - 用于集成源代码管理（如Git）功能。  
● 其他：
```
vscode.RelativePattern。 //创建匹配模式
vscode.Range //文本操作 范围
vscode.Position //文本位置
vscode.Hover // 创建悬停信息
vscode.MarkdownString  //创建和操作Markdown格式的字符串
vscode.Uri.file    // 统一资源标识符 文件、目录、HTTP资源等
vscode.ThemeIcon  //
vscode.window.createOutputChannel("xxx"); //打开终端
```

## 配置  package.json
```
{
  activationEvents:[ * ],  //激活事件数组 图简单配置 *
  contributes:{    //主要插件配置
    configuration:{ //暴露给用户的配置，用户可以在工作区设置
      
    },
    commands:{}, //命令配置
    menus: {    //菜单配置
      "explorer/context":{}, //右边资源管理器菜单
      "editor/context":{}, //编辑区域右键菜单配置
    }, 
    keybindings: {}, //快捷键配置
    languages: {}, //配置一门新语言
    themes: {}, //主题配置
    snippets: {}, //代码片段设置
    viewsContainers: {}, // 侧边栏图标按钮
    views: {},      //自定义视图，可放在侧边栏内
    icons: {}, //icons配置
    iconThemes: {} //icons主题
    customEditors: {}  //自定义编辑器
  } 
}
```

## 本地调试
+ 设置测试文件
![alt text](/vscode1.png)
+ 先编译
 npm run compile
+  运行vscode 调试 （快捷键 F5）
![alt text](/vscode2.png)
+ 打包与发布
```
// 安装打包工具
npm install -g @vscode/vsce

// 插件打包
vsce package

//发布
vsce publish
```
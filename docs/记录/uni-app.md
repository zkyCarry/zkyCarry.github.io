---
outline: deep
---

# uni-app 学习记录
## 文档
官方文档：https://uniapp.dcloud.net.cn/

## 记录
+ 1. 安装 HBuilder 官方的开发工具，打包也需要，肯定要装。 https://hx.dcloud.net.cn/Tutorial/install/macosx  (HBuilder 创建项目时可以选vue3)
+ 2. 安装微信开发者工具，浏览小程序时候需要。 (HBuilder->运行-》运行配置-》上面有个哥平台小程序IDE的下载地址。)  
+ 3. HBuilder -》 运行 -》 运行到小程序模拟器(运行配置配置好微信开发者工具的路径) -》 微信开发者工具(设置-》安全设置-》安全-》服务端端口(打开))
+ 4. uniapp 内置了一些组件，不能直接使用html的标签。比如div，在uniapp中是<view></view>。 https://uniapp.dcloud.net.cn/component/view.html  
+ 5. 开发代码模版，跟vue3基本一样
```
<template>
	<view class="page-wrapper">

	</view>
</template>

<script setup>
	import { ref } from 'vue';
	
</script>

<style lang="scss" scoped>
	.page-wrapper {
   
	}
</style>


```
+ 6. uni-app为了兼容各种小程序，有自己的生命周期函数，比如onLoad，onShow等。 https://uniapp.dcloud.net.cn/tutorial/page.html#onload ， vue3的生命周期函数也可以用，但是推荐使用uni-app的生命周期函数。  
``` 
页面级别的生命周期钩子：
onLoad：页面加载时触发。 可以拿url参数。
onShow：页面显示时触发。
onReady：页面初次渲染完成时触发。
onHide：页面隐藏时触发。
onUnload：页面卸载时触发。
onPullDownRefresh：用户下拉动作触发时触发。
onReachBottom：页面上拉触底时触发。
onPageScroll：页面滚动时触发。
onShareAppMessage：用户点击右上角分享时触发。
onResize：页面尺寸变化时触发。
onTabItemTap：点击 tab 时触发。
...
```
+ 7. uni-app的响应式单位，rpx。 设计稿的宽度要以 750px 来设计。 程序写的时候，单位都写rpx。
+ 8. 目录介绍
```
├── components            // 组件目录 组件放在这里面，在其他页面使用，不需要写import引入。自动引入。
├── pages                 // 页面目录
│   ├── index
│   │   └── index.vue    // index页面
├── static                // 静态资源目录 自定义的scss，也可以写在这里面，都会参与编译，不要的东西不要放进去。
├── store                 // Vuex状态管理目录
├── App.vue               // 入口页面
├── main.js               // 入口文件，加载组件初始化
├── manifest.json         // 配置文件 配置跟平台相关的东西，比如微信小程appid
├── pages.json            // 页面配置
└── uni.scss              // 全局样式 预编译的，改变要重新启动，要不会报错。
```
+ 9. tabbar配置，底部导航栏。 https://uniapp.dcloud.net.cn/collocation/pages.json#tabbar  
+ 10. vue3自动引入插件，unplugin-auto-import。 https://github.com/antfu/unplugin-auto-import。那在页面中再不用写 import
+ 11. 微信小程序请求报错，需要在微信小程序开发工具中设置： 详情(右边)-》本地设置-》勾选 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。
+ 12. 微信平台登陆：https://mp.weixin.qq.com。 选择小程序，填写相应信息，生成appid。然后在HbuilderX中配置manifest.json文件。选微信小程序-》改appid。 
+ 13. 微信小程序备案要花30块钱，可以不着急备案，等上线了再备案。
+ 14. HBuilderX中，运行是调试，发行是发布，勾选压缩代码。打包后会打开微信小程序工具，点击上传，可以上传到微信的公共平台，可以真机直接预览，调试没问题之后，然后再后台提交审核。
+ 15. http的请求域名，和cdn的图片域名，需要在微信小程序后台配置。 (开发管理-》开发设置-》服务器域名-》修改request合法域名，uploadFile合法域名，downloadFile合法域名。)
+ 16. 发布android，也可以直接在Hbuilder中发布，需要天app图标。 具体可以看 https://www.bilibili.com/video/BV1Yg4y127Fp?p=115&spm_id_from=pageDriver&vd_source=5fbc3fd25115452d7f726122d9292ece

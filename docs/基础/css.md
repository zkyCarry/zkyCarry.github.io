---
outline: deep
---

# CSS
CSS基本介绍

## 全部
``` html
1. css 深入解析
连接样式伪类：爱恨原则 LoVe HAte :link理解 :visited 访问 :hover悬停 :active 激活
2. 猫头鹰选择器 body * + * {
	margin-top :5px ; //兄弟元素间隔5px 不包括首歌元素
}

:not(first-child){
	margin-top: 5px;
}
3.
继承：文字和表格类的。 
主动继承 属性：inherit；
4. rem root节点下字体大小 font-size:16px;  em是父节点的font-size
:root {
	font-s
}
html {
	font-size:16px;
}
5. @media screen and (min-width:768px){ 媒体查询 media screen and （） max-wdith 和 min-width最常用
	:root {
	font-size:16px;
	}
}
6. vw 视口宽度 ，vh   后出的 ，现在常用适配，保持宽度， meta  -width initscale 去掉手势缩放
7， 检查 css 兼容网站 can i use
8， css 变量
-- 必须--开头，  :root { --cc-color:red} 全局。  .class { --cc-color} 局部。 emlemetn {局部}。 使用 var()  background-color: var(--main-bg-color)

9. 全局修改盒模型：
*， ::before, ::after {
	box-sizing:border-box;
}
或者继承：
：root {
	box-sizing:border-box;
}
*, ::before, ::after {
	display: inherit;
}
10, text-algin: center 影响文本和图片。
11， vertical-algin： 只影响行内元素 还必须要两个？
12. css 折叠 塌陷。 把div变成 BFC，block formatting contexts 块级格式化上下文。  display：flex； 这个应该最好用，
overflow：auto。hidden/ display：inline-blcok；  float：left，right。 设置border。 display：flex； grid； position：absoulut absolute。 fixed

13. float  浮动。 设计之初， 文字包裹图片， 现在也是唯一的办法。  布局 float ：left， right。 元素宽度变为内容宽度。高度没有,撑不起父亲高度， 在最后面再添加一个元素 clear：both。 或者最后一个u元素： ::after {clear:both}
14. css的一些框架 tailwindcss  bootstarp 。
15. flex 布局
父亲， display：flex； 子集 :last-child{margin-left:auto} 最后一额高  auto代表自动适应，会把父级填满。 margin： 0 auto； 剧中。
子类： flex 缩写： flex-grow 比例  flex-shrink(可缩放) flex-basis。默认： 1，1 0；  flex-grow：2, 两倍 其他一倍， flex-shrink 是否缩放 0 不缩放。  self-algin。
justify-content 主轴对齐， align-items 横轴对齐。  flex-direction： 设置主轴横轴。   flex-wrap：no-warp； wrap-revese。 
align-content: stretch；针对多行的横轴对齐。 默认 stretch：拉伸。 align-content: flex-start;就会去掉被拉伸的情况，(这里做监控墙的时候有被坑过)
子类：flex-order 数值越小越靠前。
flex:1; 是 flex：1 1 0; 简写。如果其他的都有设置了with， flex:1 这个元素会会自动填充剩下的空间。(自适应)

16. 网格布局：
display：grid。  grid-template-columns： grid-template-rows  grid-ap： 10px 10px; 网格间距。  grid-template-rows: repeat(4,auto)
子类使用哪个网格： 编号网格线， 命名网格线， 命名网格区域 grid-template-areas 父级别名(引用子级)。 grid-area: header; 这子item的别名。。 
minmax（） 指定网格最大最小函数。 auto-fill？ 
1fr 代表一份比例。
grid-template-columns: 1fr 3fr 1fr; 定义3列
grid-template-rows: auto 1fr auto; 定义3行  总共就是9个格子。

17，@supports 查看特性支持，可以做css会退。  js也可以查看css 特性支持。
18. 定位： position： static 默认静态，未被定位。  position:relative, absolute绝对， fixed 固定(创建模态框，做弹窗) sticky 到某个位置粘贴。 top right bottom left；
19. display：none； display：block； display：inline-blcok； display：inline； display：flex； display：grid； 
20， 隐藏 dsiplay：none 不占位。 visibility：hidden；
21； css 三角形；  ::after ::before  content 添加内容
div {
	width:0; hight:0; border: 50px, solid; border-color: block transparent transparent;
}
::after {content:""; border: 50px solid; border-color: block transparent transparent;}

22. 盒模型： margin border padding width hight
23. 响应式设计： 移动端有限， @media 媒体查询， 设置meta  width：device-width， initial-scale=1； user-scalabel=no； <meta name="viewport" content="width:750, user-scalable=no" > 陌陌。
24. img标签， 不同的分辨率可以使用不同过得图片 img srcset; img{max-width: 100%}
25. reset.css 有库。 normalize.css， 去掉浏览器默认的一些格式。
26. bem 命名 -连字符  __双下划线子元素 一种状态 双横线
27. css模块，写的时候分开，打包的时候合在一起。
28. 整理自己的css框架，别完全使用别人的。
29。 高级话题。把自己当成艺术家，而不是开发。 渐变和阴影 可以增加立体感。    background-position 设置背景图片位置 bockground-size cover contain; background-blend-mode：混合模式。
30，研究别人网站好的效果，想想怎么做。
31； hsl 色相 饱和度，明度 
32. 动画相关 transition ：属性，持续时间，线性(可以自定义，贝塞尔，steps阶梯函数)，等待时间。 过渡 tranfrom：矩阵matrix，倾斜 skew，旋转 rotate，缩放 scale，位移 translate。transform: translateX(50px);  
@keyframe  xxx {0% {} 100%{}}  
animation：xxx, 持续时间, 线性, 等待时间。  (使用没,)  
transform属性： transfrom: matrix() //矩阵。 transform: translate(120px, 50%) //移动。 transform: scale(2, 0.5); //缩放。 transform:rotate(xx) //旋转。 transform: skew(30deg, 20deg) //倾斜。
transform-origin 可以设置基点。 
33. 布局layout 绘制 paint 合成 composite 。  文档流，一旦布局发生变化，浏览器重排。 重绘是上色相关/文字。 合成。渲染一层一层，最后形成一张图，显示到屏幕。 will-change：transform； 可以合并一些图层，到gpu渲染，提升渲染效率。 
34. 组合选择器， + 兄弟选择器  > 子代选择器  ～不会选择目标之前的兄弟元素/
35. scss @mixin @include @extend 继承。 @for @if。.xx{&。xxx 控制当前节点有效}。 .xx {.xxx 控制子节点的}  
36。 近大远小。 设置透视，perspective 子类可以共享父亲级别。 rotateX rotateY。 
37. 优先级 ！import  行内样式 id选择器， 类选择器， 通配符选择器。 伪类优先级和类选择器一样。
38. 主要应用在自适应的网页：双飞翼：三栏布局，两边固定宽度，中间内容自适应宽度。 圣杯：包含页头和页脚。中间是双飞翼。
```



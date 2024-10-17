import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.D01xxF7t.js";const g=JSON.parse('{"title":"CSS","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/css.md","filePath":"基础/css.md"}'),l={name:"基础/css.md"},p=n(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><p>CSS基本介绍</p><h2 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-label="Permalink to &quot;全部&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1. css 深入解析</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">连接样式伪类：爱恨原则 LoVe HAte :link理解 :visited 访问 :hover悬停 :active 激活</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2. 猫头鹰选择器 body * + * {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	margin-top :5px ; //兄弟元素间隔5px 不包括首歌元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:not(first-child){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	margin-top: 5px;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">继承：文字和表格类的。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主动继承 属性：inherit；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4. rem root节点下字体大小 font-size:16px;  em是父节点的font-size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:root {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	font-s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	font-size:16px;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5. @media screen and (min-width:768px){ 媒体查询 media screen and （） max-wdith 和 min-width最常用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	:root {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	font-size:16px;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">6. vw 视口宽度 ，vh   后出的 ，现在常用适配，保持宽度， meta  -width initscale 去掉手势缩放</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">7， 检查 css 兼容网站 can i use</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8， css 变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-- 必须--开头，  :root { --cc-color:red} 全局。  .class { --cc-color} 局部。 emlemetn {局部}。 使用 var()  background-color: var(--main-bg-color)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">9. 全局修改盒模型：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*， ::before, ::after {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	box-sizing:border-box;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">或者继承：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：root {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	box-sizing:border-box;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*, ::before, ::after {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	display: inherit;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10, text-algin: center 影响文本和图片。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">11， vertical-algin： 只影响行内元素 还必须要两个？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">12. css 折叠 塌陷。 把div变成 BFC，block formatting contexts 块级格式化上下文。  display：flex； 这个应该最好用，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overflow：auto。hidden/ display：inline-blcok；  float：left，right。 设置border。 display：flex； grid； position：absoulut absolute。 fixed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">13. float  浮动。 设计之初， 文字包裹图片， 现在也是唯一的办法。  布局 float ：left， right。 元素宽度变为内容宽度。高度没有,撑不起父亲高度， 在最后面再添加一个元素 clear：both。 或者最后一个u元素： ::after {clear:both}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">14. css的一些框架 tailwindcss  bootstarp 。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">15. flex 布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父亲， display：flex； 子集 :last-child{margin-left:auto} 最后一额高  auto代表自动适应，会把父级填满。 margin： 0 auto； 剧中。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">子类： flex 缩写： flex-grow 比例  flex-shrink(可缩放) flex-basis。默认： 1，1 0；  flex-grow：2, 两倍 其他一倍， flex-shrink 是否缩放 0 不缩放。  self-algin。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">justify-content 主轴对齐， align-items 横轴对齐。  flex-direction： 设置主轴横轴。   flex-wrap：no-warp； wrap-revese。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-content: stretch；针对多行的横轴对齐。 默认 stretch：拉伸。 align-content: flex-start;就会去掉被拉伸的情况，(这里做监控墙的时候有被坑过)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">子类：flex-order 数值越小越靠前。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex:1; 是 flex：1 1 0; 简写。如果其他的都有设置了with， flex:1 这个元素会会自动填充剩下的空间。(自适应)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">16. 网格布局：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display：grid。  grid-template-columns： grid-template-rows  grid-ap： 10px 10px; 网格间距。  grid-template-rows: repeat(4,auto)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">子类使用哪个网格： 编号网格线， 命名网格线， 命名网格区域 grid-template-areas 父级别名(引用子级)。 grid-area: header; 这子item的别名。。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">minmax（） 指定网格最大最小函数。 auto-fill？ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1fr 代表一份比例。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grid-template-columns: 1fr 3fr 1fr; 定义3列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grid-template-rows: auto 1fr auto; 定义3行  总共就是9个格子。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">17，@supports 查看特性支持，可以做css会退。  js也可以查看css 特性支持。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">18. 定位： position： static 默认静态，未被定位。  position:relative, absolute绝对， fixed 固定(创建模态框，做弹窗) sticky 到某个位置粘贴。 top right bottom left；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">19. display：none； display：block； display：inline-blcok； display：inline； display：flex； display：grid； </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">20， 隐藏 dsiplay：none 不占位。 visibility：hidden；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">21； css 三角形；  ::after ::before  content 添加内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	width:0; hight:0; border: 50px, solid; border-color: block transparent transparent;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::after {content:&quot;&quot;; border: 50px solid; border-color: block transparent transparent;}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">22. 盒模型： margin border padding width hight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">23. 响应式设计： 移动端有限， @media 媒体查询， 设置meta  width：device-width， initial-scale=1； user-scalabel=no； &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width:750, user-scalable=no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt; 陌陌。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">24. img标签， 不同的分辨率可以使用不同过得图片 img srcset; img{max-width: 100%}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">25. reset.css 有库。 normalize.css， 去掉浏览器默认的一些格式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">26. bem 命名 -连字符  __双下划线子元素 一种状态 双横线</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">27. css模块，写的时候分开，打包的时候合在一起。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">28. 整理自己的css框架，别完全使用别人的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">29。 高级话题。把自己当成艺术家，而不是开发。 渐变和阴影 可以增加立体感。    background-position 设置背景图片位置 bockground-size cover contain; background-blend-mode：混合模式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">30，研究别人网站好的效果，想想怎么做。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">31； hsl 色相 饱和度，明度 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">32. 动画相关 transition ：属性，持续时间，线性(可以自定义，贝塞尔，steps阶梯函数)，等待时间。 过渡 tranfrom：矩阵matrix，倾斜 skew，旋转 rotate，缩放 scale，位移 translate。transform: translateX(50px);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@keyframe  xxx {0% {} 100%{}}  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">animation：xxx, 持续时间, 线性, 等待时间。  (使用没,)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transform属性： transfrom: matrix() //矩阵。 transform: translate(120px, 50%) //移动。 transform: scale(2, 0.5); //缩放。 transform:rotate(xx) //旋转。 transform: skew(30deg, 20deg) //倾斜。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transform-origin 可以设置基点。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">33. 布局layout 绘制 paint 合成 composite 。  文档流，一旦布局发生变化，浏览器重排。 重绘是上色相关/文字。 合成。渲染一层一层，最后形成一张图，显示到屏幕。 will-change：transform； 可以合并一些图层，到gpu渲染，提升渲染效率。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">34. 组合选择器， + 兄弟选择器  &gt; 子代选择器  ～不会选择目标之前的兄弟元素/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">35. scss @mixin @include @extend 继承。 @for @if。.xx{&amp;。xxx 控制当前节点有效}。 .xx {.xxx 控制子节点的}  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">36。 近大远小。 设置透视，perspective 子类可以共享父亲级别。 rotateX rotateY。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">37. 优先级 ！import  行内样式 id选择器， 类选择器， 通配符选择器。 伪类优先级和类选择器一样。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">38. 主要应用在自适应的网页：双飞翼：三栏布局，两边固定宽度，中间内容自适应宽度。 圣杯：包含页头和页脚。中间是双飞翼。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">39. env()  env函数用于css访问环境变量。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用：padding-top: env(safe-area-inset-top, 20px);  safe-area-inset-top 变量不可用，浏览器会使用 20px 作为备用值。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1. env(safe-area-inset-top): 设备顶部安全区域的大小。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2. env(safe-area-inset-right): 设备右侧安全区域的大小。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3. env(safe-area-inset-bottom): 设备底部安全区域的大小。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4. env(safe-area-inset-left): 设备左侧安全区域的大小。</span></span></code></pre></div>`,4),t=[p];function e(E,h,k,r,d,c){return i(),a("div",null,t)}const y=s(l,[["render",e]]);export{g as __pageData,y as default};

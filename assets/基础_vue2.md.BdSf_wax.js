import{_ as n,c as s,o as a,a1 as p}from"./chunks/framework.PM4xAEU8.js";const h=JSON.parse('{"title":"vue2","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/vue2.md","filePath":"基础/vue2.md"}'),e={name:"基础/vue2.md"},t=p(`<h1 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h1><p>vue2</p><h2 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-label="Permalink to &quot;全部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue2主要内容：  1.全局（配置、api）、2.单组件参数(数据、dom、生命周期、资源、组合、其他)、3.实例相关（变量、数据、事件、生命周期函数）、4.指令(个别指令有修饰符)、5.特殊attribute、6.内置组件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 全局配置：errorHandler错误上报、devtools 配置是否允许 vue-devtools 检查代码。keyCodes：键盘快捷键码配置。</span></span>
<span class="line"><span>2. 全局api：</span></span>
<span class="line"><span>	Vue.extend 组件继承 </span></span>
<span class="line"><span>	Vue.nextTick DOM更新结束执行。</span></span>
<span class="line"><span>	Vue.set 让响应式数据主动响应 Vue.delete、 </span></span>
<span class="line"><span>	Vue.directive 自定义指令、</span></span>
<span class="line"><span>	Vue.filter 全局过滤器</span></span>
<span class="line"><span>	Vue.component 注册全局组件、</span></span>
<span class="line"><span>	Vue.use 使用插件、</span></span>
<span class="line"><span>	Vue.mixin 全局混入、</span></span>
<span class="line"><span>	Vue.compile将模版编译成render函数、</span></span>
<span class="line"><span>	Vue.observable 让对象可响应。</span></span>
<span class="line"><span>3。选项/数据：</span></span>
<span class="line"><span>	data  function(){ return {x:1}}</span></span>
<span class="line"><span>	props  height:Number、age:{type:Number,default:0,required: , validator}</span></span>
<span class="line"><span>	propsData 创建实例的prop传人 var vm = new Comp({propsData:{msg:&#39;hello&#39;})</span></span>
<span class="line"><span>	computed  计算属性 computed: { func(){}}</span></span>
<span class="line"><span>	methods  方法 methods:{ func(){}}</span></span>
<span class="line"><span>	watch   监听 watch:{ data: function(val,oldVal){}} watch:{data:{handler:function(val, oldVal){}}, immediate:true, deep:true}</span></span>
<span class="line"><span>4. 选项/dom </span></span>
<span class="line"><span>	el Vue实例要挂载的节点</span></span>
<span class="line"><span>	template  代码的template</span></span>
<span class="line"><span>	render  代码render</span></span>
<span class="line"><span>	renderError</span></span>
<span class="line"><span>5. 选项/生命周期</span></span>
<span class="line"><span>	beforeCreate 初始化之后，数据侦听和事件侦听器之前调用</span></span>
<span class="line"><span>	created		 数据侦听、计算属性、方法、事件/侦听器的回调函数已完成。挂载还没开始 $el 占不可用</span></span>
<span class="line"><span>	beforeMount	 挂载节点 开始之前调用</span></span>
<span class="line"><span>	mounted		 挂载节点后调用，el已经被 vm.$el 替换。 不保证所有的子组件都挂载完成。 内部使用 this.$nextTick(()=&gt;{xxx}) 可以保证页面全部渲染完成</span></span>
<span class="line"><span>	beforeUpdate 数据改变，DOM更新之前调用</span></span>
<span class="line"><span>	updated		 渲染成功之后调用</span></span>
<span class="line"><span>	activated	 keep-alive 缓存组件激活时调用</span></span>
<span class="line"><span>	deactivated  keep-alive 缓存组件失活时调用</span></span>
<span class="line"><span>	beforeDestroy 组件删除前调用，一般在这里处理清除操作。</span></span>
<span class="line"><span>	destroyed。     组件删除后调用</span></span>
<span class="line"><span>	errorCaptured 组件报错调用</span></span>
<span class="line"><span>6. 选项/资源</span></span>
<span class="line"><span>	directives	组件内自定义指令</span></span>
<span class="line"><span>	filters  组件内过滤器</span></span>
<span class="line"><span>	components 组件内引用其他组件</span></span>
<span class="line"><span>7. 选项/组合</span></span>
<span class="line"><span>	mixins  组件内混入</span></span>
<span class="line"><span>	provide/inject  对子孙后代注入某个数据， 省去props一直传</span></span>
<span class="line"><span>	extends 组件内即成字端，可用Vue.extend替代。</span></span>
<span class="line"><span>8. 选项/其他</span></span>
<span class="line"><span>	name 组件名字</span></span>
<span class="line"><span>	model 自定义model的event。 model默认用input做event</span></span>
<span class="line"><span>9. 实例 property 实例中可访问的变量 下面 vm =&gt; this</span></span>
<span class="line"><span>   vm.$data   this.$data 组件的所有数据</span></span>
<span class="line"><span>   vm.$props  组件所有 props</span></span>
<span class="line"><span>   vm.$el   Vue实例使用的 根DOM 元素</span></span>
<span class="line"><span>   vm.$options Vue实例初始化的选项</span></span>
<span class="line"><span>   vm.$parent  父节点</span></span>
<span class="line"><span>   vm.$root 根节点</span></span>
<span class="line"><span>   vm.$children 子节点</span></span>
<span class="line"><span>   vm.$slots 访问插槽</span></span>
<span class="line"><span>   vm.$scopedSlots 访问作用域插槽</span></span>
<span class="line"><span>   vm.$refs  访问节点 ref=&quot;xx&quot; this.$refs.xx 就是当前节点</span></span>
<span class="line"><span>   vm.$attrs props和data  v-bind=&#39;$attrs&#39; 传入内部组件，就可以访问父节点的所有属性</span></span>
<span class="line"><span>   vm.$listeners 监听函数  v-on=&quot;$listeners&quot; 传入内部组件——在创建更高层次的组件时非常有用</span></span>
<span class="line"><span>10. 实例方法/数据  vm =&gt; this</span></span>
<span class="line"><span>   vm.$watch  代码主动添加监听。 返回一个 取消观察函数，用来停止触发 var unwatch = vm.$watch(&#39;a&#39;, cb)</span></span>
<span class="line"><span>   vm.$set 有时候为响应式对象添加新值没响应的时候，可以用vm.$set添加。 this.dashboardInfo = Object.assign({}, this.dashboardInfo);</span></span>
<span class="line"><span>   vm.$delete 删除</span></span>
<span class="line"><span>11. 实例方法/事件  可以建一个文件 const eventBus = new Vue()；export default eventBus； 来做eventbus。</span></span>
<span class="line"><span>	vm.$on 注册 vm.$on(&#39;test&#39;, function (msg) {console.log(msg)})</span></span>
<span class="line"><span>	vm.$once 只响应一次注册</span></span>
<span class="line"><span>	vm.$off 事件移除 vm.$off( [event, callback] )  event和callback都是可选。 </span></span>
<span class="line"><span>	vm.$emit 触发事件 this.$emit(&#39;xxx&#39;, data)</span></span>
<span class="line"><span>12. 实例方法/生命周期</span></span>
<span class="line"><span>	vm.$mount vue创建实例的时候，没有传 el。 可以调用vm.$mount实现挂载</span></span>
<span class="line"><span>	vm.$forceUpdate() 强制渲染，仅影响自己和插槽。 不影响子节点 ； :key=&#39;xx&#39; 可以给组件添加key 通过改变key实现强制刷新组件</span></span>
<span class="line"><span>	vm.$nextTick dom更新之后执行，这时候肯定有html节点</span></span>
<span class="line"><span>	vm.$destroy 主动删除某个组件</span></span>
<span class="line"><span>13. 指令</span></span>
<span class="line"><span>	v-text 设置文本 v-text=&quot;msg&quot; =&gt; {{msg}}</span></span>
<span class="line"><span>	v-html 用html的解析方式解析内容，可添加一些带格式的文字。 </span></span>
<span class="line"><span>	v-show 隐藏和显示 display:none; 只是css隐藏，实际节点还在。有缓存，性能比v-if高</span></span>
<span class="line"><span>	v-if 、v-else-if、v-else  条件渲染，切换是 组件被销毁/重建</span></span>
<span class="line"><span>	v-for  循环 必须要有:key v-for=&quot;(item, index) in items&quot;</span></span>
<span class="line"><span>	v-on   缩写@ 绑定事件 </span></span>
<span class="line"><span>		修饰符 .stop停止冒泡 </span></span>
<span class="line"><span>			  .prevent去掉浏览器自定义事件 </span></span>
<span class="line"><span>			  .capture .self只能自己响应 .{keyCode | keyAlias}键盘、 </span></span>
<span class="line"><span>			  .native 监听组件根元素事件，用组件库组件 @click不响应。@click.native就可以响应了 .once响应一次、.left鼠标左、.right 鼠标右、.middle 鼠标中 .passive 以 { passive: true } 模式添加侦听器</span></span>
<span class="line"><span>	v-bind 缩写:  	</span></span>
<span class="line"><span>		修饰符 .prop 作为一个 dom property绑定， 默认是 attribute 绑定</span></span>
<span class="line"><span>			  .camel  将 kebab-case attribute 名转换为 camelCase ?</span></span>
<span class="line"><span>			  .sync  扩展成一个更新父组件绑定值的 v-on 侦听器。</span></span>
<span class="line"><span>    v-model 双向绑定  </span></span>
<span class="line"><span>    	修饰符 .lazy 懒响应，取代 input 监听 change 事件 。 .number 输入字符串转为有效的数字 .trim - 输入首尾空格过滤</span></span>
<span class="line"><span>    v-slot 使用插槽  &lt;component&gt; &lt;template v-slot:header&gt; 内容 &lt;/template&gt;&lt;/component&gt;。还有具名插槽</span></span>
<span class="line"><span>    v-pre 跳过组件的编译过程，显示原始组件。 用于优化静态标签的。例子 &lt;div v-pre&gt; xxxx &lt;/diiv&gt;</span></span>
<span class="line"><span>    v-cloak 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    v-once 只渲染一次，用于优化 例子：&lt;span v-once&gt;This will never change: {{msg}}&lt;/span&gt;</span></span>
<span class="line"><span>14. 特殊 attribute</span></span>
<span class="line"><span>	key  :key 用于虚拟dom算法，比较新旧nodes，辨识VNodes。 相同父节点的兄弟key不能重复。</span></span>
<span class="line"><span>	ref  ref=&quot;xx&quot; this.$refs.xx 就获取了当前节点 &lt;div ref=&quot;xx&quot;&gt;</span></span>
<span class="line"><span>	is   配合动态组件使用： &lt;component :is=&quot;view&quot;&gt;</span></span>
<span class="line"><span>15. 内置组件</span></span>
<span class="line"><span>	component  &lt;component :is=&quot;componentId&quot;&gt;&lt;/component&gt; 动态组件</span></span>
<span class="line"><span>	transition 过渡组件 这里面内容很多， props： name (css过渡名字) 例如：name: &#39;fade&#39; 将自动拓展为 .fade-enter，.fade-enter-active 等。 事件：before-enter、before-leave、before-appear、enter、leave、appear、after...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	transition-group  &lt;transition-group&gt; 元素作为多个元素/组件的过渡效果 用于下面包裹多个组件</span></span>
<span class="line"><span>	keep-alive 保持某个组件，不重新创建。常用于tab切换保持 。props： include、exclude、max</span></span>
<span class="line"><span>	slot  &lt;slot&gt; 插槽</span></span></code></pre></div>`,4),l=[t];function i(c,o,r,d,v,m){return a(),s("div",null,l)}const f=n(e,[["render",i]]);export{h as __pageData,f as default};

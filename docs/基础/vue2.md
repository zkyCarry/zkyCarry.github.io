---
outline: deep
---

# vue2
vue2

## 全部
```
vue2主要内容：  1.全局（配置、api）、2.单组件参数(数据、dom、生命周期、资源、组合、其他)、3.实例相关（变量、数据、事件、生命周期函数）、4.指令(个别指令有修饰符)、5.特殊attribute、6.内置组件。

1. 全局配置：errorHandler错误上报、devtools 配置是否允许 vue-devtools 检查代码。keyCodes：键盘快捷键码配置。
2. 全局api：
	Vue.extend 组件继承 
	Vue.nextTick DOM更新结束执行。
	Vue.set 让响应式数据主动响应 Vue.delete、 
	Vue.directive 自定义指令、
	Vue.filter 全局过滤器
	Vue.component 注册全局组件、
	Vue.use 使用插件、
	Vue.mixin 全局混入、
	Vue.compile将模版编译成render函数、
	Vue.observable 让对象可响应。
3。选项/数据：
	data  function(){ return {x:1}}
	props  height:Number、age:{type:Number,default:0,required: , validator}
	propsData 创建实例的prop传人 var vm = new Comp({propsData:{msg:'hello'})
	computed  计算属性 computed: { func(){}}
	methods  方法 methods:{ func(){}}
	watch   监听 watch:{ data: function(val,oldVal){}} watch:{data:{handler:function(val, oldVal){}}, immediate:true, deep:true}
4. 选项/dom 
	el Vue实例要挂载的节点
	template  代码的template
	render  代码render
	renderError
5. 选项/生命周期
	beforeCreate 初始化之后，数据侦听和事件侦听器之前调用
	created		 数据侦听、计算属性、方法、事件/侦听器的回调函数已完成。挂载还没开始 $el 占不可用
	beforeMount	 挂载节点 开始之前调用
	mounted		 挂载节点后调用，el已经被 vm.$el 替换。 不保证所有的子组件都挂载完成。 内部使用 this.$nextTick(()=>{xxx}) 可以保证页面全部渲染完成
	beforeUpdate 数据改变，DOM更新之前调用
	updated		 渲染成功之后调用
	activated	 keep-alive 缓存组件激活时调用
	deactivated  keep-alive 缓存组件失活时调用
	beforeDestroy 组件删除前调用，一般在这里处理清除操作。
	destroyed。     组件删除后调用
	errorCaptured 组件报错调用
6. 选项/资源
	directives	组件内自定义指令
	filters  组件内过滤器
	components 组件内引用其他组件
7. 选项/组合
	mixins  组件内混入
	provide/inject  对子孙后代注入某个数据， 省去props一直传
	extends 组件内即成字端，可用Vue.extend替代。
8. 选项/其他
	name 组件名字
	model 自定义model的event。 model默认用input做event
9. 实例 property 实例中可访问的变量 下面 vm => this
   vm.$data   this.$data 组件的所有数据
   vm.$props  组件所有 props
   vm.$el   Vue实例使用的 根DOM 元素
   vm.$options Vue实例初始化的选项
   vm.$parent  父节点
   vm.$root 根节点
   vm.$children 子节点
   vm.$slots 访问插槽
   vm.$scopedSlots 访问作用域插槽
   vm.$refs  访问节点 ref="xx" this.$refs.xx 就是当前节点
   vm.$attrs props和data  v-bind='$attrs' 传入内部组件，就可以访问父节点的所有属性
   vm.$listeners 监听函数  v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用
10. 实例方法/数据  vm => this
   vm.$watch  代码主动添加监听。 返回一个 取消观察函数，用来停止触发 var unwatch = vm.$watch('a', cb)
   vm.$set 有时候为响应式对象添加新值没响应的时候，可以用vm.$set添加。 this.dashboardInfo = Object.assign({}, this.dashboardInfo);
   vm.$delete 删除
11. 实例方法/事件  可以建一个文件 const eventBus = new Vue()；export default eventBus； 来做eventbus。
	vm.$on 注册 vm.$on('test', function (msg) {console.log(msg)})
	vm.$once 只响应一次注册
	vm.$off 事件移除 vm.$off( [event, callback] )  event和callback都是可选。 
	vm.$emit 触发事件 this.$emit('xxx', data)
12. 实例方法/生命周期
	vm.$mount vue创建实例的时候，没有传 el。 可以调用vm.$mount实现挂载
	vm.$forceUpdate() 强制渲染，仅影响自己和插槽。 不影响子节点 ； :key='xx' 可以给组件添加key 通过改变key实现强制刷新组件
	vm.$nextTick dom更新之后执行，这时候肯定有html节点
	vm.$destroy 主动删除某个组件
13. 指令
	v-text 设置文本 v-text="msg" => {{msg}}
	v-html 用html的解析方式解析内容，可添加一些带格式的文字。 
	v-show 隐藏和显示 display:none; 只是css隐藏，实际节点还在。有缓存，性能比v-if高
	v-if 、v-else-if、v-else  条件渲染，切换是 组件被销毁/重建
	v-for  循环 必须要有:key v-for="(item, index) in items"
	v-on   缩写@ 绑定事件 
		修饰符 .stop停止冒泡 
			  .prevent去掉浏览器自定义事件 
			  .capture .self只能自己响应 .{keyCode | keyAlias}键盘、 
			  .native 监听组件根元素事件，用组件库组件 @click不响应。@click.native就可以响应了 .once响应一次、.left鼠标左、.right 鼠标右、.middle 鼠标中 .passive 以 { passive: true } 模式添加侦听器
	v-bind 缩写:  	
		修饰符 .prop 作为一个 dom property绑定， 默认是 attribute 绑定
			  .camel  将 kebab-case attribute 名转换为 camelCase ?
			  .sync  扩展成一个更新父组件绑定值的 v-on 侦听器。
    v-model 双向绑定  
    	修饰符 .lazy 懒响应，取代 input 监听 change 事件 。 .number 输入字符串转为有效的数字 .trim - 输入首尾空格过滤
    v-slot 使用插槽  <component> <template v-slot:header> 内容 </template></component>。还有具名插槽
    v-pre 跳过组件的编译过程，显示原始组件。 用于优化静态标签的。例子 <div v-pre> xxxx </diiv>
    v-cloak 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
    
    v-once 只渲染一次，用于优化 例子：<span v-once>This will never change: {{msg}}</span>
14. 特殊 attribute
	key  :key 用于虚拟dom算法，比较新旧nodes，辨识VNodes。 相同父节点的兄弟key不能重复。
	ref  ref="xx" this.$refs.xx 就获取了当前节点 <div ref="xx">
	is   配合动态组件使用： <component :is="view">
15. 内置组件
	component  <component :is="componentId"></component> 动态组件
	transition 过渡组件 这里面内容很多， props： name (css过渡名字) 例如：name: 'fade' 将自动拓展为 .fade-enter，.fade-enter-active 等。 事件：before-enter、before-leave、before-appear、enter、leave、appear、after...

	transition-group  <transition-group> 元素作为多个元素/组件的过渡效果 用于下面包裹多个组件
	keep-alive 保持某个组件，不重新创建。常用于tab切换保持 。props： include、exclude、max
	slot  <slot> 插槽
```









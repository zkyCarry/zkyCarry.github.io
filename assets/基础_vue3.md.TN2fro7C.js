import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.CF4Fx_O3.js";const f=JSON.parse('{"title":"Vue3","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/vue3.md","filePath":"基础/vue3.md"}'),e={name:"基础/vue3.md"},l=p(`<h1 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3&quot;">​</a></h1><p>vue3</p><h2 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-label="Permalink to &quot;全部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>整体：</span></span>
<span class="line"><span>全局实例api，配置，全局通用api。</span></span>
<span class="line"><span>组合式api(setup函数)、响应核心(ref、reactive、readonly)、响应工具（to is）、响应进阶(shallow浅，raw)、生命周期钩子，依赖注入</span></span>
<span class="line"><span>选项式api，跟vue2类似</span></span>
<span class="line"><span>内置内容：指令、组件(包括特殊组件)、特殊Attributes</span></span>
<span class="line"><span>单文件文件： 语法（define）、 &lt;script setup&gt;、css功能、 逻辑复用(组合式函数(替代mixin)，自定义指令，插件)</span></span>
<span class="line"><span>进阶api：渲染h函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>详细：</span></span>
<span class="line"><span>全局API</span></span>
<span class="line"><span>createApp()  创建一个应用实例</span></span>
<span class="line"><span>app.mount() 将应用实例挂载在一个容器元素中。</span></span>
<span class="line"><span>app.unmount() 卸载一个已挂载的应用实例</span></span>
<span class="line"><span>app.component() 注册一个全局组件</span></span>
<span class="line"><span>app.directive() 注册一个全局指令</span></span>
<span class="line"><span>app.use()  安装一个插件 (插件里面install)</span></span>
<span class="line"><span>app.mixin() 全局混入，Vue3不推荐使用，推荐使用组合函数替代</span></span>
<span class="line"><span>app.provide()  全局注入</span></span>
<span class="line"><span>app.runWithContent() 使用当前应用作为注入上下文执行回调函数。</span></span>
<span class="line"><span>app.version  Vue 版本号</span></span>
<span class="line"><span>全局配置：</span></span>
<span class="line"><span>app.config.errorHandler 用于为应用内抛出的未捕获错误指定一个全局处理函数。</span></span>
<span class="line"><span>app.config.globalProperties 添加全局属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通用：</span></span>
<span class="line"><span>version 暴露当前所使用的 Vue 版本 import { version } from &#39;vue&#39;</span></span>
<span class="line"><span>nextTick() 等待下一次 DOM 更新刷新的工具方法</span></span>
<span class="line"><span>defineComponent()  定义同步组件</span></span>
<span class="line"><span>defineAsyncComponent() 定义一个异步组件，它在运行时是懒加载的。</span></span>
<span class="line"><span>defineCustomElement() 返回一个原生的自定义组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选项式api跟vue2差不多。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>组合式api：</span></span>
<span class="line"><span>setup() 通常情况不使用。 1. 非文件组件中使用组合式API。 2. 选项式API的组件集成组合API的代码。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>响应式：核心</span></span>
<span class="line"><span>ref()  响应式，ref都可以解决。可传基础值和对象 使用：const count = ref(0) 代码中使用 count.value  template模版中使用 {{count}}</span></span>
<span class="line"><span>computed()  使用 const plusOne = computed(() =&gt; count.value + 1) ； import {computed} from &#39;vue&#39;</span></span>
<span class="line"><span>reacive() 返回一个对象的响应式代理。 使用const obj = reactive({ count }) 直接访问 obj.count 不需要的.value</span></span>
<span class="line"><span>readonly()  只读。 可接受普通对象或者ref</span></span>
<span class="line"><span>watchEffect()  watch的立即执行版本，会自动监听函数下面的响应变量执行。 开始立即执行一次。 watchEffect(callback)，可返回取消函数</span></span>
<span class="line"><span>watchPostEffect()  Vue的Dom刷新之后执行的 watch。 也是立即执行。 </span></span>
<span class="line"><span>watchSyncEffect() 不常用 Dom更新之前触发的watch</span></span>
<span class="line"><span>watch()  watch(count, (count, prevCount) =&gt; {}) watch监听必须先执行监听内容，watchEffect不需要指定(更好用)。 参数：immediate(立即执行)， deep(深度监听)，flush(dom更新后触发)， onTrack / onTrigger(开发调试用)，once(一次)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>响应式：工具</span></span>
<span class="line"><span>isRef()  检查某个值是否为 ref</span></span>
<span class="line"><span>unRef()  如果参数是 ref，则返回内部值，否则返回参数本身。 val = isRef(val) ? val.value : val 计算的一个语法糖</span></span>
<span class="line"><span>toRef() 基于响应式对象上的一个属性，创建一个对应的 ref。相当于别名， toRef与原有的ref 互相影响。</span></span>
<span class="line"><span>toValue()  toValue和 unRef类似。 </span></span>
<span class="line"><span>toRefs()  将一个响应式对象转换为一个普通对象，每个子属性都是响应式的。  解构的变量是响应式的  </span></span>
<span class="line"><span>function useFeatureX() {</span></span>
<span class="line"><span>  const state = reactive({</span></span>
<span class="line"><span>    foo: 1,</span></span>
<span class="line"><span>    bar: 2</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ...基于状态的操作逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 在返回时都转为 ref</span></span>
<span class="line"><span>  return toRefs(state)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可以解构而不会失去响应性</span></span>
<span class="line"><span>const { foo, bar } = useFeatureX()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>isProxy()  检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。</span></span>
<span class="line"><span>isReactive() 检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。</span></span>
<span class="line"><span>isReadonly() 检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>响应式：进阶 (大部分都不常用)</span></span>
<span class="line"><span>shallowRef()  ref() 的浅层作用形式。 对象的子对象不会触发响应式</span></span>
<span class="line"><span>triggerRef() 强制触发依赖于一个浅层 ref 。  通常在对浅引用的内部值进行深度变更后使用</span></span>
<span class="line"><span>customRef() 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。例子：创造一个防抖ref，只再上一次更新后多久才再更新。</span></span>
<span class="line"><span>shallowReactive() reactive() 的浅层作用形式。谨慎使用，不常用。</span></span>
<span class="line"><span>shallowReadonly()  readonly() 的浅层作用形式， 不常用。</span></span>
<span class="line"><span>toRaw()  根据一个 Vue 创建的代理返回其原始对象。 console.log(toRaw(reactiveFoo) === foo) // true</span></span>
<span class="line"><span>markRaw() 将一个对象标记为不可被转为代理。返回该对象本身。 不常用</span></span>
<span class="line"><span>effectScope() 创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。</span></span>
<span class="line"><span>getCurrentScope() 如果有的话，返回当前活跃的 effect 作用域。 </span></span>
<span class="line"><span>onScopedDispose() 在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>生命周期钩子</span></span>
<span class="line"><span>onBeforeMount() 注册一个钩子，在组件被挂载之前被调用。</span></span>
<span class="line"><span>onMounted()    注册一个回调函数，在组件挂载完成后执行。</span></span>
<span class="line"><span>onBeforeUpdate() 注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。</span></span>
<span class="line"><span>onUpdated()    注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。</span></span>
<span class="line"><span>onBeforeUnmount() 注册一个钩子，在组件实例被卸载之前调用。</span></span>
<span class="line"><span>onUnmounted()  注册一个回调函数，在组件实例被卸载之后调用。</span></span>
<span class="line"><span>onErrorCatured()  注册一个钩子，在捕获了后代组件传递的错误时调用。</span></span>
<span class="line"><span>onRenderTracked()  (开发调试)注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。</span></span>
<span class="line"><span>onRenderTriggered() (开发调试) 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。</span></span>
<span class="line"><span>onActivated()      &lt;KeepAlive&gt; 组件激活时调用。</span></span>
<span class="line"><span>onDeactivated()    &lt;KeepAlive&gt; 组件失活时调用。</span></span>
<span class="line"><span>onServerPrefetch()  注册一个异步函数，在组件实例在服务器上被渲染之前调用。</span></span>
<span class="line"><span>依赖注入</span></span>
<span class="line"><span>provide()  提供一个值，可以被后代组件注入。 import { ref, provide } from &#39;vue&#39; //静态provide(&#39;path&#39;, &#39;/project/&#39;) //响应式 const count = ref(0);  provide(&#39;count&#39;, count)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inject() 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值。 const path = inject(&#39;path&#39;)</span></span>
<span class="line"><span>hasInjectionContext() 不常用 如果 inject() 可以在错误的地方 (例如 setup() 之外) 被调用而不触发警告，则返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>内置内容：</span></span>
<span class="line"><span>指令</span></span>
<span class="line"><span>v-text  绑定文字 v-text=&quot;xx&quot; 等同于 {{xx}}</span></span>
<span class="line"><span>v-html 更新元素的 innerHTML。 绑定html格式的内容。</span></span>
<span class="line"><span>v-show  元素可见性， display:none。不显示，dom是通过css隐藏的。</span></span>
<span class="line"><span>v-if    来条件性地渲染元素或者模板片段。 不显示 dom就没创建</span></span>
<span class="line"><span>v-else-if </span></span>
<span class="line"><span>v-else</span></span>
<span class="line"><span>v-for   列表渲染</span></span>
<span class="line"><span>v-on  缩写@  添加事件监听器。  @[event]=&quot;doThis&quot; 动态事件</span></span>
<span class="line"><span>修饰符</span></span>
<span class="line"><span>.stop - 调用 event.stopPropagation()。</span></span>
<span class="line"><span>.prevent - 调用 event.preventDefault()。</span></span>
<span class="line"><span>.capture - 在捕获模式添加事件监听器。</span></span>
<span class="line"><span>.self - 只有事件从元素本身发出才触发处理函数。</span></span>
<span class="line"><span>.{keyAlias} - 只在某些按键下触发处理函数。</span></span>
<span class="line"><span>.once - 最多触发一次处理函数。</span></span>
<span class="line"><span>.left - 只在鼠标左键事件触发处理函数。</span></span>
<span class="line"><span>.right - 只在鼠标右键事件触发处理函数。</span></span>
<span class="line"><span>.middle - 只在鼠标中键事件触发处理函数。</span></span>
<span class="line"><span>.passive - 通过 { passive: true } 附加一个 DOM 事件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v-bind 缩写 :  动态的绑定一个或多个 attribute，也可以是组件的 prop。  :[key] 动态 attribute 名的缩写</span></span>
<span class="line"><span>修饰符</span></span>
<span class="line"><span>.camel - 将短横线命名的 attribute 转变为驼峰式命名。</span></span>
<span class="line"><span>.prop - 强制绑定为 DOM property。</span></span>
<span class="line"><span>.attr - 强制绑定为 DOM attribute</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v-model 在表单输入元素或组件上创建双向绑定。</span></span>
<span class="line"><span>修饰符</span></span>
<span class="line"><span>.lazy - 监听 change 事件而不是 input</span></span>
<span class="line"><span>.number - 将输入的合法字符串转为数字</span></span>
<span class="line"><span>.trim - 移除输入内容两端空格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v-slot  用于声明具名插槽或是期望接收 props 的作用域插槽。 使用：</span></span>
<span class="line"><span>&lt;template v-slot:header&gt;</span></span>
<span class="line"><span>Header content</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v-pre 跳过该元素及其所有子元素的编译。</span></span>
<span class="line"><span>v-once 仅渲染元素和组件一次，并跳过之后的更新。</span></span>
<span class="line"><span>v-memo &lt;div v-memo=&quot;[valueA, valueB]&quot;&gt; 如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。</span></span>
<span class="line"><span>&lt;div v-for=&quot;item in list&quot; :key=&quot;item.id&quot; v-memo=&quot;[item.id === selected]&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;ID: {{ item.id }} - selected: {{ item.id === selected }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;...more child nodes&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>只有当该项的被选中状态改变时才需要更新，这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。</span></span>
<span class="line"><span>注意：当搭配 v-for 使用 v-memo，确保两者都绑定在同一个元素上</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v-cloak 用于隐藏尚未完成编译的 DOM 模板。</span></span>
<span class="line"><span>//css</span></span>
<span class="line"><span>[v-cloak] {</span></span>
<span class="line"><span>  display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;div v-cloak&gt;</span></span>
<span class="line"><span>  {{ message }}</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>组件</span></span>
<span class="line"><span>&lt;Transition&gt;  为单个元素或组件提供动画过渡效果。</span></span>
<span class="line"><span>&lt;TransitionGroup&gt; 为列表中的多个元素或组件提供过渡效果。</span></span>
<span class="line"><span>&lt;KeepAlive&gt; 缓存包裹在其中的动态切换组件。</span></span>
<span class="line"><span>&lt;Teleport&gt;  将其插槽内容渲染到 DOM 中的另一个位置。 比如再模态弹出指定再body上弹出。</span></span>
<span class="line"><span>&lt;Suspense&gt;。用于协调对组件树中嵌套的异步依赖的处理。 ？？还在实验阶段</span></span>
<span class="line"><span>特殊元素 </span></span>
<span class="line"><span>&lt;component&gt;  &lt;component :is=&quot;view&quot; /&gt;</span></span>
<span class="line"><span>&lt;slot&gt;   表示模板中的插槽内容出口。</span></span>
<span class="line"><span>&lt;template&gt;  当我们想要使用内置指令而不在 DOM 中渲染元素时，&lt;template&gt; 标签可以作为占位符使用。</span></span>
<span class="line"><span>特殊attributes</span></span>
<span class="line"><span>key  作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。 有时候加key强制更新某个组件。</span></span>
<span class="line"><span>ref 用于注册模板引用。  &lt;p ref=&quot;p&quot;&gt;hello&lt;/p&gt;  const p = ref() //p就是这个dom节点</span></span>
<span class="line"><span>is 用于绑定动态组件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>单文件组件</span></span>
<span class="line"><span>语法定义 </span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt; &lt;template&gt;&lt;/template&gt; &lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt; 简介：</span></span>
<span class="line"><span>响应：</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>组件使用： 直接import之后就可以使用了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加载文件夹组件并使用：</span></span>
<span class="line"><span>import * as Form from &#39;./form-components&#39;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;Form.Input&gt;</span></span>
<span class="line"><span>    &lt;Form.Label&gt;label&lt;/Form.Label&gt;</span></span>
<span class="line"><span>  &lt;/Form.Input&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>自定义指令，附和命名规范可直接使用：</span></span>
<span class="line"><span>const vMyDirective = {</span></span>
<span class="line"><span>  beforeMount: (el) =&gt; {</span></span>
<span class="line"><span>    // 在元素上做些操作</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h1 v-my-directive&gt;This is a Heading&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defineProps： 定义props ， withDefaults 定义props</span></span>
<span class="line"><span>defineEmits： 定义emit通知</span></span>
<span class="line"><span>defineModel()  定义model信息， prop 名称将默认为 &quot;modelValue&quot;。可以自定义/</span></span>
<span class="line"><span>defineExpose() 暴露一些方法，默认setup不会暴露组件的方法或变量， 可以通过该属性添加</span></span>
<span class="line"><span>defineOptions()  声明组件选项的不常用。</span></span>
<span class="line"><span>defineSlots()  这个宏可以用于为 IDE 提供插槽名称和 props 类型检查的类型提示。</span></span>
<span class="line"><span>useSlots()、useAttrs()使用插槽和 attr 用的很少 import { useSlots, useAttrs } from &#39;vue&#39; </span></span>
<span class="line"><span>可以在setup中直接使用异步 await</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot; generic=&quot;T&quot;&gt; 支持泛型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CSS功能</span></span>
<span class="line"><span>scoped 组件作用域 &lt;style scoped&gt;</span></span>
<span class="line"><span>:deep()  深度选择器，组件作用域css想影响其他的组件 &lt;style scoped&gt;  .a :deep(.b) {}</span></span>
<span class="line"><span>:slotted(div) 影响插槽的样式</span></span>
<span class="line"><span>:global(.red) 把一个内部选择器，变为全局</span></span>
<span class="line"><span>一个组件可以加多个 style   &lt;style&gt;  &lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;style module&gt;  标签会被编译为 CSS Modules 。 $style暴露给tmplate和script使用</span></span>
<span class="line"><span>&lt;style module=&quot;classes&quot;&gt; 可以指定名字   &lt;p :class=&quot;classes.red&quot;&gt;red&lt;/p&gt; 默认是$style</span></span>
<span class="line"><span>useCssModule 在组合api中使用，css的声明。useCssModule()/ useCssModule(&#39;classes&#39;) </span></span>
<span class="line"><span>v-bind()  style中使用js的变量。let color = &#39;red&#39;;  color: v-bind(color);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>进阶API：跟jsx，代码渲染开发有关系的。</span></span>
<span class="line"><span>h()  渲染函数  import { h } from &#39;vue&#39;  h(&#39;div&#39;)</span></span>
<span class="line"><span>mergeProps() 合并规则定义，默认同名是覆盖，可以通过这个函数改</span></span>
<span class="line"><span>cloneVNode() 克隆一个 vnode。 const original = h(&#39;div&#39;) const cloned = cloneVNode(original, { id: &#39;foo&#39; })</span></span>
<span class="line"><span>isVNode()   判断一个值是否为 vnode 类型。</span></span>
<span class="line"><span>resolveComponent()   按名称手动解析已注册的组件。</span></span>
<span class="line"><span>resolveDirective() 按名称手动解析已注册的指令。</span></span>
<span class="line"><span>withDirectives() h函数中，添加自定义指令 </span></span>
<span class="line"><span>withModifiers() h函数汇总，添加v-on修饰</span></span></code></pre></div>`,4),t=[l];function i(c,o,r,u,d,v){return a(),n("div",null,t)}const g=s(e,[["render",i]]);export{f as __pageData,g as default};

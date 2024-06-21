---
outline: deep
---

# Vue3
vue3

## 全部
```
整体：
全局实例api，配置，全局通用api。
组合式api(setup函数)、响应核心(ref、reactive、readonly)、响应工具（to is）、响应进阶(shallow浅，raw)、生命周期钩子，依赖注入
选项式api，跟vue2类似
内置内容：指令、组件(包括特殊组件)、特殊Attributes
单文件文件： 语法（define）、 <script setup>、css功能、 逻辑复用(组合式函数(替代mixin)，自定义指令，插件)
进阶api：渲染h函数。

详细：
全局API
createApp()  创建一个应用实例
app.mount() 将应用实例挂载在一个容器元素中。
app.unmount() 卸载一个已挂载的应用实例
app.component() 注册一个全局组件
app.directive() 注册一个全局指令
app.use()  安装一个插件 (插件里面install)
app.mixin() 全局混入，Vue3不推荐使用，推荐使用组合函数替代
app.provide()  全局注入
app.runWithContent() 使用当前应用作为注入上下文执行回调函数。
app.version  Vue 版本号
全局配置：
app.config.errorHandler 用于为应用内抛出的未捕获错误指定一个全局处理函数。
app.config.globalProperties 添加全局属性

通用：
version 暴露当前所使用的 Vue 版本 import { version } from 'vue'
nextTick() 等待下一次 DOM 更新刷新的工具方法
defineComponent()  定义同步组件
defineAsyncComponent() 定义一个异步组件，它在运行时是懒加载的。
defineCustomElement() 返回一个原生的自定义组件

选项式api跟vue2差不多。 

组合式api：
setup() 通常情况不使用。 1. 非文件组件中使用组合式API。 2. 选项式API的组件集成组合API的代码。

响应式：核心
ref()  响应式，ref都可以解决。可传基础值和对象 使用：const count = ref(0) 代码中使用 count.value  template模版中使用 {{count}}
computed()  使用 const plusOne = computed(() => count.value + 1) ； import {computed} from 'vue'
reacive() 返回一个对象的响应式代理。 使用const obj = reactive({ count }) 直接访问 obj.count 不需要的.value
readonly()  只读。 可接受普通对象或者ref
watchEffect()  watch的立即执行版本，会自动监听函数下面的响应变量执行。 开始立即执行一次。 watchEffect(callback)，可返回取消函数
watchPostEffect()  Vue的Dom刷新之后执行的 watch。 也是立即执行。 
watchSyncEffect() 不常用 Dom更新之前触发的watch
watch()  watch(count, (count, prevCount) => {}) watch监听必须先执行监听内容，watchEffect不需要指定(更好用)。 参数：immediate(立即执行)， deep(深度监听)，flush(dom更新后触发)， onTrack / onTrigger(开发调试用)，once(一次)

响应式：工具
isRef()  检查某个值是否为 ref
unRef()  如果参数是 ref，则返回内部值，否则返回参数本身。 val = isRef(val) ? val.value : val 计算的一个语法糖
toRef() 基于响应式对象上的一个属性，创建一个对应的 ref。相当于别名， toRef与原有的ref 互相影响。
toValue()  toValue和 unRef类似。 
toRefs()  将一个响应式对象转换为一个普通对象，每个子属性都是响应式的。  解构的变量是响应式的  
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // ...基于状态的操作逻辑

  // 在返回时都转为 ref
  return toRefs(state)
}

// 可以解构而不会失去响应性
const { foo, bar } = useFeatureX()

isProxy()  检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。
isReactive() 检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。
isReadonly() 检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。

响应式：进阶 (大部分都不常用)
shallowRef()  ref() 的浅层作用形式。 对象的子对象不会触发响应式
triggerRef() 强制触发依赖于一个浅层 ref 。  通常在对浅引用的内部值进行深度变更后使用
customRef() 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。例子：创造一个防抖ref，只再上一次更新后多久才再更新。
shallowReactive() reactive() 的浅层作用形式。谨慎使用，不常用。
shallowReadonly()  readonly() 的浅层作用形式， 不常用。
toRaw()  根据一个 Vue 创建的代理返回其原始对象。 console.log(toRaw(reactiveFoo) === foo) // true
markRaw() 将一个对象标记为不可被转为代理。返回该对象本身。 不常用
effectScope() 创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。
getCurrentScope() 如果有的话，返回当前活跃的 effect 作用域。 
onScopedDispose() 在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。

生命周期钩子
onBeforeMount() 注册一个钩子，在组件被挂载之前被调用。
onMounted()    注册一个回调函数，在组件挂载完成后执行。
onBeforeUpdate() 注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
onUpdated()    注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
onBeforeUnmount() 注册一个钩子，在组件实例被卸载之前调用。
onUnmounted()  注册一个回调函数，在组件实例被卸载之后调用。
onErrorCatured()  注册一个钩子，在捕获了后代组件传递的错误时调用。
onRenderTracked()  (开发调试)注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。
onRenderTriggered() (开发调试) 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
onActivated()      <KeepAlive> 组件激活时调用。
onDeactivated()    <KeepAlive> 组件失活时调用。
onServerPrefetch()  注册一个异步函数，在组件实例在服务器上被渲染之前调用。
依赖注入
provide()  提供一个值，可以被后代组件注入。 import { ref, provide } from 'vue' //静态provide('path', '/project/') //响应式 const count = ref(0);  provide('count', count)

inject() 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值。 const path = inject('path')
hasInjectionContext() 不常用 如果 inject() 可以在错误的地方 (例如 setup() 之外) 被调用而不触发警告，则返回 true。

内置内容：
指令
v-text  绑定文字 v-text="xx" 等同于 {{xx}}
v-html 更新元素的 innerHTML。 绑定html格式的内容。
v-show  元素可见性， display:none。不显示，dom是通过css隐藏的。
v-if    来条件性地渲染元素或者模板片段。 不显示 dom就没创建
v-else-if 
v-else
v-for   列表渲染
v-on  缩写@  添加事件监听器。  @[event]="doThis" 动态事件
修饰符
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 在捕获模式添加事件监听器。
.self - 只有事件从元素本身发出才触发处理函数。
.{keyAlias} - 只在某些按键下触发处理函数。
.once - 最多触发一次处理函数。
.left - 只在鼠标左键事件触发处理函数。
.right - 只在鼠标右键事件触发处理函数。
.middle - 只在鼠标中键事件触发处理函数。
.passive - 通过 { passive: true } 附加一个 DOM 事件。

v-bind 缩写 :  动态的绑定一个或多个 attribute，也可以是组件的 prop。  :[key] 动态 attribute 名的缩写
修饰符
.camel - 将短横线命名的 attribute 转变为驼峰式命名。
.prop - 强制绑定为 DOM property。
.attr - 强制绑定为 DOM attribute

v-model 在表单输入元素或组件上创建双向绑定。
修饰符
.lazy - 监听 change 事件而不是 input
.number - 将输入的合法字符串转为数字
.trim - 移除输入内容两端空格

v-slot  用于声明具名插槽或是期望接收 props 的作用域插槽。 使用：
<template v-slot:header>
Header content
</template>

v-pre 跳过该元素及其所有子元素的编译。
v-once 仅渲染元素和组件一次，并跳过之后的更新。
v-memo <div v-memo="[valueA, valueB]"> 如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
只有当该项的被选中状态改变时才需要更新，这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。
注意：当搭配 v-for 使用 v-memo，确保两者都绑定在同一个元素上

v-cloak 用于隐藏尚未完成编译的 DOM 模板。
//css
[v-cloak] {
  display: none;
}
<div v-cloak>
  {{ message }}
</div>

组件
<Transition>  为单个元素或组件提供动画过渡效果。
<TransitionGroup> 为列表中的多个元素或组件提供过渡效果。
<KeepAlive> 缓存包裹在其中的动态切换组件。
<Teleport>  将其插槽内容渲染到 DOM 中的另一个位置。 比如再模态弹出指定再body上弹出。
<Suspense>。用于协调对组件树中嵌套的异步依赖的处理。 ？？还在实验阶段
特殊元素 
<component>  <component :is="view" />
<slot>   表示模板中的插槽内容出口。
<template>  当我们想要使用内置指令而不在 DOM 中渲染元素时，<template> 标签可以作为占位符使用。
特殊attributes
key  作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。 有时候加key强制更新某个组件。
ref 用于注册模板引用。  <p ref="p">hello</p>  const p = ref() //p就是这个dom节点
is 用于绑定动态组件。

单文件组件
语法定义 
<script setup lang="ts"></script> <template></template> <style lang="scss" scoped>

<script setup> 简介：
响应：
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
组件使用： 直接import之后就可以使用了

加载文件夹组件并使用：
import * as Form from './form-components'
<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>


自定义指令，附和命名规范可直接使用：
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>

defineProps： 定义props ， withDefaults 定义props
defineEmits： 定义emit通知
defineModel()  定义model信息， prop 名称将默认为 "modelValue"。可以自定义/
defineExpose() 暴露一些方法，默认setup不会暴露组件的方法或变量， 可以通过该属性添加
defineOptions()  声明组件选项的不常用。
defineSlots()  这个宏可以用于为 IDE 提供插槽名称和 props 类型检查的类型提示。
useSlots()、useAttrs()使用插槽和 attr 用的很少 import { useSlots, useAttrs } from 'vue' 
可以在setup中直接使用异步 await
<script setup lang="ts" generic="T"> 支持泛型

CSS功能
scoped 组件作用域 <style scoped>
:deep()  深度选择器，组件作用域css想影响其他的组件 <style scoped>  .a :deep(.b) {}
:slotted(div) 影响插槽的样式
:global(.red) 把一个内部选择器，变为全局
一个组件可以加多个 style   <style>  <style scoped>
<style module>  标签会被编译为 CSS Modules 。 $style暴露给tmplate和script使用
<style module="classes"> 可以指定名字   <p :class="classes.red">red</p> 默认是$style
useCssModule 在组合api中使用，css的声明。useCssModule()/ useCssModule('classes') 
v-bind()  style中使用js的变量。let color = 'red';  color: v-bind(color);


进阶API：跟jsx，代码渲染开发有关系的。
h()  渲染函数  import { h } from 'vue'  h('div')
mergeProps() 合并规则定义，默认同名是覆盖，可以通过这个函数改
cloneVNode() 克隆一个 vnode。 const original = h('div') const cloned = cloneVNode(original, { id: 'foo' })
isVNode()   判断一个值是否为 vnode 类型。
resolveComponent()   按名称手动解析已注册的组件。
resolveDirective() 按名称手动解析已注册的指令。
withDirectives() h函数中，添加自定义指令 
withModifiers() h函数汇总，添加v-on修饰

```



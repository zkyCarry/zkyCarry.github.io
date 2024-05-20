import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.BLNEObz3.js";const _=JSON.parse('{"title":"pinia","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/pinia.md","filePath":"基础/pinia.md"}'),e={name:"基础/pinia.md"},t=p(`<h1 id="pinia" tabindex="-1">pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;pinia&quot;">​</a></h1><p>pinia</p><h2 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-label="Permalink to &quot;全部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>主要： state 、getters、actions。 没有vuex 的 mutation。</span></span>
<span class="line"><span>定义 store：  // @/stores/counter 下面是选项式定义，还可以用组合式定义，用选项式定义更好。</span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span>export const useTodos = defineStore(&#39;todos&#39;, {</span></span>
<span class="line"><span>  state: () =&gt; ({</span></span>
<span class="line"><span>  	todos:[],</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  getters: {</span></span>
<span class="line"><span>  	finishedTodos(state) {</span></span>
<span class="line"><span>  		return state.todos.filter((todo) =&gt; todo.isFinished)</span></span>
<span class="line"><span>  	}</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>  	addTodo(text) {</span></span>
<span class="line"><span>  		this.todos.push({});</span></span>
<span class="line"><span>  	}</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>组合式定义：</span></span>
<span class="line"><span>export const useCounterStore = defineStore(&#39;counter&#39;, () =&gt; {</span></span>
<span class="line"><span>  const count = ref(0)  //ref() 就是 state 属性</span></span>
<span class="line"><span>  const doubleCount = computed(() =&gt; count.value * 2)  // computed() 就是 getters</span></span>
<span class="line"><span>  function increment() { //function() 就是 actions</span></span>
<span class="line"><span>    count.value++</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return { count, doubleCount, increment }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>组合式api使用:</span></span>
<span class="line"><span>import { useCounterStore } from &#39;@/stores/counter&#39;</span></span>
<span class="line"><span>const counter = useCounterStore()</span></span>
<span class="line"><span>// 直接更改数据的方法</span></span>
<span class="line"><span>counter.todos.push() //或者 counter.$patch({ todos: counter.todos.push()})  //尽量使用 $patch 更改数据</span></span>
<span class="line"><span>// 通过actions 更改数据，支持异步/</span></span>
<span class="line"><span>counter.addTodo()</span></span>
<span class="line"><span>// template 中使用 </span></span>
<span class="line"><span>{{ counter.count }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选项式api使用：兼容vuex的语法</span></span>
<span class="line"><span>...mapStores(useCounterStore, useUserStore)</span></span>
<span class="line"><span>...mapState(useCounterStore, [&#39;count&#39;, &#39;double&#39;]),</span></span>
<span class="line"><span>...mapActions(useCounterStore, [&#39;increment&#39;]),</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用：</span></span>
<span class="line"><span>State：</span></span>
<span class="line"><span>注意： 直接解构。 const { name, doubleCount } = store  破坏响应式。 </span></span>
<span class="line"><span>提取响应式变量：</span></span>
<span class="line"><span>1. store.doubleCount是响应式的。 </span></span>
<span class="line"><span>2. import { storeToRefs } from &#39;pinia&#39;</span></span>
<span class="line"><span>const { name, doubleCount } = storeToRefs(store) 是响应式的</span></span>
<span class="line"><span>重制为初始值：  store.$reset() 这个要自己写？ $reset</span></span>
<span class="line"><span>store.$patch({ 可以一下更改多个属性 </span></span>
<span class="line"><span>订阅 state。 cartStore.$subscribe  监听store变化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Getter， 有缓存的功能</span></span>
<span class="line"><span>不能传递参数，可以返回函数，这样就可以传参数了，但是就没有默认缓存的功能(可自己实现)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Action 可以是同步也可以是异步</span></span>
<span class="line"><span>const unsubscribe = someStore.$onAction(  监听 action 和它们的结果。 打日志用。after 表示在 promise 解决之后</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高级可定义插件，为store添加一下统一的属性和事件</span></span></code></pre></div>`,4),l=[t];function o(i,c,r,u,d,m){return a(),n("div",null,l)}const f=s(e,[["render",o]]);export{_ as __pageData,f as default};

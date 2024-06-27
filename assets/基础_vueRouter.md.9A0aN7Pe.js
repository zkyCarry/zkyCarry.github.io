import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.C0cjzZC2.js";const v=JSON.parse('{"title":"vue Router","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/vueRouter.md","filePath":"基础/vueRouter.md"}'),e={name:"基础/vueRouter.md"},t=p(`<h1 id="vue-router" tabindex="-1">vue Router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue Router&quot;">​</a></h1><p>vue Router</p><h2 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-label="Permalink to &quot;全部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue router</span></span>
<span class="line"><span>1、导航被触发</span></span>
<span class="line"><span>	1. 在失活组件中调用 beforeRouteLeave</span></span>
<span class="line"><span>	2. 调用全局守卫 beforeEach</span></span>
<span class="line"><span>	3. 在重用的组件调用 beforeRouteUpdate</span></span>
<span class="line"><span>	4. 调用路由配置 beforeEnter。(新的)</span></span>
<span class="line"><span>	5. 解析异步路由组件</span></span>
<span class="line"><span>	6. 在激活的组件里面调用 beforeRouteEnter</span></span>
<span class="line"><span>	7. 调用全局的 beforeResolve </span></span>
<span class="line"><span>	8. 导航被确认。</span></span>
<span class="line"><span>	9. 调用全局的 afterEach 钩子。 after没有next</span></span>
<span class="line"><span>	10. 触发DOM </span></span>
<span class="line"><span></span></span>
<span class="line"><span>	beforeEach((to, from, next)=&gt;{</span></span>
<span class="line"><span>		next(); //继续执行下个生命周期</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	全局钩子：beforeEach、beforeResolve、afterEach</span></span>
<span class="line"><span>	路由配置的钩子： beforeEnter。</span></span>
<span class="line"><span>	组件内的钩子：beforeRouteLeave、beforeRouteUpdate、beforeRouteEnter。 组件内的路由钩子，必须注册在路由配置中。 间接的引用，不能响应，必须直接注册。 </span></span>
<span class="line"><span>	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、&lt;router-link to=‘/xxx’ &gt; 配置跳转。 </span></span>
<span class="line"><span>	1. &lt;router-link :to=&quot;{ name: &#39;user&#39;, params: { username: &#39;erina&#39; }}&quot;&gt; &lt;/router-link&gt;</span></span>
<span class="line"><span>	2. 支持扩展</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、路由模式：</span></span>
<span class="line"><span>	1. hash模式。url中带# 路由变化不会发请求</span></span>
<span class="line"><span>	2. history模式？ 后端路由，类似像服务端发送一个请求。 没有#，路由变化发请求</span></span>
<span class="line"><span>	3. Memory 模式不会假定自己处于浏览器环境。适合服务端，url变化没有浏览器行为</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、api编程式导航(会改变路由的跳转)：</span></span>
<span class="line"><span>	this.$router.push  .repalce </span></span>
<span class="line"><span>	1. router.push({ name: &#39;user&#39;,path: &#39;/user/\${username}&#39;, params: { username: &#39;eduardo&#39; }, query: { plan: &#39;private&#39; }, hash: &#39;#team&#39;, replace: true(相当于replace) })</span></span>
<span class="line"><span>	hash显示  /users/eduardo#team</span></span>
<span class="line"><span>	2. router.replace({ path: &#39;/home&#39; }) 参数同push类似</span></span>
<span class="line"><span>	3. router.go(1)  前进一条记录。 router.go(-1) //后退一条记录  router.go(-5) 后退5条</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5、删除以及添加路由列表：</span></span>
<span class="line"><span>	router.addRoute({ name: &#39;admin&#39;, path: &#39;/admin&#39;, component: Admin })</span></span>
<span class="line"><span>	router.addRoute(&#39;admin&#39;, { path: &#39;settings&#39;, component: AdminSettings }) //子路由</span></span>
<span class="line"><span>	router.removeRoute()</span></span>
<span class="line"><span>	router.hasRoute()</span></span>
<span class="line"><span>	router.getRoutes()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6、RouterView插槽 支持传参 ，还可以和 transition  keep-alive 一起结合起来</span></span>
<span class="line"><span>	&lt;RouterView v-slot=&quot;{ Component }&quot;&gt;</span></span>
<span class="line"><span>	  &lt;component</span></span>
<span class="line"><span>	    :is=&quot;Component&quot;</span></span>
<span class="line"><span>	    view-prop=&quot;value&quot;</span></span>
<span class="line"><span>	   /&gt;</span></span>
<span class="line"><span>	&lt;/RouterView&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7、滚动行为：scrollBehavior，也支持延迟</span></span>
<span class="line"><span>	const router = createRouter({</span></span>
<span class="line"><span>	  scrollBehavior(to, from, savedPosition) {</span></span>
<span class="line"><span>	    // 始终滚动到顶部</span></span>
<span class="line"><span>	    return { top: 0 }</span></span>
<span class="line"><span>	  },</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8、路由配置：(里面可以使用 route 变量)</span></span>
<span class="line"><span>   每个页面可以再配置 children。 如果想在这个页面使用 &lt;router-view&gt; 来显示route内容。 必须把这个页面声明 children 下。</span></span>
<span class="line"><span>   如果在某个页面的children。那个页面不配置 router-view 。页面还不显示了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	const routes = [</span></span>
<span class="line"><span>	 {</span></span>
<span class="line"><span>	    path: &#39;/users&#39;, //路径</span></span>
<span class="line"><span>	    name: &#39;users&#39;,  //名字</span></span>
<span class="line"><span>	    component: UsersLayout, //组件可以是异步， () =&gt; import(&#39;./views/UserDetails.vue&#39;), //这里还支持多个组件 webpack组件模块打包</span></span>
<span class="line"><span>	    redirect: { name: &#39;homepage&#39; } }， //重定向  还支持to写法传参数 </span></span>
<span class="line"><span>	    meta: { requiresAuth: true }, //可以配置路由的自定义信息，可以从 路由守卫中拿到，方便做判断</span></span>
<span class="line"><span>	    props: true, //props 设置为 true 时，route.params 将被设置为组件的 props。 不需要$route.params.id取数据</span></span>
<span class="line"><span>	    query:{q:&#39;url参数&#39;}</span></span>
<span class="line"><span>	    alias: [&#39;/people&#39;, &#39;list&#39;], //别名</span></span>
<span class="line"><span>	    children: [ //子路由</span></span>
<span class="line"><span>	      </span></span>
<span class="line"><span>	    ],</span></span>
<span class="line"><span>	  },</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	path 路径：</span></span>
<span class="line"><span>	1. path: &#39;/users&#39;</span></span>
<span class="line"><span>	2. 支持匹配语法 path: &#39;/users/:id&#39;、 /users/:username/posts/:postId、 ($route.params { username: &#39;eduardo&#39;, postId: &#39;123&#39; })</span></span>
<span class="line"><span>	3. { path: &#39;/users/:userId(\\\\d+)?&#39; },  // 匹配 /users 和 /users/42</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	component 组件:</span></span>
<span class="line"><span>	1. 同步组件</span></span>
<span class="line"><span>	2. 异步组件</span></span>
<span class="line"><span>	3. 打包可以配置按组件模块划分打包 const UserDetails = () =&gt; import(/* webpackChunkName: &quot;group-user&quot; */ &#39;./UserDetails.vue&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	重定向：</span></span>
<span class="line"><span>	1. redirect: { name: &#39;homepage&#39; } }，</span></span>
<span class="line"><span>	2. redirect: to =&gt; {</span></span>
<span class="line"><span>	      // 方法接收目标路由作为参数</span></span>
<span class="line"><span>	      // return 重定向的字符串路径/路径对象</span></span>
<span class="line"><span>	      return { path: &#39;/search&#39;, query: { q: to.params.searchText } }</span></span>
<span class="line"><span>	    },</span></span>
<span class="line"><span>	props：</span></span>
<span class="line"><span>	1. props: true</span></span>
<span class="line"><span>	2. props: { default: true, sidebar: false } //针对多组件情况 components: { default: User, sidebar: Sidebar },</span></span>
<span class="line"><span>	3. props: route =&gt; ({ query: route.query.q }) //函数方式支持改参数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	404页面配置：</span></span>
<span class="line"><span>	{ path: &#39;*&#39;, redirect: &#39;/404&#39;, hidden: true, visibled: true },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9、组合式api：</span></span>
<span class="line"><span>import { useRouter, useRoute } from &#39;vue-router&#39;</span></span>
<span class="line"><span>import { onBeforeRouteLeave, onBeforeRouteUpdate } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>API参考基本都是TS的类型声明</span></span></code></pre></div>`,4),l=[t];function r(i,o,c,u,d,h){return a(),n("div",null,l)}const f=s(e,[["render",r]]);export{v as __pageData,f as default};

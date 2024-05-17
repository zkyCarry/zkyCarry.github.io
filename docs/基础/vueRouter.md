---
outline: deep
---

# vue Router
vue Router

## 全部
```
vue router
1、导航被触发
	1. 在失活组件中调用 beforeRouteLeave
	2. 调用全局守卫 beforeEach
	3. 在重用的组件调用 beforeRouteUpdate
	4. 调用路由配置 beforeEnter。(新的)
	5. 解析异步路由组件
	6. 在激活的组件里面调用 beforeRouteEnter
	7. 调用全局的 beforeResolve 
	8. 导航被确认。
	9. 调用全局的 afterEach 钩子。 after没有next
	10. 触发DOM 

	beforeEach((to, from, next)=>{
		next(); //继续执行下个生命周期
	})

	全局钩子：beforeEach、beforeResolve、afterEach
	路由配置的钩子： beforeEnter。
	组件内的钩子：beforeRouteLeave、beforeRouteUpdate、beforeRouteEnter。 组件内的路由钩子，必须注册在路由配置中。 间接的引用，不能响应，必须直接注册。 
	

2、<router-link to=‘/xxx’ > 配置跳转。 
	1. <router-link :to="{ name: 'user', params: { username: 'erina' }}"> </router-link>
	2. 支持扩展

3、路由模式：
	1. hash模式。url中带# 路由变化不会发请求
	2. history模式？ 后端路由，类似像服务端发送一个请求。 没有#，路由变化发请求
	3. Memory 模式不会假定自己处于浏览器环境。适合服务端，url变化没有浏览器行为

4、api编程式导航(会改变路由的跳转)：
	this.$router.push  .repalce 
	1. router.push({ name: 'user',path: '/user/${username}', params: { username: 'eduardo' }, query: { plan: 'private' }, hash: '#team', replace: true(相当于replace) })
	hash显示  /users/eduardo#team
	2. router.replace({ path: '/home' }) 参数同push类似
	3. router.go(1)  前进一条记录。 router.go(-1) //后退一条记录  router.go(-5) 后退5条

5、删除以及添加路由列表：
	router.addRoute({ name: 'admin', path: '/admin', component: Admin })
	router.addRoute('admin', { path: 'settings', component: AdminSettings }) //子路由
	router.removeRoute()
	router.hasRoute()
	router.getRoutes()

6、RouterView插槽 支持传参 ，还可以和 transition  keep-alive 一起结合起来
	<RouterView v-slot="{ Component }">
	  <component
	    :is="Component"
	    view-prop="value"
	   />
	</RouterView>

7、滚动行为：scrollBehavior，也支持延迟
	const router = createRouter({
	  scrollBehavior(to, from, savedPosition) {
	    // 始终滚动到顶部
	    return { top: 0 }
	  },
	})

8、路由配置：(里面可以使用 route 变量)
   每个页面可以再配置 children。 如果想在这个页面使用 <router-view> 来显示route内容。 必须把这个页面声明 children 下。
   如果在某个页面的children。那个页面不配置 router-view 。页面还不显示了。

	const routes = [
	 {
	    path: '/users', //路径
	    name: 'users',  //名字
	    component: UsersLayout, //组件可以是异步， () => import('./views/UserDetails.vue'), //这里还支持多个组件 webpack组件模块打包
	    redirect: { name: 'homepage' } }， //重定向  还支持to写法传参数 
	    meta: { requiresAuth: true }, //可以配置路由的自定义信息，可以从 路由守卫中拿到，方便做判断
	    props: true, //props 设置为 true 时，route.params 将被设置为组件的 props。 不需要$route.params.id取数据
	    query:{q:'url参数'}
	    alias: ['/people', 'list'], //别名
	    children: [ //子路由
	      
	    ],
	  },
	]

	path 路径：
	1. path: '/users'
	2. 支持匹配语法 path: '/users/:id'、 /users/:username/posts/:postId、 ($route.params { username: 'eduardo', postId: '123' })
	3. { path: '/users/:userId(\\d+)?' },  // 匹配 /users 和 /users/42

	component 组件:
	1. 同步组件
	2. 异步组件
	3. 打包可以配置按组件模块划分打包 const UserDetails = () => import(/* webpackChunkName: "group-user" */ './UserDetails.vue')

	重定向：
	1. redirect: { name: 'homepage' } }，
	2. redirect: to => {
	      // 方法接收目标路由作为参数
	      // return 重定向的字符串路径/路径对象
	      return { path: '/search', query: { q: to.params.searchText } }
	    },
	props：
	1. props: true
	2. props: { default: true, sidebar: false } //针对多组件情况 components: { default: User, sidebar: Sidebar },
	3. props: route => ({ query: route.query.q }) //函数方式支持改参数。


	404页面配置：
	{ path: '*', redirect: '/404', hidden: true, visibled: true },

9、组合式api：
import { useRouter, useRoute } from 'vue-router'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

API参考基本都是TS的类型声明
```



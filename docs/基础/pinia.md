---
outline: deep
---

# pinia
pinia

## 全部
```
主要： state 、getters、actions。 没有vuex 的 mutation。
定义 store：  // @/stores/counter 下面是选项式定义，还可以用组合式定义，用选项式定义更好。
import { defineStore } from 'pinia'
export const useTodos = defineStore('todos', {
  state: () => ({
  	todos:[],
  }),
  getters: {
  	finishedTodos(state) {
  		return state.todos.filter((todo) => todo.isFinished)
  	}
  },
  actions: {
  	addTodo(text) {
  		this.todos.push({});
  	}
  }
})
组合式定义：
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)  //ref() 就是 state 属性
  const doubleCount = computed(() => count.value * 2)  // computed() 就是 getters
  function increment() { //function() 就是 actions
    count.value++
  }

  return { count, doubleCount, increment }
})


组合式api使用:
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
// 直接更改数据的方法
counter.todos.push() //或者 counter.$patch({ todos: counter.todos.push()})  //尽量使用 $patch 更改数据
// 通过actions 更改数据，支持异步/
counter.addTodo()
// template 中使用 
{{ counter.count }}

选项式api使用：兼容vuex的语法
...mapStores(useCounterStore, useUserStore)
...mapState(useCounterStore, ['count', 'double']),
...mapActions(useCounterStore, ['increment']),



使用：
State：
注意： 直接解构。 const { name, doubleCount } = store  破坏响应式。 
提取响应式变量：
1. store.doubleCount是响应式的。 
2. import { storeToRefs } from 'pinia'
const { name, doubleCount } = storeToRefs(store) 是响应式的
重制为初始值：  store.$reset() 这个要自己写？ $reset
store.$patch({ 可以一下更改多个属性 
订阅 state。 cartStore.$subscribe  监听store变化

Getter， 有缓存的功能
不能传递参数，可以返回函数，这样就可以传参数了，但是就没有默认缓存的功能(可自己实现)

Action 可以是同步也可以是异步
const unsubscribe = someStore.$onAction(  监听 action 和它们的结果。 打日志用。after 表示在 promise 解决之后

高级可定义插件，为store添加一下统一的属性和事件


```



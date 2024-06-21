---
outline: deep
---

# vuex
vuex

## 全部
```
vuex ：
store。  
state 声明对象，  getters获取。 mutations commit 更新。 actions dispatch 异步更新。   Module 模块

还可以嵌套多个层级。 

其他js使用。 
import store from ’../store‘
store.commit（’xx‘，data）

vue中使用》 import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'

import { mapState } from 'vuex'
computed: {
...mapState({
    // ...
  })
}

import { mapGetters } from 'vuex'
computed: {
	// 使用对象展开运算符将 getter 混入 computed 对象中
	...mapGetters([
	  'doneTodosCount',
	  'anotherGetter',
	  // ...
	])
}

import { mapMutations } from 'vuex'
methods: {
...mapMutations([
  'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

  // `mapMutations` 也支持载荷：
  'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
]),


import { mapActions } from 'vuex'
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
     ]),
  }
```



---
outline: deep
---

# vue3使用问题记录


## 代码片段
+ 全局变量使用
```
声明：app.config.globalProperties.$confirm = {alert: ()=>{}}

在组合式api中使用：
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
instance.proxy.$confirm.alert()
```

+ provide/inject 注入
```
全局注入声明：
let func = () => {}
app.provide('globalConfirm', func);

局部注入声明:
import { provide } from 'vue'
let xxx = "xx"
provide('xxx', xxx);

使用：
import { inject } from 'vue'
const globalConfirm = inject('globalConfirm');
globalConfirm();

```



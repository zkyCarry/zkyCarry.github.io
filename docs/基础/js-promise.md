---
outline: deep
---

# Promise 介绍

## 介绍
Promise 是js内置对象，用来处理异步操作，解决回调地狱问题。
```
//声明一个 Promise 对象
let promise = new Promise((resolve,reject)=>{
  requset(url, (res)=>{
    if(res.code === 200){
      // 成功调用 resolve
      resolve(res.data)
    }else{
      // 失败调用 reject
      reject(res)
    }
  })
});

// promise实例， 通过then取成功 resolve 的值 ，catch取失败 reject 的值
promise.then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})
```
## Promise 状态
promise对象有三种状态：pending（初识状态/进行中）、resolved或fulfilled（成功）、rejected（失败）
- pending：初始状态，既不是成功，也不是失败状态。
- fulfilled：操作成功完成。
- rejected：操作失败。

```
// 下面这种就是初始状态  pending
let promise = new Promise((resolve,reject)=>{})

// 下面这种就是成功状态 fulfilled
let promise = new Promise((resolve,reject)=>{
  resolve(data)
})
// 下面这种就是失败状态 rejected
let promise = new Promise((resolve,reject)=>{
  reject(err)
})
```

## Promise 实例方法
promise 实例对象提供的方法有：
- then()：用于指定当Promise对象状态变为fulfilled时的回调函数。
- catch()：用于指定当Promise对象状态变为rejected时的回调函数。
- finally()：用于指定不管Promise对象状态变为fulfilled还是rejected，都会执行的回调函数。

## Promise 静态方法
### 1. `Promise.resolve(value)`
该方法返回一个以给定值解析后的 Promise 对象。如果该值是一个 Promise 对象，则直接返回该 Promise 对象。

```javascript
Promise.resolve(42).then(value => {
    console.log(value); // 42
});
```

### 2. `Promise.reject(reason)`
该方法返回一个以给定理由拒绝的 Promise 对象。

```javascript
Promise.reject(new Error('Something went wrong')).catch(error => {
    console.error(error); // Error: Something went wrong
});
```

### 3. `Promise.all(iterable)`
该方法接收一个 Promise 对象的可迭代对象（例如数组），并返回一个新的 Promise 实例。该实例在所有给定的 Promise 实例都已解决或有一个拒绝时，才会解决或拒绝。

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```

### 4. `Promise.allSettled(iterable)`
该方法接收一个 Promise 对象的可迭代对象，并返回一个新的 Promise 实例。该实例在所有给定的 Promise 实例都已解决或拒绝后，解决，并带有一个对象数组，每个对象表示对应的 Promise 的结果（包括状态和值/原因）。

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promise3 = 42;

Promise.allSettled([promise1, promise2, promise3]).then(results => {
  results.forEach(result => console.log(result.status));
  // "fulfilled"
  // "rejected"
  // "fulfilled"
});
```

### 5. `Promise.race(iterable)`
该方法接收一个 Promise 对象的可迭代对象，并返回一个新的 Promise 实例。该实例在给定的 Promise 实例中任何一个解决或拒绝时，解决或拒绝。

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // "two"
});
```

### 6. `Promise.any(iterable)`
该方法接收一个 Promise 对象的可迭代对象，并返回一个新的 Promise 实例。该实例在给定的 Promise 实例中任何一个解决时，解决。如果所有给定的 Promise 实例都被拒绝，则返回一个拒绝的 Promise，并带有一个 AggregateError 类型的错误。

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.any([promise1, promise2]).then(value => {
  console.log(value); // "two"
}).catch(error => {
  console.error(error);
});
```

## await / async 
await / async ES7的新规范，异步处理同步化。  

## 参考：
https://www.bilibili.com/read/cv18799030/


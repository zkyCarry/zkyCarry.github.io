---
outline: deep
---
# react

## 实际使用
```
1. react
{xx} 使用变量

2. import React, { useState } from "react";
useState 使用必须放在函数内部，响应式
const [initPlayer, setInitPlayer] = useState("x");
const [squares, setSquares] = useState(new Array(num).fill(""));

3. 事件传参数，使用箭头函数
<button className="square" onClick={() => clickButton(8)}>
          {squares[8]}
        </button>
4. 数组改值需要浅拷贝 
const newSquares = [...squares];
 newSquares[index] = currentPlayer;
    setSquares(newSquares);
5. jsx内部不能写js代码，只能放在外面 {xx} 再用{}引用
return (
    <div className="game">
      <div>
        <h1>Next Player: {currentPlayer}</h1>
        {renderBoard()}
      </div>
      <div className="time-info">
        <button onClick={() => jumpTo(-1)}>Game Start</button>
        {renderHistory()}
      </div>
    </div>
  );
  

```
## 编写例子：
https://codesandbox.io/s/react-dev-forked-9wddnp

## 《React进阶之路》 书摘录
```
1. React官方提供的脚手架工程Create React App（https://github.com/facebookincubator/create-react-app）
2. JSX是一种用于描述UI的JavaScript扩展语法，React认为，一个组件应该是具备UI描述和UI数据的完整体，不应该将它们分开处理，于是发明了JSX，作为UI描述和UI数据之间的桥梁
3. jsx dom的原生标签需要小写 react组件首字母必须大写
在JSX中使用JavaScript表达式需要将表达式用大括号“{}”包起来
4. JSX中只能使用JavaScript表达式，而不能使用多行JavaScript语句。JSX中可以使用三目运算符或逻辑与（&&）运算符代替if语句的作用
5. class是JavaScript的关键字，所以改成className；React对DOM标签支持的事件重新做了封装，封装时采用了更常用的驼峰命名法命名事件。例如onclick要写成onClick，class要写成className
6.JSX语法只是React.createElement(component, props, ...children)的语法糖
7. 组件将应用的UI拆分成独立的、可复用的模块
8.原文：定义一个组件有两种方式，使用ES 6 class（类组件）和使用函数（函数组件）(函数可能更通用)
9.函数式组件注意：
（1）在组件的构造方法constructor内，首先要调用super(props)，这一步实际上是调用了React.Component这个class的constructor方法，用来完成React组件的初始化工作。
（2）在constructor中，通过this.state定义了组件的状态。
（3）在render方法中，我们为标签定义了处理点击事件的响应函数，在响应函数内部会调用this.setState更新组件的点赞数。
10.React组件可以看作一个函数，函数的输入是props和state，函数的输出是组件的UI。
11. React组件正是由props和state两种类型的数据驱动渲染出组件UI。props是组件对外的接口，组件通过props接收外部传入的数据（包括方法）；state是组件对内的接口，组件内部状态的变化通过state来反映。另外，props是只读的，你不能在组件内部修改props；state是可变的，组件状态的变化通过修改state来实现
12. state用来反映组件内部状态的变化，如果一个组件的内部状态是不变的，当然就用不到state，这样的组件称之为无状态组件
15. 函数组件的写法比类组件的写法要简洁很多，在使用无状态组件时，应该尽量将其定义成函数组件。
16. React应用组件设计的一般思路是，通过定义少数的有状态组件管理整个应用的状态变化，并且将状态通过props传递给其余的无状态组件，由无状态组件完成页面绝大部分UI的渲染工作
16.有状态组件主要关注处理状态变化的业务逻辑，无状态组件主要关注组件UI的渲染。
17. 父组件数据驱动子组件

原文：我们对这两个组件进行重新设计，将PostList设计为有状态组件，负责帖子列表数据的获取以及点赞行为的处理，将PostItem设计为无状态组件，只负责每一个帖子的展示。
18.React提供了PropTypes这个对象，用于校验组件属性的类型。PropTypes包含组件属性所有可能的类型，我们通过定义一个对象（对象的key是组件的属性名，value是对应属性的类型）实现组件属性类型的校验。 必须传入isRequired。
19 PostItem的propTypes定义如下： 
```
 <img src="/react1.png" style="max-width: 50%" />

```
20.使用CSS样式表经常遇到的一个问题是class名称冲突。业内解决这个问题的一个常用方案是使用CSS Modules，CSS Modules会对样式文件中的class名称进行重命名从而保证其唯一性，
21. DOM类型节点的style属性引用相应样式对象依,然使用Welcome组件举例： 
```
 <img src="/react2.png" style="max-width: 50%" />

```

style使用了两个大括号，这可能会让你感到迷惑。其实，第一个大括号表示style的值是一个JavaScript表达式，第二个大括号表示这个JavaScript表达式是一个对象。
内联样式也要使用驼峰
22. React 组件的生命周期可以被分为三个阶段：挂载阶段、更新阶段、卸载阶段。(只有类组件才具有生命周期方法，函数组件是没有生命周期方法的)
挂载阶段
◆ 依次调用的生命周期方法有：
（1）constructor 类构造函数 接受一个props函数 首先调用super(props)才能保证props被传入组件中。constructor通常用于初始化组件的state以及绑定事件处理方法等工作。
（2）componentWillMount 这个方法在组件被挂载到DOM前调用，且只会被调用一次。很少用 该方法中执行的工作都可以提前到constructor中
（3）render。(唯一必要的方法)render并不负责组件的实际渲染工作，它只是返回一个UI的描述，真正的渲染出页面DOM的工作由React自身负责
（4）componentDidMount 在组件被挂载到DOM后调用，且只会被调用一次。可以在这里发送请求

更新阶段
◆ 组件更新阶段，依次调用的生命周期方法有：
（1）componentWillReceiveProps 只在props引起的组件更新过程中，才会被调用
（2）shouldComponentUpdate 这个方法的默认返回值是true，如果返回false，组件此次的更新将会停止 
（3）componentWillUpdate 这个方法在组件render调用前执行，很少用
（4）render
（5）componentDidUpdate 页面更新完

卸载阶段：
componentWillUnmount 比如清除组件中使用的定时器，清除componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏

23. 渲染优化： 但并不推荐使用索引作为key，因为一旦列表中的数据发生重排，数据的索引也会发生变化，不利于React的渲染优化。
React使用key属性来标记列表中的每个元素，尽量不使用index索引做key。

24. 事件绑定 事件绑定是 驼峰 onClick={func} onChange={()=>func(item)} , 显式调用 preventDefault 阻止默认事件。
25. 没有v-model，可交互的组件改值，通过表单元素的onChange事件监听值的变化，并将变化同步到React组件的state中。
26. 错误捕捉：componentDidCatch
27. 内置组件：Portals(类似vue的 teleport)
28. 组件state  变量是不是应该作为state可以通过下面的4条依据
（1）这个变量是否通过props从父组件中获取？如果是，那么它不是一个状态。
（2）这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。
（3）这个变量是否可以通过其他状态（state）或者属性（props）计算得到？如果是，那么它不是一个状态。
（4）这个变量是否在组件的render方法中使用？如果不是，那么它不是一个状态。这种情况下，这个变量更适合定义为组件的一个普通属性。

修改state时,三种陷阱：
1. 不能直接修改state，使用setState()修改才会触发更新。
2.state的更新是异步的，更改完并不会立即刷新。react会将修改放到一个队列中，一起执行，比如每秒 30/60帧更新一次。 props也是这样的。
3. 状态的类型是数组，需要变更数组的地址，页面才会刷新。不要使用push、pop、shift、unshift、splice这样并不会返回一个新数组，而concat、slice、filter会返回一个新的数组。 或者使用 (... 解构), 每次都要拷贝，感觉效率有点低。
4. 对象更改也需要变对象地址 Object.assgin
5. Immutable的JS库，封装的更改对象的方法，看情况，也不是太必要。

29. 组件与服务端通信，写在componentDidMount，componentWillMount中进行服务器通信也是比较常见的一种方式，时间查微乎其微。
依赖props，可以在componentWillReceiveProps 更新，需要先检查值是否真的改变。

30.组件通信：
1. 父子组件通信：通过props传递的数据和回调方法， 子调用props的回调函数更新。
2. 兄弟组件不能直接更新，可通过父级代发。 
3. React提供了一个context上下文，可以调用父级的状态和方法
4. 使用eventbus库， 通过引入EventEmitter或Postal.js等消息队列库
5. store 数据

31. 特殊的ref 获取element节点的.
32. 虚拟DOM和性能优化 （虚拟DOM并不是什么神奇的东西，它只是用来描述真实DOM的JavaScript对象而已）
◆ 软件开发中遇到的所有问题都可以通过增加一层抽象而得以解决
◆ 虚拟DOM使用普通的JavaScript对象来描述DOM元素
◆ 可以用这样的一个JavaScript对象来表述：

React会通过比较两次虚拟DOM结构的变化找出差异部分，更新到真实DOM上，从而减少最终要在真实DOM上执行的操作，提高程序执行效率

React实现了在O(N)时间复杂度内完成两棵虚拟DOM树的比较。这两个假设是：
（1）如果两个元素的类型不同，那么它们将生成两棵不同的树。
（2）为列表中的元素设置key属性，用key标识对应的元素在多次render过程中是否发生变化。

1．当根节点是不同类型时,不会再继续比较其他属性和子节点，而是把整棵树拆掉重建（包括虚拟DOM树和真实DOM树）。每一个子节点相对于其层级以下的节点来说又是一个根节点
2. 如果两个根节点是相同类型的组件，对应的组件实例不会被销毁，只是会执行更新操作，同步变化的属性到虚拟DOM树上，这一过程组件实例的componentWillReceiveProps()和componentWillUpdate()会被调用。
3. 兄弟节点，顺序变化，为了解决这种低效的更新方式，React提供了一个key属性。在2.4节已经介绍过，当渲染列表元素时，需要为每一个元素定义一个key。这个key就是为了帮助React提高Diff算法的效率。

Diff 算法的基本原则
React 的 Diff 算法基于以下几个基本原则：
树的分解：将树分解为子树，分别比较。
同层比较：只在同一层级比较，不跨层级比较。
唯一标识（key）：通过唯一标识（key）来跟踪元素的位置变化。

33. 性能优化
子组件的props可能并没有发生改变，改变的只是父组件的props或state，所以这一次子组件的render是没有必要的，不仅多了一次render方法执行的时间，还多了一次虚拟DOM比较的时间。
shouldComponentUpdate被频繁调用，如果props和state的对象层级很深，深比较对性能的影响就比较大。一种折中的方案是，只比较对象的第一层级的属性，也就是执行浅比较（shallow compare）
大多数情况下，组件只是重复调用render方法对于性能的影响并不大

业务都没有完成 先考虑优化并不明智 不同阶段的主要矛盾不同
原文：请大家记住，过早的优化并不是一件好事。

34. 性能检测工具
1．React Developer Tools for Chrome
2．Chrome Performance Tab
3. why-did-you-update 会比较组件的state和props的变化，从而发现组件render方法不必要的调用。

35. 高阶组件
高阶组件是React中一个很重要且较复杂的概念，主要用来实现组件逻辑的抽象和复用，
高阶组件与高阶函数 类比 联想

原文：高阶函数是以函数为参数，并且返回值也是函数的函数
通过这个例子可以看出高阶组件的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好地被复用。高阶组件的这种实现方式本质上是装饰者设计模式。
使用场景：
高阶组件的使用场景主要有以下4种：
（1）操纵props
（2）通过ref访问组件实例
（3）组件状态提升
（4）用其他元素包装组件
1．操纵props ：高阶组件可以先拦截到props，对props执行增加、删除或修改的操作，然后将处理后的props再传递给被包装组件
2. 通过ref访问组件实例：高阶组件通过ref获取被包装组件实例的引用，然后高阶组件就具备了直接操作被包装组件的属性或方法的能力
3. 组件状态提升： 把可变的东西再高阶组件中处理。
4. 用其他元素包装组件：在高阶组件渲染WrappedComponent时添加额外的元素，

参数传递：(高阶组件使用箭头函数定义更为简洁)
HOC(…params)的返回值是一个高阶组件，高阶组件需要的参数是先传递给HOC函数的。 
```
 <img src="/react3.png" style="max-width: 80%" />

```
逻辑抽离成高级组件，样式放在业务组建中:
如果逻辑是与DOM不直接相关的，那么这部分逻辑适合使用高阶组件抽象，如数据校验、请求发送等。

36. Hook (更好组件扩展方式)
Hook 是 React 16.8 引入的一种新特性，允许在函数组件中使用状态和其他 React 特性。Hook 提供了一种更简洁、更直观的方式来复用逻辑。

常用 Hook
useState：用于在函数组件中添加状态。
useEffect：用于在函数组件中执行副作用操作。
useContext：用于在函数组件中访问上下文。
useRef：用于在函数组件中访问 DOM 元素或保存可变值。
useMemo 和 useCallback：用于性能优化。

36.路由：React Router
原文：遵循React中一切皆组件的思想

37. 全局数据管理：
1.Redux：可预测的状态管理机
2. MobX

```

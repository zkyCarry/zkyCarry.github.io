---
outline: deep
---
# react

### Tree Shaking 开启：
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

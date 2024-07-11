import{_ as a,c as s,o as n,a1 as e}from"./chunks/framework.CF4Fx_O3.js";const g=JSON.parse('{"title":"react","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/react.md","filePath":"基础/react.md"}'),t={name:"基础/react.md"},p=e(`<h1 id="react" tabindex="-1">react <a class="header-anchor" href="#react" aria-label="Permalink to &quot;react&quot;">​</a></h1><h3 id="tree-shaking-开启" tabindex="-1">Tree Shaking 开启： <a class="header-anchor" href="#tree-shaking-开启" aria-label="Permalink to &quot;Tree Shaking 开启：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. react</span></span>
<span class="line"><span>{xx} 使用变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. import React, { useState } from &quot;react&quot;;</span></span>
<span class="line"><span>useState 使用必须放在函数内部，响应式</span></span>
<span class="line"><span>const [initPlayer, setInitPlayer] = useState(&quot;x&quot;);</span></span>
<span class="line"><span>const [squares, setSquares] = useState(new Array(num).fill(&quot;&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 事件传参数，使用箭头函数</span></span>
<span class="line"><span>&lt;button className=&quot;square&quot; onClick={() =&gt; clickButton(8)}&gt;</span></span>
<span class="line"><span>          {squares[8]}</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span>4. 数组改值需要浅拷贝 </span></span>
<span class="line"><span>const newSquares = [...squares];</span></span>
<span class="line"><span> newSquares[index] = currentPlayer;</span></span>
<span class="line"><span>    setSquares(newSquares);</span></span>
<span class="line"><span>5. jsx内部不能写js代码，只能放在外面 {xx} 再用{}引用</span></span>
<span class="line"><span>return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;Next Player: {currentPlayer}&lt;/h1&gt;</span></span>
<span class="line"><span>        {renderBoard()}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;time-info&quot;&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; jumpTo(-1)}&gt;Game Start&lt;/button&gt;</span></span>
<span class="line"><span>        {renderHistory()}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span></code></pre></div><h2 id="编写例子" tabindex="-1">编写例子： <a class="header-anchor" href="#编写例子" aria-label="Permalink to &quot;编写例子：&quot;">​</a></h2><p><a href="https://codesandbox.io/s/react-dev-forked-9wddnp" target="_blank" rel="noreferrer">https://codesandbox.io/s/react-dev-forked-9wddnp</a></p>`,5),l=[p];function r(c,i,o,d,u,h){return n(),s("div",null,l)}const q=a(t,[["render",r]]);export{g as __pageData,q as default};

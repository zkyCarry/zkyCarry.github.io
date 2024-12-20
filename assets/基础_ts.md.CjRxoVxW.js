import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.Bk1mwsJI.js";const g=JSON.parse('{"title":"ts","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/ts.md","filePath":"基础/ts.md"}'),e={name:"基础/ts.md"},l=p(`<h1 id="ts" tabindex="-1">ts <a class="header-anchor" href="#ts" aria-label="Permalink to &quot;ts&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. interface 声明对象\\ any任何类型</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span>  kind?: &quot;circle&quot; | &quot;square&quot;; //指定赋值内容， ?: 非必填</span></span>
<span class="line"><span>  readonly name: string; //只读</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class UserAccount {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  constructor(name: string, id: number) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>    this.id = id;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const user: User = new UserAccount(&quot;Murphy&quot;, 1);</span></span>
<span class="line"><span>function getAdminUser(): User {} 函数返回类型写法  :void 表示不返回</span></span>
<span class="line"><span>Array&lt;string&gt; 或 string[]</span></span>
<span class="line"><span>2. typeof 获取类型 typeof f === &quot;function&quot; 不能区分数组和对象。 Array.isArray(a) 判断数组</span></span>
<span class="line"><span>3. 泛型</span></span>
<span class="line"><span>interface Backpack&lt;Type&gt; {</span></span>
<span class="line"><span>  add: (obj: Type) =&gt; void;</span></span>
<span class="line"><span>  get: () =&gt; Type;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>4. 安装ts： npm install -g typescript。 编译ts为js：tsc greeter.ts。</span></span>
<span class="line"><span>5. 强等，不能类型转换(=== 	!== )例子：&quot;1&quot;===1 false、  ==  != 弱等，支持类型转换， &quot;1&quot;==1 true</span></span>
<span class="line"><span>6. class private protected public。 默认是 public。</span></span>
<span class="line"><span>7. module 模块 。 export default class RandomNumberGenerator {} 、 import</span></span>
<span class="line"><span>8. type C = Awaited&lt;boolean | Promise&lt;number&gt;&gt;;  type是创建类型别名  Promise 返回。</span></span>
<span class="line"><span>9. Decorators 装饰者</span></span>
<span class="line"><span>10. 枚举 </span></span>
<span class="line"><span>enum Direction {</span></span>
<span class="line"><span>  Up = 1,</span></span>
<span class="line"><span>  Down,</span></span>
<span class="line"><span>  Left,</span></span>
<span class="line"><span>  Right,</span></span>
<span class="line"><span>  Ups = &quot;UP&quot;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>11.  tsc --declaration 可以 .ts 生成 .d.ts 生成声明。</span></span>
<span class="line"><span>12. for in  、for of</span></span>
<span class="line"><span>let list = [4, 5, 6];</span></span>
<span class="line"><span>for (let i in list) {</span></span>
<span class="line"><span>  console.log(i); // &quot;0&quot;, &quot;1&quot;, &quot;2&quot;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for (let i of list) {</span></span>
<span class="line"><span>  console.log(i); // 4, 5, 6</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>13. JSX是一种可嵌入的XML样语法。JSX在React框架上颇受欢迎。 扩展名 .tsx、 js是 .jsx。</span></span>
<span class="line"><span>14. extends (继承) 与  implements (虚拟继承，必须实现继承类的所有属性和方法)。</span></span>
<span class="line"><span>15. Namespaces 命名空间。 Validation.StringValidator</span></span>
<span class="line"><span>namespace Validation {</span></span>
<span class="line"><span>	export interface StringValidator ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>16. declare 告诉编辑器这个类型存在。 在 .d.ts中加入，可以防止编辑器报红。</span></span>
<span class="line"><span>17. symbol 唯一性。 独一无二的。 Symbol还带一些操作函数。</span></span>
<span class="line"><span>let sym1 = Symbol();</span></span>
<span class="line"><span>let sym2 = Symbol(&quot;key&quot;); let sym3 = Symbol(&quot;key&quot;); sym2 === sym3; // false， object里面的key是symbol类型，for in不会遍历到这个属性，可以减少误操作。</span></span>
<span class="line"><span>18. ts类型大小写区别 String 与 string。 声明一般使用小写。 大写代表 ts的对象。</span></span>
<span class="line"><span>19. ts的库。一般@types/库名 是库的ts声明 、 npm install --save-dev @types/lodash  </span></span>
<span class="line"><span>20. ts中的特殊符号</span></span>
<span class="line"><span>:  类型注解 lastName: string</span></span>
<span class="line"><span>?  可选属性/参数   lastName?: string</span></span>
<span class="line"><span>|  联合类型一个值，可能有几个类型  let strs: number | string[] | null</span></span>
<span class="line"><span>&amp;  交叉类型。用于组合多个类型成一个类型。 type ReadWriteFile = ReadableStream &amp; WritableStream;</span></span>
<span class="line"><span>&lt;Type&gt;   泛型。   function identity&lt;Type&gt;(arg: Type): Type { return arg; }</span></span>
<span class="line"><span>!  非空断言操作符。告诉TypeScript编译器，对象后面的属性或变量不会为null或undefined。 myElement!.style.backgroundColor = &quot;red&quot;;  //告诉编辑器 myElement 肯定不会是null，减少报红色。</span></span>
<span class="line"><span>as  将某个值视为特定的类型  let someValue: any = &quot;this is a string&quot;;  let strLength: number = (someValue as string).length;</span></span>
<span class="line"><span>readonly  只读属性.  readonly x: number;</span></span></code></pre></div>`,2),t=[l];function i(c,o,r,u,d,m){return a(),n("div",null,t)}const f=s(e,[["render",i]]);export{g as __pageData,f as default};

---
outline: deep
---

# ts
```
1. interface 声明对象\ any任何类型
interface User {
  name: string;
  id: number;
  kind?: "circle" | "square"; //指定赋值内容， ?: 非必填
  readonly name: string; //只读
}
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const user: User = new UserAccount("Murphy", 1);
function getAdminUser(): User {} 函数返回类型写法  :void 表示不返回
Array<string> 或 string[]
2. typeof 获取类型 typeof f === "function" 不能区分数组和对象。 Array.isArray(a) 判断数组
3. 泛型
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
4. 安装ts： npm install -g typescript。 编译ts为js：tsc greeter.ts。
5. 强等，不能类型转换(=== 	!== )例子："1"===1 false、  ==  != 弱等，支持类型转换， "1"==1 true
6. class private protected public。 默认是 public。
7. module 模块 。 export default class RandomNumberGenerator {} 、 import
8. type C = Awaited<boolean | Promise<number>>;  type是创建类型别名  Promise 返回。
9. Decorators 装饰者
10. 枚举 
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
  Ups = "UP",
}
11.  tsc --declaration 可以 .ts 生成 .d.ts 生成声明。
12. for in  、for of
let list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2",
}
for (let i of list) {
  console.log(i); // 4, 5, 6
}
13. JSX是一种可嵌入的XML样语法。JSX在React框架上颇受欢迎。 扩展名 .tsx、 js是 .jsx。
14. extends (继承) 与  implements (虚拟继承，必须实现继承类的所有属性和方法)。
15. Namespaces 命名空间。 Validation.StringValidator
namespace Validation {
	export interface StringValidator ;
}
16. declare 告诉编辑器这个类型存在。 在 .d.ts中加入，可以防止编辑器报红。
17. symbol 唯一性。 独一无二的。 Symbol还带一些操作函数。
let sym1 = Symbol();
let sym2 = Symbol("key"); let sym3 = Symbol("key"); sym2 === sym3; // false
18. ts类型大小写区别 String 与 string。 声明一般使用小写。 大写代表 ts的对象。
19. ts的库。一般@types/库名 是库的ts声明 、 npm install --save-dev @types/lodash  
20. ts中的特殊符号
:  类型注解 lastName: string
?  可选属性/参数   lastName?: string
|  联合类型一个值，可能有几个类型  let strs: number | string[] | null
&  交叉类型。用于组合多个类型成一个类型。 type ReadWriteFile = ReadableStream & WritableStream;
<Type>   泛型。   function identity<Type>(arg: Type): Type { return arg; }
!  非空断言操作符。告诉TypeScript编译器，对象后面的属性或变量不会为null或undefined
as  将某个值视为特定的类型  let someValue: any = "this is a string";  let strLength: number = (someValue as string).length;
readonly  只读属性.  readonly x: number;
```



import{_ as b,c as r,o as a,a1 as t}from"./chunks/framework.BLNEObz3.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"regularExpression/chapter-05.md","filePath":"regularExpression/chapter-05.md"}'),c={name:"regularExpression/chapter-05.md"},e=t('<html lang="en"><head><meta charset="UTF-8"><title>chapter05</title><link rel="stylesheet" type="text/css" href="css/main.css"></head><body><h1>第5章 重复匹配</h1><h3>5.1 匹配一个或多个字符</h3><p> 要想匹配同一个字符（或字符集合）的多次重复，只要简单地给这个字符（或字符集合）加上一个 + 字符作为后缀就行了。+ 匹配一个或多个字符（至少一个，不匹配零个字符的情况）。<br><code> 文本：<br> aaa@bbb.ccc<br> aaa.aaa@bbb.ccc<br> aaa@bbb.bbb.ccc<br> aaa.aaa@bbb.bbb.ccc<br><br> 正则表达式：<br> \\w+@\\w+\\.\\w+<br><br> 结果：<br> aaa@bbb.ccc<br> aaa@bbb.ccc<br> aaa@bbb.bbb<br> aaa@bbb.bbb<br></code><p>在给一个字符集合加上 + 后缀的时候，必须把 + 放在这个字符集合的外面。比如，[0-9]+ 是正确的，[0-9+]则不是，后面的定义了一个由数字0到9和 + 构成的字符集合，因而只能匹配一个单个的数字字符或加号。<br></p><p>+是一个元字符。如果需要匹配 + 本身，就必须使用它的转义序列 + 。<br></p><p>+还可以用来匹配一个或多个字符集合。<br><code> 文本：<br> aaa@bbb.ccc<br> aaa.aaa@bbb.ccc<br> aaa@bbb.bbb.ccc<br> aaa.aaa@bbb.bbb.ccc<br><br> 正则表达式：<br> [\\w.]+@[\\w.]+.\\w+<br> <br> 结果：<br> aaa@bbb.ccc<br> aaa.aaa@bbb.ccc<br> aaa@bbb.bbb.ccc<br> aaa.aaa@bbb.bbb.ccc<br></code></p><p>一般来说，在字符集合里像 . 和 + 这样的元字符将被解释为普通字符，不需要被转义，但是转义了也没有坏处。[\\w.] 的使用效果和 [\\w.] 是一样的。</p></p><h3>5.2 匹配零个或多个字符</h3><p> 要想匹配字符（或字符集）连续出现零次或多次的情况，可以使用 * 字符来完成，* 的用法和 + 一样，只要把它放在一个字符（或字符集）的后面就行。<br><code> 文本：<br> .aaa@bbb.ccc<br><br> 正则表达式：<br> \\w[\\w.]*@[\\w.]+\\.\\w+<br><br> 结果：<br> aaa@bbb.ccc<br></code><p>*是一个元字符，如果需要匹配 * 本身，就必须使用它的转义序列 * 。</p></p><h3>5.3 匹配零个或一个字符</h3><p> ？只能匹配一个字符（或字符集合）的零次或一次出现。<br><code> 文本：<br> http://www.baidu.com/<br> https://www.baidu.com/<br><br> 正则表达式：<br> ``` https?://[\\w./]+<br> ``` <br> 结果：<br> http://www.baidu.com/<br> https://www.baidu.com/<br></code><p>在第7节里，用模式 \\r\\n\\r\\n 去匹配空白行，在 Unix 或 Linux 系统上匹配空白行只使用 \\n\\n 即可，不需要加上 \\r ，因此，可以使用正则表达式 [\\r]?\\n 匹配一个可选的 \\r 和一个必不可少的 \\n 。这里 [\\r]? 和 \\r? 在功能上完全等价，[]的常规用法是把多个字符定义为一个集合，也可以把一个字符定义为一个集合，这样可以增加可读性和避免产生误解。如果打算同时使用[] 和 ?，一定要把 ? 放在字符集合的外面。<br></p><p>? 是一个元字符，如果需要匹配 ? 本身，就必须使用它的转义序列 ? 。</p></p><h3>5.4 为重复匹配次数设定一个精确的值</h3><p> 正则表达式语言提供了一个用来设定重复次数的语法，重复次数要用 { 和 } 字符来给出，把数值写在它们之间。<br><code> 文本：<br> #CCC<br> #123456<br> #abcDEF<br> #135xyz<br><br> 正则表达式：<br> #[0-9a-f]{6}<br><br> 结果：<br> #123456<br> #abcDEF </code></p><h3>5.5 为重复匹配次数设定一个区间</h3><p> {} 语法还可以用来为重复匹配次数设定一个区间，也就是为重复匹配次数设定一个最小值和一个最大值。<br><code> 文本：<br> 4/8/03<br> 10-6-2004<br> 2/2/2<br> 01-01-01<br><br> 正则表达式：<br> \\d{1,2}[-\\/]\\d{1,2}[-\\/]\\d{2,4}<br><br> 结果：<br> 4/8/03<br> 10-6-2004<br> 01-01-01<br></code><p>在这个例子中，我们使用了 / 的转义序列 / 。这在许多正则表达式实现里是不必要的，但有些正则表达式分析器要求我们必须这样做。为了避免不必要的麻烦，在需要匹配 / 字符本身的时候，最好总是使用它的转义序列。</p></p><h3>5.6 匹配“至少重复多少次”</h3><p> {} 语法的最后一种用法是给出一个最小的重复次数（但不必给出一个最大值），可以用来匹配至少重复多少次。<br><code> 文本：<br> 1001: $496.80<br> 1002: $1290.69<br> 1003: $26.43<br> 1004: $613.42<br> 1005: $7.61<br> 1006: $414.90<br> 1007: $25.00<br><br> 正则表达式：<br> \\d+: \\$\\d{3,}\\.\\d{2}<br><br> 结果：<br> 1001: $496.80<br> 1002: $1290.69<br> 1004: $613.42<br> 1006: $414.90 </code></p><h3>5.7 防止过度匹配</h3><p><code> 文本：<br> &lt;b&gt;aaa&lt;/b&gt; bbb &lt;b&gt;ccc&lt;/b&gt;<br> 正则表达式：<br> &lt;[Bb]&gt;.*<br> 结果：<br> &lt;b&gt;aaa&lt;/b&gt; bbb &lt;b&gt;ccc&lt;/b&gt;<br></code><p>这个例子中只找到了一个匹配而不是预期中的两个，因为 * 和 + 都是所谓的 “贪婪型” 元字符，它们在进行匹配时的行为模式是多多益善而不是适可而止的。它们会尽可能地从一段文本的开头一直匹配到这段文本的末尾，而不是从这段文本的开头匹配到碰到第一个匹配时为止。<br></p><p>在不需要这种 “贪婪行为” 的时候，应该使用这些元字符的 “懒惰型” 版本（“懒惰”在这里的含义是匹配尽可能少的字符，与贪婪型元字符的行为模式刚好相反）。懒惰型元字符的写法很简单，只要给贪婪型元字符加上一个 ? 后缀即可。</p></p><table><caption>常用的贪婪型元字符和它们的懒惰型版本</caption><tr><th>贪婪型元字符</th><th>懒惰型元字符</th></tr><tr><td>*</td><td>*?</td></tr><tr><td>+</td><td>+?</td></tr><tr><td>{n,}</td><td>{n,}?</td></tr></table><p><code> 文本：<br> &lt;b&gt;aaa&lt;/b&gt; bbb &lt;b&gt;ccc&lt;/b&gt;<br><br> 正则表达式：<br> &lt;[Bb]&gt;.*?<br><br> 结果：<br> &lt;b&gt;aaa&lt;/b&gt;<br> &lt;b&gt;ccc&lt;/b&gt; </code></p></body></html>',1),p=[e];function d(o,h,l,s,n,i){return a(),r("div",null,p)}const g=b(c,[["render",d]]);export{w as __pageData,g as default};

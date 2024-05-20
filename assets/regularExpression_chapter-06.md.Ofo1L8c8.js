import{_ as t,c as r,o as e,a1 as b}from"./chunks/framework.BLNEObz3.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"regularExpression/chapter-06.md","filePath":"regularExpression/chapter-06.md"}'),o={name:"regularExpression/chapter-06.md"},a=b('<html lang="en"><head><meta charset="UTF-8"><title>chapter06</title><link rel="stylesheet" type="text/css" href="css/main.css"></head><body><h1>第6章 位置匹配</h1><h3>6.1 单词边界</h3><p> 由限定符 \\b 指定的单词边界，\\b 用来匹配一个单词的开始或结尾。<br><code> 文本：<br> the cat scattered his food all over the room.<br><br> 正则表达式：<br> \\bcat\\b<br><br> 结果：<br> cat<br><br></code><p>在原始文本里，单词 cat 的前后都有一个空格，而这将与模式 \\bcat\\b 想匹配（空格是用来分隔单词的字符之一）。单词 scattered 中的字符序列 cat 不能与这个模式匹配，因为它的前一个字符是 s 、后一个字符是 t （这两个字符都不能与 \\b 相匹配）。<br></p><p>\\b 匹配的是一个这样的位置，这个位置位于一个能够用来构成单词的字符（字母、数字和下划线，也就是与 \\w 相匹配的字符）和一个不能用来构成单词的字符（也就是与 \\W 相匹配的字符）之间。<br></p><p>如果你想要匹配一个完整的单词，就必须在你想要匹配的文本的前后都加上 \\b 限定符。<br></p><p>\\b 匹配且只匹配一个位置，不匹配任何字符。用 \\bcat\\b 匹配到的字符串的长度是3个字符（c、a、t），而不是5个字符。</p><p>如果你想表明不匹配一个单词边界，请使用 \\B 。<br><br><code> 文本：<br> Please enter the nine-digit id as it appears on your color - coded pass-key.<br><br> 正则表达式：<br> \\B-\\B<br><br> 结果：<br> -<br><br></code></p><p>除了用来匹配单词边界（开头或结尾均可）的 \\b，有些正则表达式实现还支持另外两个元字符： &lt; 只匹配单词的开头； &gt; 只匹配单词的结束。不过，虽然这两种元字符可以提供更细的控制，但支持它们的正则表达式引擎却并不多见。</p></p><h3>6.2 字符串边界</h3><p> 字符串边界可以用来进行与字符串有关的位置匹配（字符串的开头、字符串的结束、整个字符串等）。用来定义字符串边界的元字符有两个：一个是用来定义字符串开头的 ^ ，另一个是用来定义字符串结尾的 $ 。<br><p>合法的 XML 文档都必须以 &lt;?xml&gt; 标签开头并有一些其他属性，用：&lt;?xml.*?&gt; 可以检查一段文本是否是一篇 XML 文档，如果文档前面有其他内容，将不是合法的 XML 文档。<br><br></p><code> 文本：<br> This is bad, real bad!<br> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;<br><br> 正则表达式：<br> ^\\s*&lt;\\?xml.*\\?&gt;<br><br> 结果：<br> No matches<br><br> 文本：<br> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;<br><br> 正则表达式：<br> ^\\s*&lt;\\?xml.*\\?&gt;<br><br> 结果：<br> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;<br><br></code><p>这里，^ 匹配一个字符串的开头位置，所以 ^\\s* 将匹配一个字符串的开头位置和随后的零个或多个空白字符（这解决了&lt;?xml&gt;标签前允许有空格、制表符、换行符等空白字符的问题）。模式 ^\\s*&lt;?xml.*?&gt; 不仅能正确地匹配一个位置正确的 &lt;?xml&gt;标签，还能对合法的空白字符做出妥善处理。<br></p><p>除了位置上的差异，$ 的用法与 ^ 完全一样。比如说，在一份 Web 页面里，&lt;/html&gt; 标签的后面不应该再有任何实际内容，而这一点可以用下面的这个模式来检查： &lt;/[Hh][Tt][Mm][Ll]&gt;\\s*$ 。<br></p><p>^ 是几个有着多种用途的元字符之一。只有当它出现在一个字符集合里（被放在 [ 和 ] 之间）并紧跟在左方括号 [ 的后面时，它才能发挥 “求非” 作用。如果是在一个字符集合的外面并位于一个模式的开头，^ 将匹配字符串的开头。</p></p><h3>6.3 分行匹配模式</h3><p> ^ 匹配一个字符串的开头，$ 匹配一个字符串的结尾。但这一结论并非绝对正确，它还有要一个例外或者说有一种改变这种行为的办法。<br><p>有许多正则表达式都支持使用一些特殊的元字符去改变另外一些元字符行为的做法，用来启用分行匹配模式的（?m）记号就是一个能够改变其他元字符行为的元字符序列。分行匹配模式将使得正则表达式引擎把行分隔符当做一个字符分隔符来对待。在分行匹配模式下，^ 不仅匹配正常的字符串开头，还将匹配行分隔符（换行符）后面的开始位置（这个位置是不可见的）；类似地，$ 不仅匹配正常的字符串结尾，还将匹配行分割符（换行符）后面的结束位置。<br></p><p>有许多正则表达式实现不支持（?m）<br></p><p>有些正则表达式实现还支持使用 \\A 来定义一个字符串的开始，以 \\B 来定义一个字符串的结束的做法。此时，\\A 和 \\B 的作用将基本等价于 ^ 和 $，但 \\A 和 \\B 不会因为加上了（?m）前缀而改变行为。也就是，在跨行匹配模式下使用 \\A 和 \\B 的做法不会受到在分行匹配模式下使用 ^ 和 $ 的效果。</p></p></body></html>',1),s=[a];function p(c,l,n,d,h,i){return e(),r("div",null,s)}const g=t(o,[["render",p]]);export{_ as __pageData,g as default};

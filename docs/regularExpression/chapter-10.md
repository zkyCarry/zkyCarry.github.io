<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chapter10</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
	<h1>第10章 嵌入条件</h1>
	<h3>10.1 回溯引用条件</h3>
	<p>
		回溯引用条件只在一个前面的子表达式搜索取得成功的情况下才允许使用一个表达式。用来定义这种条件的语法是 (?(backreference)true-regex)，其中 ? 表明这是一个条件，括号里的 backreference 是一个回溯引用， true-regex 是一个只在 backreference 存在时才会被执行的子表达式。<br /><br />
<code>
文本：<br />
&lt;a href="www.baidu.com/"&gt;&lt;img src="search.png"&gt;&lt;/a&gt;<br />
&lt;img src="space.png"&gt;<br /><br />
正则表达式：<br />
(&lt;[Aa]\s+[^>]+&gt;\s*)?&lt;[Ii][Mm][Gg]\s+[^>]+&gt;(?(1)\s*&lt;/[Aa]&gt;)<br /><br />
结果：<br />
&lt;a href="www.baidu.com/"&gt;&lt;img src="search.png"&gt;&lt;/a&gt;<br />
&lt;img src="space.png"&gt;<br /><br />
</code>

这里，(&lt;[Aa]\s+[^>]+&gt;\s*) 将匹配一个&lt;A&gt;或&lt;a&gt;标签（以及&lt;A&gt;或&lt;a&gt;标签的任意属性），这个标签可有可无（因为这个子表达式的最后又一个 ?）。接下来 &lt;[Ii][Mm][Gg]\s+[^>]+&gt; 匹配一个 &lt;IMG&gt; （大小写均可）及其任意属性。(?(1)\s*&lt;/[Aa]&gt;) 是一个回溯引用条件，?(1) 的含义是：如果第一个回溯引用存在，则使用 \s*&lt;/[Aa]&gt; 继续进行匹配。<br />

我们刚才使用的模式只在给定条件得到满足时才执行一个表达式。条件还可以有否则表达式，否则表达式只在给定的回溯引用不存在（也就是条件没有得到满足）时才会被执行。用来定义这种条件的语法是 (?(backreference)true-regex|false-regex)，这个语法接受一个条件和两个将分别在这个条件得到满足和没有得到满足时执行的子表达式。
</p>
	<h3>10.2 前后查找条件</h3>
	<p>
		前后查找条件只在一个向前查找或向后查找操作取得成功的情况下才允许一个表达式被使用。定义一个前后查找条件的语法与定义一个回溯引用条件的语法大同小异，只需要把回溯引用（括号里的回溯引用编号）替换为一个完整的前后查找表达式就行了。<br /><br />
<code>
文本：<br />
11111<br />
22222<br />
33333-<br />
44444-4444<br /><br />
正则表达式：<br />
\d{5}(?(?=-)-\d{4})<br /><br />
结果：<br />
11111<br />
22222<br />
44444-4444<br /><br />
</code>

这里，\d{5}匹配前5位数字，接下来是一个 (?(?=-)-\d{4}) 形式的向前查找条件。这个条件使用了 ?=- 来匹配（但不消费）一个连字符，如果条件得到满足（那个连字符存在），-\d{4} 将匹配那个连字符和随后的4位数字。<br />

在实际工作中，嵌入了前后查找条件的模式相当少见，这是因为我们往往可以用更简单的办法来达到同样的目的。
</p>
	<h3>小结</h3>
	<p>
		并非所有的正则表达式实现都支持条件处理。
	</p>

</body>
</html>
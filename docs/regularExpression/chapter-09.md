<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chapter09</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
	<h1>第9章 前后查找</h1>
	<h3>9.1 向前查找</h3>
	<p>
		向前查找指定了一个必须匹配但不在结果中返回的模式。向前查找实际就是一个子表达式，而且从格式上看也确实如此。从语法上看，一个向前查找模式其实就是一个以 ?= 开头的子表达式，需要匹配的文本跟在 = 的后面。<br />

有些正则表达式文档使用术语 “消费”(consume) 来表述 “匹配和返回文本” 的含义。在向前查找里，被匹配的文本不包括在最终返回的匹配结果里，这被称为 “不消费”。<br />

下面的例子是将一些 URL 地址的协议名部分提取出来。<br /><br />
<code>
文本：<br />
http://www.forta.com/<br />
https://mail.forta.com/<br />
ftp://ftp.forta.com/<br /><br />
正则表达式：<br />
.+(?=:)<br /><br />
结果：<br />
http<br />
https<br />
ftp<br /><br />
</code>

在上面列出的 URL 地址里，协议名与主机名之间以一个 : 分隔。模式 .+ 匹配任意文本（第1个匹配是 http），子表达式 (?=:) 匹配 : 。注意，被匹配到的 : 并没有出现在最终的匹配结果里，我们用 ?= 向正则表达式引擎表明只要找到 : 就行了，不要把它包括在最终的匹配结果里，用术语来说，就是 “不消费” 它。<br />

向前查找（和向后查找）匹配本身其实是有返回结果的，只是这个结果的字节长度永远是0而已。因此，前后查找操作有时也被称为零宽度匹配操作。<br />

任何一个子表达式都可以转换为一个向前查找表达式，只要给它加上一个 ?= 前缀即可。在同一个搜索模式里可以使用多个向前查找表达式，它们可以出现在模式里的任意位置。
</p>
	<h3>9.2 向后查找</h3>
	<p>
		除了向前查找，许多正则表达式实现还支持向后查找，比如：Java、.NET、PHP 和 Perl 都支持向后查找（但有一些限制），但是JavaScript 和 ColdFusion 不支持向后查找。向后查找也就是查找出现在被匹配文本之前的字符（但不消费它），向后查找操作符是 ?<=。<br />

?<= 与 ?= 的具体使用方法大同小异，它必须用在一个子表达式里，而且后面跟要匹配的文本。<br /><br />
<code>
文本：<br />
http://www.forta.com/<br />
https://mail.forta.com/<br />
ftp://ftp.forta.com/<br /><br />
正则表达式：<br />
(?<=://).+<br /><br />
结果：<br />
www.forta.com/<br />
mail.forta.com/<br />
ftp.forta.com/<br /><br />
</code>

向前查找模式的长度是可变的，它们可以包含 . 和 + 之类的元字符，而向后查找模式只能是固定长度，这是一条几乎所有的正则表达式实现都遵守的限制。
</p>
	<h3>9.3 把向前查找和向后查找结合起来</h3>
	<p>
		<code>
		文本：<br />
		&lt;head&gt;<br />
		&lt;title&gt;my homepage&lt;/title&gt;<br />
		&lt;/head&gt;<br /><br />
正则表达式：<br />
(?<=&lt;[Tt][Ii][Tt][Ll][Ee]&gt;).*(?=&lt;/[Tt][Ii][Tt][Ll][Ee]&gt;)<br /><br />
结果：<br />
my homepage
</code>
</p>
	<h3>9.4 对前后查找取非</h3>
	<p>
		前面结束的向前查找和向后查找被称为正向前查找和正向后查找，术语“正”指的的寻找匹配的事实。前后查找还有一种不太常见的用法叫做负前后查找。负向前查找将向前查找不与给定模式相匹配的文本，负向后查找将向后查找不与给定模式向匹配的文本。
	</p>
	<table>
		<caption>各种前后查找操作符</caption>
		<tr>
			<th>操作符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>(?=)</td>
			<td>正向前查找</td>
		</tr>
		<tr>
			<td>(?!)</td>
			<td>负向前查找</td>
		</tr>
		<tr>
			<td>(?&lt;=)</td>
			<td>正向后查找</td>
		</tr>
		<tr>
			<td>(?&lt;!)</td>
			<td>负向后查找</td>
		</tr>
	</table>
	<p>
		一般来说，凡是支持向前查找的正则表达式实现都同时支持正向前查找和负向前查找。类似地，凡是支持向后查找的正则表达式实现都同时支持正向后查找和负向后查找。<br /><br />
<code>
文本：<br />
I paid $30 for 100 apples<br /><br />
正则表达式：<br />
(?&lt;=\$)\d+<br /><br />
结果：<br />
30<br /><br />
文本：<br />
I paid $30 for 100 apples<br /><br />
正则表达式：<br />
\b(?&lt;!\$)\d+\b<br /><br />
结果：<br />
100
</code>
</p>

</body>
</html>
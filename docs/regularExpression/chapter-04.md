<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chapter04</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
	<h1>第4章 使用元字符</h1>
	<h3>4.1 匹配空白字符</h3>
	<p>
		在进行正则表达式搜索的时候，我们经常会遇到需要对原始文本里的非打印空白字符进行匹配的情况。比如说，我们可能需要把所有的制表符找出来，或者我们需要把换行符找出来，这类字符很难被直接输入到一个正则表达式里，但我们可以使用下面的特殊元字符来输入它们。
	</p>
	<table>
		<caption>空白元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>[\b]</td>
			<td>回退（并删除）一个字符（Backspace 键）</td>
		</tr>
		<tr>
			<td>\f</td>
			<td>换页符</td>
		</tr>
		<tr>
			<td>\n</td>
			<td>换行符</td>
		</tr>
		<tr>
			<td>\r</td>
			<td>回车符</td>
		</tr>
		<tr>
			<td>\t</td>
			<td>制表符（Tab键）</td>
		</tr>
		<tr>
			<td>\v</td>
			<td>垂直制表符</td>
		</tr>
	</table>
	<p>
<code>
文本：<br />
abcde<br />
abcde<br /><br />
正则表达式：<br />
\n\n<br /><br />
结果：<br /><br />
</code>

</p>
	<p>
		\r\n 匹配一个 “回车+换行” 组合，有许多操作系统（比如：Windows）都把这个组合用作文本行的结束标签。使用正则表达式 \r\n\r\n 进行的搜索将匹配两个连续的行尾标签，而那正是两条记录之间的空白行。<br />

\r\n 是 Windows 所使用的文本行结束标签。Unix 和 Linux 系统只使用一个换行符来结束一个文本行，也就是说，在 Unix/Linux 系统上匹配空白行只使用 \n\n 即可，不需要加上 \r。同时适用于 Windows 和 Unix/Linux 系统的正则表达式应该包含一个可选的 \r 和一个必须被匹配的 \n。<br />
</p>
	<h3>4.2  匹配特定的字符类别</h3>
	<p>(1) 匹配数字（与非数字）</p>
	<table>
		<caption>数字元字符</caption>
		<tr>
			<td>元字符</td>
			<td>说明</td>
		</tr>
		<tr>
			<td>\d</td>
			<td>任何一个数字字符（等价于 [0-9]）</td>
		</tr>
		<tr>
			<td>\D</td>
			<td>任何一个非数字字符（等价于 [^0-9]）</td>
		</tr>
	</table>
	<p>
		(2) 匹配字母和数字（与非字母和数字）<br />
		字母和数字，A 到 Z （不分大小写）、数字0到9，再加上下划线字符（_），是另一种比较常用的字符集合。
	</p>
	<table>
		<caption>字母数字元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>\w</td>
			<td>任何一个字母数字字符（大小写均可）或下划线字符（等价于 [a-zA-Z0-9_]）</td>
		</tr>
		<tr>
			<td>\W</td>
			<td>任何一个非字母数字字符（大小写均可）或非下划线字符（等价于 [^a-zA-Z0-9_]）</td>
		</tr>
	</table>
	<p>(3) 匹配空白字符（与非空白字符）</p>
	<table>
		<caption>空白字符元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>\s</td>
			<td>任何一个空白字符（等价于 [\f\n\r\t\v]）</td>
		</tr>
		<tr>
			<td>\S</td>
			<td>任何一个非空白字符（等价于 [^\f\n\r\t\v]）</td>
		</tr>
	</table>
	<p>用来匹配退格字符的 [\b] 元字符是一个特例：它不在类元字符 \s 和 \S 的覆盖范围内。</p>
	<p>(4) 匹配十六进制或八进制数值</p>
	<p>
		在正则表达式里，十六进制（逢16进1）数值要用前缀 \x 来给出。比如：\x0A 对应于 ASCII 字符10（换行符），其效果等价于 \n 。<br />

在正则表达式里，八进制（逢8进1）数值要用前缀 \0 来给出，数值本身可以是两位或三位。比如：\011 对应于 ASCII 字符9（制表符），其效果等价于 \t 。<br />

有不少正则表达式实现还允许使用 \c 前缀来指定各种控制字符。比如：\cZ 将匹配 Ctrl-Z 。不过，在实际工作中，必须使用这种语法的情况相当少见。
</p>
	<p>
		(5) 使用 POSIX 字符类<br />
		JavaScript 不支持在正则表达式里使用 POSIX 字符类。
	</p>
	<table>
		<caption>POSIX 字符类</caption>
		<tr>
			<th>字符类</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>[:alnum:]</td>
			<td>任何一个字母或数字（等价于 [a-zA-Z0-9]）</td>
		</tr>
		<tr>
			<td>[:alpha:]</td>
			<td>任何一个字母（等价于 [a-zA-Z]）</td>
		</tr>
		<tr>
			<td>[:blank:]</td>
			<td>空格或制表符（等价于 [\t ]）</td>
		</tr>
		<tr>
			<td>[:cntrl:]</td>
			<td>ASCII 控制字符（ASCII 0到31 和 ASCII 127）</td>
		</tr>
		<tr>
			<td>[:digit:]</td>
			<td>任何一个数字（等价于 [0-9]）</td>
		</tr>
		<tr>
			<td>[:graph:]</td>
			<td>和 [:print:] 一样，但不包括空格</td>
		</tr>
		<tr>
			<td>[:lower:]</td>
			<td>任何一个小写字母（等价于 [a-z]）</td>
		</tr>
		<tr>
			<td>[:print:]</td>
			<td>任何一个可打印字符</td>
		</tr>
		<tr>
			<td>[:punct:]</td>
			<td>既不属于 [:alnum:] 也不属于 [:cntrl:] 的任何一个字符</td>
		</tr>
		<tr>
			<td>[:space:]</td>
			<td>任何一个空白字符，包括空格（等价于 [^\f\n\r\t\v ]）</td>
		</tr>
		<tr>
			<td>[:upper:]</td>
			<td>任何一个大写字母（等价于 [A-Z]）</td>
		</tr>
		<tr>
			<td>[:xdigit:]</td>
			<td>任何一个十六进制数字（等价于 [a-fA-F0-9]）</td>
		</tr>
	</table>
	<p>
比如：匹配 HTML 代码里的 RGB 值可以使用：#[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]<br />

这里使用的模式以 [[ 开头，以 ]] 结束（两对方括号）。这是使用 POSIX 字符类所必须的。POSIX 类必须括在 [: 和 :] 之间，外层的 [ 和 ] 用来定义一个字符集合，内层的 [ 和 ] 字符是 POSIX 字符类本身的组成部分。
</p>
</body>
</html>
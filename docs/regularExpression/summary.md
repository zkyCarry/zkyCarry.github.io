<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Summary</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
	<h1>总结</h1>
	<h3>1. 编程语言中的正则表达式</h3>
	<p>(1) JavaScript</p>
	<p>
		JavaScript 1.x 版本在 String 和 RegEx 对象的以下几个方法里实现了正则表达式处理。<br />
		exec: 一个用来搜索一个匹配的 RegEx 方法。<br />
		match: 一个用来匹配一个字符串的 String 方法。<br />
		replace: 一个用来完成替换操作的 String 方法。<br />
		search: 一个用来测试在某给定字符串里是否存在着一个匹配的 String 方法。<br />
		split: 一个用来把一个字符串拆分为多个子串的 String 方法。<br />
		test: 一个用来测试在某给定字符串里是否存在着一个匹配的 RegEx 方法。<br />
		JavaScript2 里的正则表达式处理与 JavaScript 1.x 向后兼容并提供了更多的功能。<br />
		JavaScript 使用命令行选项来管理全局的区分大小写搜索：g 选项激活全局搜索功能，i 选项让匹配操作不区分字母的大小写，这两个选项可以组合为 gi。<br />
		其他命令行选项（版本4及以后的浏览器支持）包括：m，支持多行字符串；s，支持单行字符串；x，忽略正则表达式模式里的空白字符。<br />
		在使用回溯引用的时候，$' 将返回被匹配字符串前面的所有东西，$` 将返回被匹配字符串后面的所有东西，$+ 将返回最后一个被匹配的子表达式，$&amp;将返回被匹配到的所有东西。<br />
		JavaScript 提供了一个名为 RegExp 的全局对象，在执行完一个正则表达式之后，可用通过这个对象获得与这次执行有关的信息。<br />
		JavaScript 不支持 POSIX 字符类。<br />
		JavaScript 不支持 \A 和 \Z。
	</p>
	<p>(2) MySQL</p>
	<p>
		MySQL 对正则表达式的支持体现在允许在 WHERE 子句里使用如下格式的表达式：<code class="inlineCode">REGEXP "expression"</code><br />
		下面是一条使用了正则表达式的 MySQL 语句的完整语法：<br />
		<code class="inlineCode">SELECT * FROM TABLE WHERE REGEXP "pattern"</code><br />
		MySQL 正则表达式支持很有用，功能也和很强大，但它还算不上是一个完备的正则表达式实现。<br />
		只提供了搜索支持，不支持使用正则表达式进行替换操作。<br />
		在默认情况下，正则表达式搜索不区分字母的大小写。如果需要区分字母的大小写，必须再增加一个 BINARY 关键字（放在 REGEXP 和模式之间）。<br />
		用 [[:&lt;:]] 来匹配一个单词的开头，用 [[:&gt;:]] 来匹配一个单词的结束。<br />
		不支持向前预测。<br />
		不支持嵌入条件。<br />
		不支持八进制字符搜索。<br />
		不支持\a、\b、\e、\f 和 \v。<br />
		不支持回溯引用。
	</p>
	<h3>2. 常见正则表达式</h3>
	<p>
		(1) 中国邮政编码<br />
		我国邮政编码的规则是，前两位表示省、市、自治区，第三位代表邮区，第四位代表县、市，最后两位代表投递邮局。共6位数字，其中第二位不为8（港澳前两位为99，其余省市为0-7）。<br />
		<code class="inlineCode">\d(9|[0-7])\d{4}</code>
	</p>
	<p>
		(2)IP地址<br />
		IP 地址由4个字节构成（这4个字节的取值范围都是0~255）。IP地址通常被写成4组以 . 字符隔开的整数（每个整数有1~3位数字构成）。<br />
		<code class="inlinCode">(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))</code>
	</p>
	<p>
		(3)电子邮件地址<br />
		<code class="inlineCode">(\w+\.)*\w+@(\w+\.)+[A-Za-z]+</code>
	</p>
	<p>
		(4)18位身份证号<br />
		<code class="inlineCode">^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$</code>
	</p>
	<h3>3. 元字符</h3>
	<table>
		<caption>基本元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>.</td>
			<td>匹配任意单个字符</td>
		</tr>
		<tr>
			<td>|</td>
			<td>逻辑或操作符</td>
		</tr>
		<tr>
			<td>[]</td>
			<td>匹配字符集合中的一个字符</td>
		</tr>
		<tr>
			<td>[^]</td>
			<td>对字符集合求非</td>
		</tr>
		<tr>
			<td>-</td>
			<td>定义一个区间（例如[A-Z]）</td>
		</tr>
		<tr>
			<td>\</td>
			<td>对下一个字符转义</td>
		</tr>
	</table>
	<table>
		<caption>数量元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>*</td>
			<td>匹配前一个字符（子表达式）的零次或多次重复</td>
		</tr>
		<tr>
			<td>*?</td>
			<td>* 的懒惰型版本</td>
		</tr>
		<tr>
			<td>+</td>
			<td>匹配前一个字符（子表达式）的一次或多次重复</td>
		</tr>
		<tr>
			<td>+?</td>
			<td>+ 的懒惰型版本</td>
		</tr>
		<tr>
			<td>?</td>
			<td>匹配前一个字符（子表达式）的零次或一次重复</td>
		</tr>
		<tr>
			<td>{n}</td>
			<td>匹配前一个字符（子表达式）的n次重复</td>
		</tr>
		<tr>
			<td>{m, n}</td>
			<td>匹配前一个字符（子表达式）至少m次且至多n次重复</td>
		</tr>
		<tr>
			<td>{n, }</td>
			<td>匹配前一个字符（子表达式）n次或更多次重复</td>
		</tr>
		<tr>
			<td>{n, }?</td>
			<td>{n, } 的懒惰型版本</td>
		</tr>
	</table>
	<table>
		<caption>位置元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>^</td>
			<td>匹配字符串的开头</td>
		</tr>
		<tr>
			<td>\A</td>
			<td>匹配字符串的开头</td>
		</tr>
		<tr>
			<td>$</td>
			<td>匹配字符串的结束</td>
		</tr>
		<tr>
			<td>\Z</td>
			<td>匹配字符串的结束</td>
		</tr>
		<tr>
			<td>\&lt;</td>
			<td>匹配单词的开头</td>
		</tr>
		<tr>
			<td>\&gt;</td>
			<td>匹配单词的结束</td>
		</tr>
		<tr>
			<td>\b</td>
			<td>匹配单词边界（开头和结束）</td>
		</tr>
		<tr>
			<td>\B</td>
			<td>\b的反义</td>
		</tr>
	</table>
	<table>
		<caption>特殊字符元字符</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>[\b]</td>
			<td>退格字符</td>
		</tr>
		<tr>
			<td>\c</td>
			<td>匹配一个控制字符</td>
		</tr>
		<tr>
			<td>\d</td>
			<td>匹配任意数字字符</td>
		</tr>
		<tr>
			<td>\D</td>
			<td>\d 的反义</td>
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
			<td>\s</td>
			<td>匹配一个空白字符</td>
		</tr>
		<tr>
			<td>\S</td>
			<td>\s 的反义</td>
		</tr>
		<tr>
			<td>\t</td>
			<td>制表符（Tab字符）</td>
		</tr>
		<tr>
			<td>\v</td>
			<td>垂直制表符</td>
		</tr>
		<tr>
			<td>\w</td>
			<td>匹配任意字母数字字符或下划线字符</td>
		</tr>
		<tr>
			<td>\W</td>
			<td>\w 的反义</td>
		</tr>
		<tr>
			<td>\x</td>
			<td>匹配一个十六进制数字</td>
		</tr>
		<tr>
			<td>\0</td>
			<td>匹配一个八进制数字</td>
		</tr>
	</table>
	<table>
		<caption>回溯引用和前后查找</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>()</td>
			<td>定义一个子表达式</td>
		</tr>
		<tr>
			<td>\1</td>
			<td>匹配第1个子表达式；\2 代表第2个子表达式，一次类推</td>
		</tr>
		<tr>
			<td>?=</td>
			<td>向前查找</td>
		</tr>
		<tr>
			<td>?<=</td>
			<td>向后查找</td>
		</tr>
		<tr>
			<td>?!</td>
			<td>负向前查找</td>
		</tr>
		<tr>
			<td>?&#60;!</td>
			<td>负向后查找</td>
		</tr>
		<tr>
			<td>?()</td>
			<td>条件（if then）</td>
		</tr>
		<tr>
			<td>?()|</td>
			<td>条件（if then else）</td>
		</tr>
	</table>
	<table>
		<caption>大小写转换</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>\E</td>
			<td>结束 \L 或 \U 转换</td>
		</tr>
		<tr>
			<td>\l</td>
			<td>把下一个字符转换为小写</td>
		</tr>
		<tr>
			<td>\L</td>
			<td>把后面的字符转换为小写，直到遇见 \E 为止</td>
		</tr>
		<tr>
			<td>\u</td>
			<td>把下一个字符转换为大写</td>
		</tr>
		<tr>
			<td>\U</td>
			<td>把后面的字符转换为大写写，直到遇见 \E 为止</td>
		</tr>
	</table>
	<table>
		<caption>匹配模式</caption>
		<tr>
			<th>元字符</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>(?m)</td>
			<td>分行匹配模式</td>
		</tr>
	</table>

</body>
</html>
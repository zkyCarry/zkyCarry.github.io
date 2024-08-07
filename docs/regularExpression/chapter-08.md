<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chapter08</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
	<h1>第8章 回溯引用：前后一致匹配</h1>
	<h3>8.1 回溯引用匹配</h3>
	<p>
		假如你有一段文本，你想把这段文本里所有连续重复出现的单词（打字错误，其中有一个单词输了两遍）找出来。显然，在搜索某个单词的第二次出现时，这个单词必须是已知的。回溯引用允许正则表达式模式引用前面的匹配结果（具体到这个例子，就是前面匹配到的单词）。<br /><br />
<code>
文本：<br />
This is a block of of text,<br />
several words here are are<br />
repeated, and and they<br />
should not be.<br /><br />
正则表达式：<br />
[ ]+(\w+)[ ]+\1<br /><br />
结果：<br />
of of<br />
are are<br />
and and<br /><br />
</code>

这里，[ ]+ 匹配一个或多个空格，\w 匹配一个或多个字母数字字符， []+ 匹配随后的空格。注意， \w 是括在括号里的，它是一个子表达式。这个子表达式不是用来进行重复匹配的，这里根本不涉及重复匹配的问题。这个子表达式只是把整个模式的一部分单独划分出来以便在后面引用。这个模式的最后一部分是 \1，这是一个回溯引用，而它引用的正是前面划分出来的那个子表达式。当 (\w+) 匹配到单词 of 的时候，\1 也匹配单词 of ，当 (\w+) 匹配到单词 are 的时候，\1 也匹配单词 are ，当 (\w+) 匹配到单词 and 的时候，\1 也匹配单词 and 。<br />

回溯引用指的是模式的后半部分引用在前半部分中定义的子表达式。\1 代表着模式里的第1个子表达式，\2 代表着第2个子表达式，以此类推。可以把回溯引用想象成变量。<br />

回溯引用只能用来引用模式里的子表达式（用 ( 和 ) 括起来的正则表达式片段）。<br />

回溯引用匹配通常从1开始计数（\1 、\2 等）。在许多实现里，第0个匹配（\0）可以用来代表整个正则表达式。<br />

不同的正则表达式在实现回溯引用的语法方面旺旺有着巨大的差异。JavaScript 使用 \ 来标识回溯引用（\ 与 $ 配合进行替换操作时是例外）。
</p>
	<h3>8.2 回溯引用在替换操作中的应用</h3>
	<p>
	<code>
		文本：<br />
		Hello, 940710020@qq.com is my email address.<br /><br />
正则表达式：<br />
(\w+[\w\.]*@[\w\.]+\.\w+)<br /><br />
替换：<br />
&lt;a href="mailto:$1"&gt;$1&lt;/a&gt;<br /><br />
结果：<br />
Hello, &lt;a href="mailto:940710020@qq.com"&gt;940710020@qq.com&lt;/a&gt; is my email address.<br /><br />
</code>

替换操作需要用到两个正则表达式：一个用来给出搜索模式，另一个用来给出匹配文本的替换模式。回溯引用可以跨模式使用，在第一个模式里被匹配的子表达式可以用在第二个模式里。这里使用的模式 (\w+[\w\.]*@[\w\.]+\.\w+) 用来匹配电子邮件地址，并把它写成了一个子表达式。这样一来，被匹配到的文本就可以用在替换模式里了。<br />

在一个用来保存用户信息的数据库里，电话号码被保存为333-555-1234。现在，你需要把电话号码重新排版为(313)555-1234。<br /><br />
<code>
文本：<br />
313-555-1234<br />
248-555-9999<br /><br />
正则表达式：<br />
(\d{3})(-)(\d{3}-\d{4})<br /><br />
替换：<br />
($1)$3<br /><br />
结果：<br />
(313)555-1234<br />
(248)555-9999<br /><br />
</code>

在对文本进行重新排版的时候，把文本分解成多个子表达式的做法往往非常有用，这可以让我们对文本的排版效果做出更精确的控制。
</p>
	<h3>8.3 大小写转换</h3>
	<p>
		有些正则表达式实现允许我们使用下表列出的元字符对字母进行大小写转换。
	</p>
	<table>
		<caption>用来进行大小写转换的元字符</caption>
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
			<td>把 \L 到 \E 之间的字符全部转换为小写</td>
		</tr>
		<tr>
			<td>\u</td>
			<td>把下一个字符转换为大写</td>
		</tr>
		<tr>
			<td>\U</td>
			<td>把 \U 到 \E 之间的字符全部转换为大写</td>
		</tr>
	</table>
	<p>
		下面是一个简单的例子，把一级标题（&lt;h1&gt;...&lt;/h1&gt;）的标题文字转换为大写：<br /><br />
<code>
文本：<br />
&lt;h1&gt;Welcome to my Homepage&lt;/h1&gt;<br /><br />
正则表达式：<br />
(&lt;[Hh]1&gt;)(.*?)(&lt;/[Hh]1&gt;)<br /><br />
替换：<br />
$1\U$2\E$3<br /><br />
结果：<br />
&lt;h1&gt;WELCOME TO MY HOMEPAGE&lt;/h1&gt;
</code>
</p>

## 具体应用，匹配 import 引入
<code>
const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"];?/g; <br />
let match; <br />
// 匹配 import 语句 <br />
while ((match = importRegex.exec(content)) !== null) { <br />
imports.add(match[1]); <br />
}<br />
</code>

在正则表达式中，圆括号 () 用于定义捕获组。捕获组的作用是将匹配的子字符串存储起来，以便后续使用。每个捕获组匹配的内容会被存储在一个数组中，数组的第一个元素（match[0]）总是整个正则表达式的匹配结果，而后续的元素（match[1], match[2] 等）分别对应每个捕获组的匹配结果。  

当正则表达式 importRegex 匹配到 import something from 'module-name'; 时，exec 方法返回的数组 match 会包含以下内容：   
match[0] = "import something from 'module-name';"   
match[1] = "module-name"  

match[0] 是整个匹配的字符串，即 import something from 'module-name';。  
match[1] 是第一个捕获组匹配的内容，即 module-name。  

</body>
</html>
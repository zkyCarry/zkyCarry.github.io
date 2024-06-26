<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chapter02</title>
	<link rel="stylesheet" type="text/css" href="/regularExpression.css">
</head>
<body>
<h1>第2章 匹配单个字符xxxx</h1>
<h3>2.1 匹配纯文本</h3>

<p>
正则表达式可以包含纯文本，甚至只包含纯文本。<br />

<code>
文本：<br />
Hello World!<br />
正则表达式：<br />
world<br />
结果：<br />
World
</code>
</p>
<h3>2.2 匹配任意字符</h3>
<p>
. 字符（英文句号）可以匹配任何一个单个的字符、字母、数字甚至是 . 字符本身。但元字符 . 不匹配换行符。<br />
<code >
文本：<br />
.here 
there<br />
aaahere<br />
123here<br /><br />
正则表达式：<br />
.here<br /><br />
结果<br />
.here<br />
there<br />
ahere<br />
3here<br /><br />
</code>

在同一个正则表达式里允许使用多个 . 字符，它们既可以连续出现（.. 将匹配任意两个字符），也可以间隔的出现在模式的不同位置。<br />
<code>
文本：<br />
abcdef<br />
cdef<br />
acd.f<br /><br />
正则表达式：<br />
.c..<br /><br />
结果：<br />
bcde<br />
acd.<br />
</code>

在绝大多数的正则表达式实现里， . 只能匹配除换行符以外的任何单个字符。
</p>
	<h3>2.3 匹配特殊字符</h3>
<p >
. 字符在正则表达式里有特殊的含义，如果需要匹配 . 字符，需要在前面加一个 \ （反斜杠）字符来对它进行转义。<br />
<code>
文本：<br />
abc.html<br />
abcd.html<br />
abcdehtml<br /><br />
正则表达式：<br />
.c.\.html<br /><br />
结果：<br />
bcd.html<br />
</code>

在正则表达式里， \ 字符永远出现在一个有着特殊含义的字符序列的开头，这个序列可以由一个或多个字符构成。如果需要搜索 \ 本身，就必须对 \ 字符进行转义，相应的转义序列是两个连续的反斜杠字符。
</p>

</body>
</html>
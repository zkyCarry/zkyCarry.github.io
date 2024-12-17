import{_ as s,c as a,o as n,a1 as p,a7 as l,a8 as e}from"./chunks/framework.a2TuW1qh.js";const _=JSON.parse('{"title":"使用mysql","description":"","frontmatter":{},"headers":[],"relativePath":"记录/使用mysql.md","filePath":"记录/使用mysql.md"}'),t={name:"记录/使用mysql.md"},i=p(`<h1 id="使用mysql" tabindex="-1">使用mysql <a class="header-anchor" href="#使用mysql" aria-label="Permalink to &quot;使用mysql&quot;">​</a></h1><h3 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h3><ol><li>安装参照 <a href="https://www.cnblogs.com/Andya/p/17384722.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/Andya/p/17384722.html</a></li><li>Navicat 数据库图标工具破解参照： <a href="https://www.cnblogs.com/Andya/p/17384722.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/Andya/p/17384722.html</a></li><li>环境变量配置：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export PATH=$PATH:/usr/local/mysql/bin</span></span>
<span class="line"><span>export MYSQL_HOME=/usr/local/mysql</span></span>
<span class="line"><span>export PATH=\${PATH}:\${MYSQL_HOME}/support-files</span></span></code></pre></div><ol start="4"><li>电脑左上角-》系统偏好设置-》mysql-》 这里可以启动和关闭mysql，也可以设置开机自启。</li><li>启动报错问题：<a href="https://stackoverflow.com/questions/4963171/mysql-server-startup-error-the-server-quit-without-updating-pid-file" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/4963171/mysql-server-startup-error-the-server-quit-without-updating-pid-file</a></li><li>启动 / 关闭：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//启动</span></span>
<span class="line"><span>sudo mysql.server start</span></span>
<span class="line"><span>//关闭</span></span>
<span class="line"><span>sudo mysql.server stop</span></span></code></pre></div><ol start="7"><li><p>navicat 连接数据库，这个开始时候输入密码有问题，要点一下，才能输入。 <img src="`+l+'" style="max-width:50%;"></p></li><li><p>创建数据库：选择字符和排序。 <img src="'+e+`" style="max-width:50%;"></p></li><li><p>卸载mysql： mac左上角苹果图标-》 系统偏好设置-》 mysql-》卸载，卸载后，删除mysql文件夹。</p></li></ol><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo  运行一个命令 // 以管理员运行一个命令</span></span>
<span class="line"><span>sudo su  //切换到root用户 之后都是以root用户运行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//本地登陆mysql</span></span>
<span class="line"><span>mysql -u root -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看mysql 启动使用的pid</span></span>
<span class="line"><span>ps aux | grep mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 杀死pid</span></span>
<span class="line"><span>sudo kill -9 PID</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>mac 本地安装的mysql，终端创建数据库的时候，报错ERROR 3680 (HY000)，通过下面的办法可以解决。：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mac上Navicat新建数据库3680错误解决办法</span></span>
<span class="line"><span>1.在设置里关闭mysql，若不能关闭，在终端输入：</span></span>
<span class="line"><span>sudo /usr/local/mysql/support-files/mysql.server stop</span></span>
<span class="line"><span>这里要是不能重启，</span></span>
<span class="line"><span>2.在终端输入：</span></span>
<span class="line"><span>cd /usr/local/mysql/bin/</span></span>
<span class="line"><span>3.回车进入后，登录管理权限：</span></span>
<span class="line"><span>sudo su</span></span>
<span class="line"><span>4.进入之后，需跳过mysql安全验证</span></span>
<span class="line"><span>./mysqld_safe --skip-grant-tables &amp;</span></span>
<span class="line"><span>5.enter后会发现前面关闭的mysql重新跑起来了</span></span>
<span class="line"><span>6.输入：</span></span>
<span class="line"><span>./mysql</span></span>
<span class="line"><span>7.输入：</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span>
<span class="line"><span>8.接下来就可以修改密码了：</span></span>
<span class="line"><span>//旧的mysql</span></span>
<span class="line"><span>SET PASSWORD FOR &#39;root&#39;@&#39;localhost&#39; = PASSWORD(&#39;此处为你的新密码&#39;);</span></span>
<span class="line"><span>//新的8.x版本。</span></span>
<span class="line"><span>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH caching_sha2_password BY &#39;yourpasswd&#39;;</span></span>
<span class="line"><span>9.重启mysql</span></span>
<span class="line"><span>sudo /usr/local/mysql/support-files/mysql.server restart</span></span>
<span class="line"><span>10.输入：</span></span>
<span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span>输入修改的密码登录再进入navicat新建数据库发现，没有提示3680错误。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>暂不知是什么原因。</span></span></code></pre></div>`,12),o=[i];function c(r,d,m,h,u,y){return n(),a("div",null,o)}const g=s(t,[["render",c]]);export{_ as __pageData,g as default};

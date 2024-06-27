import{_ as a,c as t,o as e,a1 as i,a4 as l}from"./chunks/framework.C0cjzZC2.js";const S=JSON.parse('{"title":"域名劫持","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"记录/域名劫持.md","filePath":"记录/域名劫持.md"}'),o={name:"记录/域名劫持.md"},r=i('<h1 id="域名劫持" tabindex="-1">域名劫持 <a class="header-anchor" href="#域名劫持" aria-label="Permalink to &quot;域名劫持&quot;">​</a></h1><h2 id="dns解析步骤" tabindex="-1">DNS解析步骤 <a class="header-anchor" href="#dns解析步骤" aria-label="Permalink to &quot;DNS解析步骤&quot;">​</a></h2><p>浏览器缓存-&gt;操作系统缓存(hosts)-&gt;本地DNS服务器-&gt;根DNS服务器-&gt;顶级域DNS服务器-&gt;权威DNS服务器 <img src="'+l+'" style="max-width:150%;"></p><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><ol><li>本地运营商的DNS服务器被劫持，域名解析的ip地址，被指向第三方灰常网站，导致用户访问出问题。<br> 比如你在昌平被劫持，在朝阳没有被劫持。</li><li>特殊区域政府限制，比如新疆，政府会单独限制一些域名或者ip地址的访问。</li></ol><h2 id="表现" tabindex="-1">表现： <a class="header-anchor" href="#表现" aria-label="Permalink to &quot;表现：&quot;">​</a></h2><ol><li>部分手机会弹出证书错误，(因为访问的域名与真实访问不一致)。</li><li>网页载入失败</li></ol><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><ol><li>使用app内部封装的https请求(不使用webview自带的ajax)，内部请求可以使用自己的 httpDNS解析，不走公网的DNS解析。</li><li>使用备用域名，正常域名被劫持后，使用备用域名。</li><li>电脑上访问手机端的页面，给用户提供 shell/批处理 脚本，更改用户电脑的hosts。从而让用户正常访问。(手机为了系统安全，不能更改hosts，除非越狱或者使用vpn)</li></ol><h2 id="内部-httpdns解析" tabindex="-1">内部 httpDNS解析 <a class="header-anchor" href="#内部-httpdns解析" aria-label="Permalink to &quot;内部 httpDNS解析&quot;">​</a></h2><p>通过域名白名单，配置自己公司的域名，直接通过nginx负载均衡，返回可访问的ip地址。不需要dns解析。</p>',11),s=[r];function h(n,d,_,c,p,m){return e(),t("div",null,s)}const b=a(o,[["render",h]]);export{S as __pageData,b as default};

import{_ as a,c as n,o as s,a1 as e}from"./chunks/framework.a2TuW1qh.js";const v=JSON.parse('{"title":"vue3使用问题记录","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/vue3使用问题记录.md","filePath":"基础/vue3使用问题记录.md"}'),p={name:"基础/vue3使用问题记录.md"},l=e(`<h1 id="vue3使用问题记录" tabindex="-1">vue3使用问题记录 <a class="header-anchor" href="#vue3使用问题记录" aria-label="Permalink to &quot;vue3使用问题记录&quot;">​</a></h1><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-label="Permalink to &quot;代码片段&quot;">​</a></h2><ul><li>全局变量使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>声明：app.config.globalProperties.$confirm = {alert: ()=&gt;{}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在组合式api中使用：</span></span>
<span class="line"><span>import { getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span>const instance = getCurrentInstance();</span></span>
<span class="line"><span>instance.proxy.$confirm.alert()</span></span></code></pre></div><ul><li>provide/inject 注入</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>全局注入声明：</span></span>
<span class="line"><span>let func = () =&gt; {}</span></span>
<span class="line"><span>app.provide(&#39;globalConfirm&#39;, func);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>局部注入声明:</span></span>
<span class="line"><span>import { provide } from &#39;vue&#39;</span></span>
<span class="line"><span>let xxx = &quot;xx&quot;</span></span>
<span class="line"><span>provide(&#39;xxx&#39;, xxx);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用：</span></span>
<span class="line"><span>import { inject } from &#39;vue&#39;</span></span>
<span class="line"><span>const globalConfirm = inject(&#39;globalConfirm&#39;);</span></span>
<span class="line"><span>globalConfirm();</span></span></code></pre></div>`,6),t=[l];function i(o,c,r,u,d,_){return s(),n("div",null,t)}const m=a(p,[["render",i]]);export{v as __pageData,m as default};

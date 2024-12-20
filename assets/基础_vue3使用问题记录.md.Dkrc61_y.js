import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.Bk1mwsJI.js";const v=JSON.parse('{"title":"vue3使用问题记录","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/vue3使用问题记录.md","filePath":"基础/vue3使用问题记录.md"}'),e={name:"基础/vue3使用问题记录.md"},l=p(`<h1 id="vue3使用问题记录" tabindex="-1">vue3使用问题记录 <a class="header-anchor" href="#vue3使用问题记录" aria-label="Permalink to &quot;vue3使用问题记录&quot;">​</a></h1><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-label="Permalink to &quot;代码片段&quot;">​</a></h2><ul><li>全局变量使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>声明：app.config.globalProperties.$confirm = {alert: ()=&gt;{}}</span></span>
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
<span class="line"><span>globalConfirm();</span></span></code></pre></div><ul><li>vue3 props 声明默认值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export interface AvatarProps {</span></span>
<span class="line"><span>  type?: string</span></span>
<span class="line"><span>  img?: string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const props = withDefaults(defineProps&lt;AvatarProps&gt;(), {</span></span>
<span class="line"><span>  type: &#39;normal&#39;,</span></span>
<span class="line"><span>  img: defaultAvatar,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义 props</span></span>
<span class="line"><span>const props = withDefaults(defineProps&lt;{</span></span>
<span class="line"><span>  title: string,</span></span>
<span class="line"><span>  count?: number</span></span>
<span class="line"><span>}&gt;(), {</span></span>
<span class="line"><span>  // 设置默认值</span></span>
<span class="line"><span>  count: 0</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>ref 组件使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;keep-alive&gt;</span></span>
<span class="line"><span>  &lt;component </span></span>
<span class="line"><span>    :is=&quot;currentView&quot; </span></span>
<span class="line"><span>    ref=&quot;refRank&quot; </span></span>
<span class="line"><span>    :showHidden=&quot;ifShowScore&quot; </span></span>
<span class="line"><span>  &gt;&lt;/component&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const refRank = ref(null);</span></span>
<span class="line"><span>if (refRank.value) {</span></span>
<span class="line"><span>  refRank.value.init();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 对应的组件要导出init方法</span></span>
<span class="line"><span>defineExpose({init});</span></span></code></pre></div>`,10),i=[l];function t(c,o,r,u,d,h){return a(),n("div",null,i)}const f=s(e,[["render",t]]);export{v as __pageData,f as default};

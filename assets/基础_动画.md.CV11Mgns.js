import{_ as s,c as a,o as n,a1 as i}from"./chunks/framework.D01xxF7t.js";const E=JSON.parse('{"title":"动画","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"基础/动画.md","filePath":"基础/动画.md"}'),t={name:"基础/动画.md"},e=i(`<h1 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h1><h2 id="requestanimationframe" tabindex="-1">requestAnimationFrame <a class="header-anchor" href="#requestanimationframe" aria-label="Permalink to &quot;requestAnimationFrame&quot;">​</a></h2><p>调用需要循环调用， 每次的间隔大概 17ms。 就是1s 60帧</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue3 中使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animationFrameId;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // console.log(&#39;onMounted&#39;);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is a continuous log message. = &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,time);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用 requestAnimationFrame 来递归调用 logMessage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   animationFrameId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  requestAnimationFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(logMessage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  logMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onUnmounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 组件卸载时取消 requestAnimationFrame</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cancelAnimationFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(animationFrameId);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="vue-动画" tabindex="-1">vue 动画 <a class="header-anchor" href="#vue-动画" aria-label="Permalink to &quot;vue 动画&quot;">​</a></h2><p>Transition 主要用于节点的显示和隐藏加动画，比如弹窗打开和关闭，需要加一个弹出的效果 transition 还可以指定下面的css子节点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;transition name=&quot;modal&quot;&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;isVisible&quot; class=&quot;modal-content&quot; @click.stop&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;close&quot; @click=&quot;close&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;btn-wrap&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;cancel&quot; @click=&quot;close&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;confirm&quot; @click=&quot;close&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/transition&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  .modal-enter-active, .modal-leave-active {</span></span>
<span class="line"><span>    transition: transform 0.5s ease-out, opacity 0.5s ease-out;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .modal-enter-from, .modal-leave-to {</span></span>
<span class="line"><span>    transform: scale(0.5);</span></span>
<span class="line"><span>    opacity: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .modal-enter-to, .modal-leave-from {</span></span>
<span class="line"><span>    transform: scale(1);</span></span>
<span class="line"><span>    opacity: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="css-动画" tabindex="-1">css 动画 <a class="header-anchor" href="#css-动画" aria-label="Permalink to &quot;css 动画&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>待补充</span></span></code></pre></div><h2 id="其他的动画库" tabindex="-1">其他的动画库 <a class="header-anchor" href="#其他的动画库" aria-label="Permalink to &quot;其他的动画库&quot;">​</a></h2><p>tweenjs <a href="https://github.com/tweenjs/tween.js" target="_blank" rel="noreferrer">https://github.com/tweenjs/tween.js</a> star最高<br> animate.css <a href="https://github.com/animate-css/animate.css" target="_blank" rel="noreferrer">https://github.com/animate-css/animate.css</a><br> gsap <a href="https://github.com/greensock/GSAP" target="_blank" rel="noreferrer">https://github.com/greensock/GSAP</a></p>`,11),l=[e];function p(h,o,r,c,k,d){return n(),a("div",null,l)}const u=s(t,[["render",p]]);export{E as __pageData,u as default};

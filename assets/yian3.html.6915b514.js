import{_ as n,o as s,c as a,d as t}from"./app.a2b93015.js";const e={},p=t(`<h1 id="\u521D\u59CB\u5316\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u63D2\u4EF6" aria-hidden="true">#</a> \u521D\u59CB\u5316\u63D2\u4EF6</h1><h2 id="\u{1F4E6}-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u{1F4E6}-\u5B89\u88C5" aria-hidden="true">#</a> \u{1F4E6} \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> yian3 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u{1F697}-\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u{1F697}-\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u{1F697} \u5FEB\u901F\u5F00\u59CB</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//main.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createYian <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;yian3&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;yian3/dist/style.css&#39;</span><span class="token punctuation">;</span>
<span class="token comment">/* import service from &#39;your interceptor filepath&#39; */</span>

<span class="token keyword">const</span> $_Y <span class="token operator">=</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">,</span>  <span class="token comment">//\u5E94\u7528\u5B9E\u4F8B \u2757\uFE0F\u6B64\u9879\u5FC5\u987B</span>
  service<span class="token punctuation">,</span> <span class="token comment">//import your axios interceptor \u2757\uFE0F\u6B64\u9879\u5FC5\u987B</span>
  baseApi<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>\u63A5\u53E3\u524D\u7F00\uFF0C\u5982 <span class="token string">&#39;/v2&#39;</span> \u6216 <span class="token string">&#39;/api&#39;</span>\uFF0C\u53EF\u586B\u591A\u4E2A\u5143\u7EC4\u6210\u6570\u7EC4<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>createYian <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span> $_Y<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//global.d.ts \u5168\u5C40\u58F0\u660E\u6587\u4EF6</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;@vue/runtime-core&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $yian<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;yian3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u{1F9CA}-\u5D4C\u5165axios-\u52A0\u8BBE-1000ms-\u5185\u91CD\u590D\u8BF7\u6C42\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u{1F9CA}-\u5D4C\u5165axios-\u52A0\u8BBE-1000ms-\u5185\u91CD\u590D\u8BF7\u6C42\u9650\u5236" aria-hidden="true">#</a> \u{1F9CA} \u5D4C\u5165axios\uFF0C\u52A0\u8BBE 1000ms \u5185\u91CD\u590D\u8BF7\u6C42\u9650\u5236</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u4E3E\u4F8B1 \u91C7\u7528\u57FA\u7840\u63A5\u53E3\u4E3AbaseApi\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$yian
        <span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            url<span class="token operator">:</span> <span class="token string">&quot;user/login&quot;</span><span class="token punctuation">,</span>
            method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
            params<span class="token operator">:</span> <span class="token punctuation">{</span> username<span class="token operator">:</span> admin<span class="token punctuation">,</span> password<span class="token operator">:</span> <span class="token number">123456</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token number">1</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u4E3E\u4F8B2 \u91C7\u7528\u57FA\u7840\u63A5\u53E3\u4E3AbaseApi\u6570\u7EC4\u4E2D\u7B2C\u4E8C\u4E2A</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$yian
        <span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            url<span class="token operator">:</span> <span class="token string">&quot;academic/getAcademicField&quot;</span><span class="token punctuation">,</span>
            method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
            params<span class="token operator">:</span> <span class="token punctuation">{</span> currentPage<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token number">2</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u4E3E\u4F8B3 \u9ED8\u8BA4\u91C7\u7528\u57FA\u7840\u63A5\u53E3\u4E3AbaseApi\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$yian<span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;qiniu/upload&quot;</span><span class="token punctuation">,</span>
        method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        params<span class="token operator">:</span> formData<span class="token punctuation">,</span>
        headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;multipart/form-data&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function i(c,l){return s(),a("div",null,o)}var r=n(e,[["render",i],["__file","yian3.html.vue"]]);export{r as default};

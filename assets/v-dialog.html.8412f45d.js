import{_ as n,o as s,c as a,d as t}from"./app.4a1b3059.js";const e={},p=t(`<h1 id="v-dialog" tabindex="-1"><a class="header-anchor" href="#v-dialog" aria-hidden="true">#</a> <code>v-dialog</code></h1><h2 id="\u{1F419}-\u4F7F\u7528-v-dialog-\u6307\u4EE4\u6253\u5F00\u5F39\u7A97\u4F53" tabindex="-1"><a class="header-anchor" href="#\u{1F419}-\u4F7F\u7528-v-dialog-\u6307\u4EE4\u6253\u5F00\u5F39\u7A97\u4F53" aria-hidden="true">#</a> \u{1F419} \u4F7F\u7528 <code>v-dialog</code> \u6307\u4EE4\u6253\u5F00\u5F39\u7A97\u4F53</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>//Vue Click\u4E8B\u4EF6\u6807\u7B7E\u5904\u4F7F\u7528v-dialg\u6307\u4EE4\u6848\u4F8B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in List<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${index}-order-shipping\`<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-dialog.orderShipping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{a:index, b:item}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>order<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>1200</span>
    <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>40</span>
    <span class="token punctuation">&gt;</span></span>\u53D1\u8D27<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u{1F9CA}-\u6307\u4EE4\u6807\u7B7E\u5C5E\u6027\u5217\u8868-\u81EA\u5B9A\u4E49a-modal\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u{1F9CA}-\u6307\u4EE4\u6807\u7B7E\u5C5E\u6027\u5217\u8868-\u81EA\u5B9A\u4E49a-modal\u7EC4\u4EF6" aria-hidden="true">#</a> \u{1F9CA} \u6307\u4EE4\u6807\u7B7E\u5C5E\u6027\u5217\u8868 [\u81EA\u5B9A\u4E49a-modal\u7EC4\u4EF6]</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u53EF\u9009\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>id</td><td>\u5FC5\u987Bnecessary</td><td>String</td><td>\u2014\u2014</td><td>key\u503C\uFF0C\u533A\u522B\u4E8E\u5176\u4ED6\u6309\u94AE\u6307\u4EE4\u5F39\u7A97</td></tr><tr><td>v-dialog.[xxx]</td><td>\u5FC5\u987Bnecessary</td><td>\u2014\u2014</td><td>\u2014\u2014</td><td>[xxx]\u7684\u503C\uFF0C\u5FC5\u987B\u8DDFYian.setComponent\u65B9\u6CD5\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E00\u81F4</td></tr><tr><td><code>v-dialog.[xxx] = value</code> \u4F20\u9012\u7ED9\u6307\u4EE4\u7684\u503C</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>any</td><td>{}</td><td>\u4F20\u7ED9dialog\u5185\u90E8\u5B50\u7EC4\u4EF6\u7684\u503C\uFF0C\u652F\u6301\u53D8\u5316\u7684\u6570\u636E\u4F20\u5165</td></tr><tr><td>module</td><td>\u5FC5\u987Bnecessary</td><td>String</td><td>\u2014\u2014</td><td>\u96B6\u5C5E\u6A21\u5757\u540D\u79F0\uFF0C\u5FC5\u987B\u8DDFYian.setComponent\u65B9\u6CD5\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E00\u81F4</td></tr><tr><td>title</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>String</td><td>\u64CD\u4F5C\u7A97\u53E3</td><td>\u5F39\u7A97\u4F53\u6807\u9898</td></tr><tr><td>hideFooter</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>Boolean</td><td>false</td><td>\u662F\u5426\u9690\u85CF\u9875\u811A</td></tr><tr><td>okText</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>String</td><td>\u786E\u5B9A</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u4FEE\u6539</td></tr><tr><td>width</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>Number</td><td>730</td><td>\u5F39\u7A97\u4F53\u5BBD\u5EA6\uFF0C\u5355\u4F4Dpx</td></tr><tr><td>top</td><td>\u975E\u5FC5\u987Bunnecessary</td><td>Number</td><td>15</td><td>\u5F39\u7A97\u4F53\u8DDD\u9876\u9AD8\u5EA6\uFF0C\u5355\u4F4Dvh</td></tr></tbody></table><h3 id="\u{1F9CA}-\u5F39\u7A97\u5185\u90E8\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u{1F9CA}-\u5F39\u7A97\u5185\u90E8\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true">#</a> \u{1F9CA} \u5F39\u7A97\u5185\u90E8\u7EC4\u4EF6\u793A\u4F8B</h3><p>\u2757\uFE0F\u6CE8\u610F\uFF1A 1\u3001\u539F\u5219\u4E0A\u672C\u7EC4\u4EF6setup\u4E2DgetCurrentInstance()\u5E76\u4E0D\u662F\u9879\u76EEapp\u5185\u90E8\u7EC4\u4EF6\u5B9E\u4F8B\u3002 2\u3001\u4F46\u4E3A\u5199\u4EE3\u7801\u4FBF\u5229\uFF0C\u7EE7\u627F\u4E86app\u5185\u90E8\u7EC4\u4EF6\u5B9E\u4F8BappContext.config.globalProperties\u5C5E\u6027\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>//orderShipping\u7EC4\u4EF6\u5185\u5BB9
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  orderShipping\u4E3B\u5185\u5BB9\u5757
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//\u5FC5\u987B\u8FD9\u4E48\u5199\u624D\u80FD\u4F20\u5165v-dialog.orderShipping\u7684value\uFF0C\u4E14value\u5DF2\u652F\u6301\u54CD\u5E94\u5F0F</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//beforeSubmit \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u524D\uFF0C\u6709\u9700\u8981\u7684\u5F02\u6B65\u8BF7\u6C42</span>
    <span class="token keyword">async</span> <span class="token function">beforeSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">,</span> <span class="token string">&#39;\u{1F604}&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u{1F9CA}-\u9879\u76EE\u7ED3\u6784\u76EE\u5F55\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u{1F9CA}-\u9879\u76EE\u7ED3\u6784\u76EE\u5F55\u5EFA\u8BAE" aria-hidden="true">#</a> \u{1F9CA} \u9879\u76EE\u7ED3\u6784\u76EE\u5F55\u5EFA\u8BAE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src
\u251C\u2500\u2500 layout //\u516C\u5171\u5E03\u5C40
\u251C\u2500\u2500 router //vue-router
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 store //piana
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 styles //\u516C\u5171\u6837\u5F0F
\u2502   \u2514\u2500\u2500 ....scss
\u251C\u2500\u2500 icons  //icons\u76EE\u5F55
\u2502   \u251C\u2500\u2500 common
\u2502   \u2502   \u2514\u2500\u2500 xx.svg
\u2502   \u2514\u2500\u2500 js
\u2502       \u2514\u2500\u2500 symbolIcon.ts
\u251C\u2500\u2500 components //\u516C\u7528\u7EC4\u4EF6
\u2502   \u2514\u2500\u2500 ....vue
\u251C\u2500\u2500 views  //\u9875\u9762
\u251C\u2500\u2500 modules  //dialog\u5185\u90E8\u7EC4\u4EF6\u6A21\u5757\u5B58\u653E\u4F4D\u7F6E
\u2502   \u251C\u2500\u2500 order  //\u96B6\u5C5E\u6A21\u5757\u540D
\u2502   \u2502   \u2514\u2500\u2500 orderShipping.vue  //\u96B6\u5C5E\u6A21\u5757\u5B50\u7EC4\u4EF6
\u2502   \u2514\u2500\u2500 index.ts \u6A21\u5757\u6CE8\u518C
\u251C\u2500\u2500 App.vue
\u2514\u2500\u2500 main.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u{1F9CA}-\u5BFC\u5165\u3001\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u{1F9CA}-\u5BFC\u5165\u3001\u5BFC\u51FA" aria-hidden="true">#</a> \u{1F9CA} \u5BFC\u5165\u3001\u5BFC\u51FA</h3><blockquote><ul><li>\u96B6\u5C5E\u6A21\u5757\u6210\u5757\u5BFC\u51FA\u6CE8\u518C</li></ul></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Yian <span class="token keyword">from</span> <span class="token string">&#39;yian&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> orderShipping <span class="token keyword">from</span> <span class="token string">&#39;./order/orderShipping.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">registerModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u53C2\u6570\u4E00\u3001\u53C2\u6570\u4E8C \u4E0E\u5C5E\u6027\u5217\u8868\u4E2D\u7684 module \u548C v-popup.[xxx] \u6307\u4EE4\u4FEE\u9970\u7B26\u9700\u4E00\u81F4</span>
  Yian<span class="token punctuation">.</span><span class="token function">setComponent</span><span class="token punctuation">(</span><span class="token string">&#39;order&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orderShipping&#39;</span><span class="token punctuation">,</span> orderShipping<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>\u6253\u5305\u5165\u53E3\u6587\u4EF6\u4E2D\u8C03\u7528\u6CE8\u518C</li></ul></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u653E\u5728main.ts\u6700\u4E0B\u9762</span>
<span class="token keyword">import</span> registerModules <span class="token keyword">from</span> <span class="token string">&#39;@/modules/index.ts&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[p];function o(l,c){return s(),a("div",null,i)}var u=n(e,[["render",o],["__file","v-dialog.html.vue"]]);export{u as default};
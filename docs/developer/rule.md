# 开发者指南
欢迎！我们很高兴您能来到这里，并非常期待您能有兴趣参与到 Yianky Web集成的贡献中。
当然，在您参与贡献之前，请确保通读以下全文：

## 请遵守行为准则
1. 我们有义务遵守当地法律法规，所有的附带法律风险的行为我们都是拒绝的；
2. 我们反对任何参与者存在贬损评论、人身攻击、骚扰或侮辱他人以及其他非专业行为；
3. 我们有权并有责任删除行为准则不符的内容，不遵守行为准则的开发参与者、公司和项目都会永久列入黑名单，不再予以开放；
4. 我们接受任何人的监督，任何人可通过问题反馈，向我们报告发现的与此行为准则不符的事实存在。

## 如何参与
- V1 版本计划开放部分浏览器集成接口给开发者，请使用[yiansdk](https://github.com/Macrohoo)进行下载。或者在[issues](https://github.com/Macrohoo)中给予问题反馈。
- 开发完的项目部署站点地址发起[申请](https://github.com/Macrohoo)，并在群中@Macrohoo审核通过。

## 代码规范
<div style="color: #AEAFAF; margin-top: 10px">一般性的代码规范示例</div>

- 保持块深度最小。尽可能避免嵌套If条件
```javascript
// CORRECT
if (!comparison) return

if (variable) {
  for (const item of items) {}
} else if (variable2) {
  // Do something here
}

// INCORRECT
if (comparison) {
  if (variable) {
    for (const item in items) {}
  } else if (variable2) {
    // Do something here
  }
} else {
  return
}
```

- 不要使用操作数进行链比较
```javascript
// CORRECT

if (cb) cb()
if (!cb || (cb === fn)) cb()

// INCORRECT

cb && cb()
(!cb || (cb === fn)) && cb()

```

- 所有变量都应该按字母顺序在块的开头声明
```javascript
// CORRECT
function foo () {
  const foo = 'bar'
  const bar = 'foo'

  if (conditional) {}

  ...

  return foo
}

// INCORRECT

function foo () {
  const foo = 'bar'

  if (conditional) {}

  const bar = 'foo'

  ...

  return foo
}

```

- 尽快返回
```javascript
// CORRECT
if (condition) return 'foo'
if (condition2) return 'bar'
// Return must have a blank line above
return 'fizz'

// INCORRECT
const variable = ''

if (condition) {
  variable = 'foo'
} else if (condition2) {
  variable = 'bar'
} else {
  variable = 'fizz'
}

return variable

```
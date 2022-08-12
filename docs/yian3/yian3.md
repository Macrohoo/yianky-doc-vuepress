# 初始化插件

## 📦 安装

```shell
npm install yian3 -S
```

## 🚗 快速开始

```typescript
//main.ts

import { createYian } from 'yian3'
import 'yian3/dist/style.css';
/* import service from 'your interceptor filepath' */

const $_Y = {
  app,  //应用实例 ❗️此项必须
  service, //import your axios interceptor ❗️此项必须
  baseApi: Array<string> [接口前缀，如 '/v2' 或 '/api'，可填多个元组成数组]
};

app.use(createYian as any, $_Y)

```

```typescript
//global.d.ts 全局声明文件
export {};
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $yian: typeof import("yian3");
  }
}
```

### 🧊 嵌入axios，加设 1000ms 内重复请求限制

```typescript
export default defineComponent({
  methods: {
    getList() {
      //举例1 采用基础接口为baseApi数组中第一个
      this.$yian
        .axios(
          {
            url: "user/login",
            method: "post",
            params: { username: admin, password: 123456 },
          },
          1
        )
        .then(/* ... */);
      //举例2 采用基础接口为baseApi数组中第二个
      this.$yian
        .axios(
          {
            url: "academic/getAcademicField",
            method: "get",
            params: { currentPage: 1, pageSize: 10 },
          },
          2
        )
        .then(/* ... */);
      //举例3 默认采用基础接口为baseApi数组中第一个
      this.$yian.axios({
        url: "qiniu/upload",
        method: "post",
        params: formData,
        headers: { "content-type": "multipart/form-data" },
      });
    },
  },
});
```
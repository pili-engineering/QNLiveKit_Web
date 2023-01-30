# qnweb-audit-admin

低代码互动直播内容审核后台管理系统

## 介绍

* 支持对直播房间内容的AI审核，人工核验以及对主播的信息提示和下播操作
* 可以为直播客户提供业务的安全保障
* 为每一个客户提供一个业务独有的风控后台

## 安装依赖

```shell
$ pnpm install
```

## 运行

```shell
$ pnpm dev
```

## 目录介绍

* [src/api](./src/api): 业务请求接口
* [src/config](./src/config): 通用配置
* [src/layouts](./src/layouts): 页面布局组件
* [src/pages](./src/pages): 页面组件
* [src/router](./src/router): 路由
* [src/styles](./src/styles): 通用/全局样式

[src/config](./src/config)，主要包含 axios 请求配置以及默认登录使用的账号。

登录成功后将 `Authorization` 存入 localStorage，后续请求都会带上 `Authorization`。

当登录状态过期后，请求拦截器（axios拦截器）会拦截响应值来判断登录状态是否失效，如果失效则跳转到登录页（/login）自动登录。

用户可以根据自己的需求修改登录逻辑。

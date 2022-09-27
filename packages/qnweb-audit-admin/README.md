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

[src/config](./src/config)，主要包含 axios 请求配置以及默认登录使用的账号.

demo中采用默认账号登录，账号信息在 [src/config](./src/config) 中的 `defaultLogin` 中配置.

登录方式为 auth 组件内判断 localStorage 中是否存在 `Authorization`
，如果存在则直接加载页面，不存在先请求登录接口，登录成功后将 `Authorization` 存入 localStorage 再加载页面.

当登录状态过期后，请求拦截器（axios拦截器）会通过自定义的错误码（499）来判断登录状态是否失效，如果失效则清除 localStorage
并重新登录.

用户可以根据自己的需求修改登录逻辑。

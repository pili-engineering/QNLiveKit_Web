# qnweb-live-demo

互动直播标准接入示例 demo

## 项目介绍

本项目为互动直播标准接入示例 demo

* [src/pages/login](./src/pages/login) 为登录页
* [src/pages/room](./src/pages/room) 为房间页
* [src/pages/room-list](./src/pages/room-list) 为房间列表页

当用户进入房间时，即为加入房间，这时主要逻辑为加入 im 聊天室，加入成功后，用户便可以在房间内通过 im 进行消息通信。

通过轮训调用心跳接口维持心跳（默认 5s 调用一次）。

通过轮训调用查询直播详情接口更新房间内相关信息（默认 3s 调用一次）。

通过 [FLV 播放器](https://github.com/Bilibili/flv.js/) 或 [七牛低延时直播播放器](https://developer.qiniu.com/pili/7730/geek-web-sdk) 播放直播。

默认使用 [FLV 播放器](https://github.com/Bilibili/flv.js/) 播放直播，用户也可以通过播放器切换按钮进行切换。

## 目录介绍

* [src/api](./src/api): 业务请求接口
* [src/config](./src/config): 通用配置文件
* [src/layouts](./src/layouts): 页面布局组件
* [src/pages](./src/pages): 页面组件
* [src/router](./src/router): 路由
* [src/styles](./src/styles): 样式
* [src/utils](./src/utils): 工具类
* [App.tsx](./src/App.tsx): 根组件

## 如何运行

```shell
$ pnpm install 
$ pnpm run dev
```

## 如何打包

```shell
$ pnpm install 
$ pnpm run build
```

## FAQ(常见问题)

### 如何体验 Demo？

地址：https://live-web.qiniu.com

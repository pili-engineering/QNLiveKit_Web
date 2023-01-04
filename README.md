# QNLiveKit_Web

一个基于pnpm，低代码互动直播的monorepo

## 分支

* main：生产环境分支
* develop：测试环境分支

## 介绍

* [qnweb-live-demo](./packages/qnweb-live-demo/README.md): 互动直播标准接入示例demo

## 如何运行/打包

### 安装依赖

```shell
$ pnpm install
```

### 运行

[packageName] 为项目名称，如 qnweb-live-demo

首先需要构建 [packageName] 所需的workspace的依赖（如果依赖于workspace的package的话），然后在执行执行以下命令：

```shell
$ pnpm --filter [packageName] dev
```

### 打包

[packageName] 为项目名称，如 qnweb-live-demo

首先需要构建 [packageName] 所需的workspace的依赖（如果依赖于workspace的package的话），然后在执行执行以下命令：

```shell
$ pnpm --filter [packageName] build
```


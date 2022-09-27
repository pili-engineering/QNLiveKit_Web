# QNLiveKit_Web

一个基于pnpm，低代码互动直播的monorepo

## 介绍

* [qnweb-live-demo](./packages/qnweb-live-demo/README.md): 互动直播标准接入示例demo

## 安装依赖

```shell
$ pnpm install
```

## 运行

[packageName] 为项目名称，如 qnweb-live-demo

首先需要构建 [packageName] 所需的workspace的依赖（如果依赖于workspace的package的话），然后在执行执行以下命令：

```shell
$ pnpm --filter [packageName] dev
```

## 打包

[packageName] 为项目名称，如 qnweb-live-demo

首先需要构建 [packageName] 所需的workspace的依赖（如果依赖于workspace的package的话），然后在执行执行以下命令：

```shell
$ pnpm --filter [packageName] build
```

## 规范

### changelog

使用以下工具来生成changelog:

* [changesets](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)
* [ar-changelog](https://github.com/Spencer17x/arca/tree/main/packages/scripts/ar-changelog)
* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

### 主依赖

* vite: 2.7.0
* react-router-dom: 5.3.3
* @types/react-router-dom: 5.3.3

### SDK打包工具

* [tsup](https://github.com/egoist/tsup)
* [rollup](https://github.com/rollup/rollup)

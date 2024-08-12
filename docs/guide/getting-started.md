# 快速开始

## 准备
1. 提供编译后的程序为windows平台，其他平台可使用源码编译启动。
2. 提供的文本转语音启动包或启动脚本，默认使用nvidia，其他环境需自行修改脚本。

## 安装

### 下载文件
下载最新版本文件夹中的`aigc-server.7z`，`model.7z`
1. [百度网盘](https://pan.baidu.com/s/1Yo2x8QPlYz7YyzuMqXNGcQ?pwd=wenl)
2. [夸克网盘](https://pan.quark.cn/s/2a0fa59c238c)

### 解压文件
1. 解压缩`aigc-server.7z`。
2. 解压缩`model.7z`至`aigc-server`。 

### 文件结构

```
aigc-server
├─model
│  ├─gpt-sovits
│  └─ref-audio
├─project
└─runtime
```

## 启动
服务默认启动端口是`8080`，有端口冲突或者想自定义端口，修改`aigc-server`文件夹下`application.yaml`文件

```yaml
server:
  port: 8080
```

### Windows
使用`aigc-server`文件夹下`启动.bat`脚本启动

## 启动成功
启动后会有如下信息
```
Active code page: 65001
···

启动成功: http://127.0.0.1:8080
```
然后在浏览器中打开链接`http://127.0.0.1:8080`，如果有自定义端口号，需要修改为对应的端口号。

推荐使用`Edge`，`Chrome`，`Firefox`等新版本浏览器。

## 下一步

- 想要集成`文本大模型`，请继续阅读`文本大模型集成`。

- 想要集成`音频大模型`，请继续阅读`音频大模型集成`。

- 想要源码`本地启动`或者`服务端部署`，请继续阅读`运维部署`。


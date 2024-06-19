# 本地源码启动

## 前置准备

- Java21
- MySQL
- Maven
- NodeJS

## 后端启动

### git clone

```shell
git clone https://github.com/zddgg/aigc-platform-server -b dev_db
```

### 数据库初始化
1. 创建`aigc_platform`数据库，执行`db/ddl.sql`
2. 修改`application.yaml`中数据库相关配置

### 启动项目
1. 复制`model`文件夹到项目根路径
2. 启动服务

## 前端启动

### git clone

```shell
git clone https://github.com/zddgg/aigc-platform-webui -b dev_db
```
### 启动项目

```shell
pnpm i
pnpm run dev
```
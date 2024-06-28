# 本地源码启动

## 参数介绍
### 后端服务
- `deployment`部署方式
  - `split`前后端分离部署
  - `integrated`前后端集成部署
- `platform`部署平台，javacv依赖，仅构建生效
    - `windows`
    - `linux`
    - `mac`
- `db.type`数据库类型
    - `mysql`
    - `sqlite`客户端版本

## 前置准备

- Java21
- MySQL
- Maven
- NodeJS

## 后端启动

### git clone

```shell
git clone https://github.com/zddgg/aigc-platform-server -b dev_mysql
```

### 数据库初始化
1. 创建`aigc_platform`数据库，执行`db/mysql.sql`
2. 修改`application.yaml`中数据库相关配置

### 启动项目
1. 复制`model`文件夹到项目根路径
2. 选择启动的profile，`split,windows,mysql`
3. 启动服务

## 前端启动

### git clone

```shell
git clone https://github.com/zddgg/aigc-platform-webui -b dev_mysql
```
### 启动项目

```shell
pnpm i
pnpm run dev
```
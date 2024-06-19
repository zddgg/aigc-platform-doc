# 前端集成打包

## 前端build
```shell
pnpm run build
```

## 后端打包
复制前端build后的`disk`文件夹中文件至后端服务中`resources\static`文件夹中

```
resources
└─static
    └─assets
    └─index.html
    └─logo.png
```

maven打包
```shell
mvn clean package
```

打包后的文件在`target\aigc-platform-server-x.x.x.jar`

jar启动
```shell
java --enable-preview -jar aigc-platform-server-1.0.0.jar -Dspring.config.location=application.yaml -Dspring.profiles.active=integrated
```
!!! `-Dspring.profiles.active=integrated`
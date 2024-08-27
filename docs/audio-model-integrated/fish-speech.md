# Fish-Speech

- 源码仓库：[Fish-Speech](https://github.com/fishaudio/fish-speech)
- 代码分支：`main`
- 启动文件：`tools/api.py`

### 前置准备

下载 `https://github.com/fishaudio/fish-speech/archive/refs/heads/main.zip` 压缩包，解压至`全英文路径`下

下载以下文件至解压后的文件夹

1. [步骤1-安装环境.bat](IMAGE_BASE_URL/files/fish-speech/步骤1-安装环境.bat)
2. [步骤2-启动API.bat](IMAGE_BASE_URL/files/fish-speech/步骤2-启动API.bat)
3. [启动webui.bat](IMAGE_BASE_URL/files/fish-speech/启动webui.bat)

## 环境安装

运行脚本`步骤1-安装环境.bat`

## 启动API

运行脚本`步骤2-启动API.bat`

- GPT-SoVITS API默认启动在`16861`端口。
- 如需调整，修改`步骤2-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`fish-speech`的配置。
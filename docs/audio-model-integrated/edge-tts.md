# Edge-TTS

- 源码仓库：[Edge-TTS](https://github.com/rany2/edge-tts)
- 代码分支：`pipy`
- 启动文件：`api.py`(新增的文件)

### 前置准备

在`全英文路径`下创建文件夹`edge-tts`

下载以下文件至文件夹中

1. [api.py](IMAGE_BASE_URL/files/edge-tts/api.py)
2. [步骤1-安装环境.bat](IMAGE_BASE_URL/files/edge-tts/步骤1-安装环境.bat)
3. [步骤2-启动API.bat](IMAGE_BASE_URL/files/edge-tts/步骤2-启动API.bat)
4. [requirements.txt](IMAGE_BASE_URL/files/edge-tts/requirements.txt)

## 环境安装

运行脚本`步骤1-安装环境.bat`

## 启动API

运行脚本`步骤2-启动API.bat`

- GPT-SoVITS API默认启动在`16862`端口。
- 如需调整，修改`步骤2-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`edge-tts`的配置。
# ChatTTS
- 源码仓库：[ChatTTS](https://github.com/2noise/ChatTTS)
- 代码分支：`main`
- 启动文件：`api.py`(新增的文件)

## 前置准备
下载 `https://github.com/2noise/ChatTTS/archive/refs/heads/main.zip` 压缩包，解压至`全英文路径`下

下载以下文件至解压后的文件夹
1. [api.py](IMAGE_BASE_URL/chat-tts/api.py) 
2. [步骤1-安装环境.bat](IMAGE_BASE_URL/chat-tts/步骤1-安装环境.bat) 
3. [步骤2-启动API.bat](IMAGE_BASE_URL/chat-tts/步骤2-启动API.bat) 
4. [启动webui.bat](IMAGE_BASE_URL/chat-tts/启动webui.bat) 

## 环境安装
运行脚本`步骤1-安装环境.bat`

## 启动API
运行脚本`步骤2-启动API.bat`

- GPT-SoVITS API默认启动在`16863`端口。
- 如需调整，修改`步骤2-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`chat-tts`的配置。
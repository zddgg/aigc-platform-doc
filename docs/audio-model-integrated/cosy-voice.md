# CosyVoice

- 源码仓库：[CosyVoice](https://github.com/FunAudioLLM/CosyVoice.git)
- 代码分支：`main`
- 启动文件：`api.py`(新增的文件)

## 操作步骤

1. 下载整合包(只下载压缩包即可)

   [百度网盘](https://pan.baidu.com/s/1q1Zx-X-jn30BDkhWMuWNaw?pwd=sxxq)

   [夸克网盘](https://pan.quark.cn/s/5be064df9cd7)

2. 模型下载

   点击`模型下载.bat`

3. 模型修改(如有需要)，编辑启动脚本，修改这部分(示例)

   pretrained_models/CosyVoice-300M-Instruct

   修改为

   pretrained_models/CosyVoice-300M-25Hz

4. 双击启动`启动api.bat`

   CosyVoice API默认启动在`16864`端口。

   如需调整，修改`启动api.bat`中端口号，还需要同步修改`aigc-server => 模型`中`cosy-voice`的配置。

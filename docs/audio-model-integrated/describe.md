# 模块介绍

`文本`部分核心功能时将文本输入，转化为音频，字幕等文件。

## 前置准备

1. 运行需要本地推理生成音频的服务（目前包括GPT-SoVITS、Fish-Speech、ChatTTS），
   需要本地电脑配置有一定要求并且已启动对应的服务，且服务配置的对应端口号及配置信息都和本地启动一致，否则在使用相关功能时会失败。

2. 具体要改的配置有`模型`中的`文本大模型`、`音频大模型`，关于各模态大模型的启动部分，可参考各大模型的集成。

## 操作步骤

### 文本转语音

平台利用多种先进的AI模型，包括GPT-SoVITS、Fish-Speech、ChatTTS和Edge-TTS，为小说中的对话和角色生成高质量的语音。
用户可以上传文本内容，在操作界面进行章节拆分，并为每个角色生成相应的语音配音。

#### 使用的技术

1. GPT-SoVITS
2. Fish-Speech
3. ChatTTS
4. Edge-TTS

## 未来计划

······

## 贡献与反馈

欢迎对本项目进行贡献和反馈。如有任何问题或建议，请通过以下方式联系我们：

- GitHub Issues
- 邮件：liuwenliang001@163.com
- QQ讨论群：751706992

感谢您的支持与参与！

## 参考资料

- [GPT-SoVITS GitHub](https://github.com/RVC-Boss/GPT-SoVITS)
- [Fish-Speech GitHub](https://github.com/fishaudio/fish-speech)
- [ChatTTS GitHub](https://github.com/2noise/ChatTTS)
- [Edge-TTS GitHub](https://github.com/rany2/edge-tts)

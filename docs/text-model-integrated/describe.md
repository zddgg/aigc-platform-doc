# 模块介绍

`文本大模型`中主要功能是配置项目中所有文本类型的大模型，使用其文本推理功能。

1. `OpenAI`
2. `Kimi`
3. `DeepSeek`
4. `Qwen`
5. `Spark`
6. `Glm`
7. `Ollama集成的大模型`
8. ...

## 前置准备

1. 使用在线文本大模型时，需要保持网络畅通。
2. 使用本地大模型时。需要注意本地机器是否服务对应模型的运行要求（显存、内存等）。

## 下载模板

1. 在项目根路径下（和jar文件同级）创建文件夹`config`
2. 下载 [text-model-server-template.json](IMAGE_BASE_URL/files/aigc-platform-doc/text-model-server-template.json)
   放到`config`文件夹中。

## 配置步骤

1. 项目启动后，左侧菜单栏进入`模型`页面，选择二级菜单`文本大模型`。
2. 点击`添加文本大模型`

![](IMAGE_BASE_URL/files/aigc-platform-doc/1280534c6d6b449f8c4284dd7d997e11.png)

3. 选择合适的模板，更改模型（如需调整）。

4. 填入对应的apiKey，apiKey在各产品官网获取，切记不要泄露，如有泄露，请立即去官网删除或失效apiKey。

5. 如需更改maxToken参数，请在更多配置中更改，更改是请注意需要选择模型支持填写的参数值，否则调用会失败。

::: danger 注意！
在添加完成后，还需要将对应的文本大模型`激活`才会将当前配置生效。
:::
# Fish-Speech
- 源码仓库：[Fish-Speech](https://github.com/fishaudio/fish-speech)
- 代码分支：`main`
- 启动文件：`tools/api.py`(接口增加`reference_audio_path`字段)

## 前置准备
下载`fish-speech-wenl`压缩包，解压至`全英文路径`下

## 环境安装
运行脚本`步骤1-安装环境.bat`

## 启动API
运行脚本`步骤3-启动API.bat`

- GPT-SoVITS API默认启动在`16861`端口。
- 如需调整，修改`步骤3-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`fish-speech`的配置。

## 原文件修改部分

### tools/api.py

```python
class InvokeRequest(BaseModel):
     text: str = "你说的对, 但是原神是一款由米哈游自主研发的开放世界手游."
     reference_text: Optional[str] = None
     reference_audio: Optional[str] = None
+    reference_audio_path: Optional[str] = None
     max_new_tokens: int = 0
     chunk_length: Annotated[int, Field(ge=0, le=500, strict=True)] = 150
     top_p: Annotated[float, Field(ge=0.1, le=1.0, strict=True)] = 0.7
     ···
```

```python
@torch.inference_mode()
def inference(req: InvokeRequest):
     ···
     prompt_tokens, reference_embedding = encode_reference(
         decoder_model=decoder_model,
         reference_audio=(
             io.BytesIO(base64.b64decode(req.reference_audio))
             if req.reference_audio is not None
-            else None
+            else (
+                io.BytesIO(open(req.reference_audio_path, 'rb').read())
+                if req.reference_audio_path is not None
+                else None
+            )
         ),
-        enable_reference_audio=req.reference_audio is not None,
+        enable_reference_audio=req.reference_audio is not None or req.reference_audio_path is not None,
     )

```
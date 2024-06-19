# Edge-TTS
- 源码仓库：[Edge-TTS](https://github.com/rany2/edge-tts)
- 代码分支：`pipy`
- 启动文件：`api.py`(新增的文件)

## 前置准备
下载`edge-tts-wenl`压缩包，解压至`全英文路径`下

## 环境安装
运行脚本`步骤1-安装环境.bat`

## 启动API
运行脚本`步骤2-启动API.bat`

- GPT-SoVITS API默认启动在`16862`端口。
- 如需调整，修改`步骤2-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`edge-tts`的配置。

## 新增文件

### api.py

```python
import argparse
import io

import edge_tts
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

app = FastAPI()


class TextToSpeechRequest(BaseModel):
    text: str
    voice: str


@app.post("/tts")
async def generate_audio(request: TextToSpeechRequest):
    text = request.text
    voice = request.voice

    try:
        communicate = edge_tts.Communicate(text, voice)
        audio_stream = io.BytesIO()

        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                audio_stream.write(chunk["data"])

        audio_stream.seek(0)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return StreamingResponse(audio_stream, media_type="audio/mp3")


@app.post("/voices")
async def generate_audio():
    voices = await edge_tts.list_voices()
    return voices


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run the FastAPI application")
    parser.add_argument('-p', '--port', type=int, default=8000, help='Port to run the API on')
    args = parser.parse_args()

    uvicorn.run(app, host="0.0.0.0", port=args.port, timeout_keep_alive=120)

```
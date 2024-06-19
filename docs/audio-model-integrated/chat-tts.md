# ChatTTS
- 源码仓库：[ChatTTS](https://github.com/2noise/ChatTTS)
- 代码分支：`main`
- 启动文件：`api.py`(新增的文件)

## 前置准备
下载`chat-tts-wenl`压缩包，解压至`全英文路径`下

## 环境安装
运行脚本`步骤1-安装环境.bat`

## 启动API
运行脚本`步骤2-启动API.bat`

- GPT-SoVITS API默认启动在`16863`端口。
- 如需调整，修改`步骤2-启动API.bat`中端口号，还需要同步修改`aigc-server => 模型`中`chat-tts`的配置。

## 新增文件

### api.py

```python
import argparse
import base64
import io

import numpy as np
import torch
import uvicorn
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from pydub import AudioSegment

import ChatTTS

app = FastAPI()

chat = ChatTTS.Chat()
chat.load_models()


class TTSRequest(BaseModel):
    text: str
    temperature: float = 0.3
    top_P: float = 0.7
    top_K: int = 20
    audio_seed_input: int = 2
    text_seed_input: int = 42
    refine_text_flag: bool = False
    params_refine_text: str = '[oral_2][laugh_0][break_6]'


def generate_audio(request: TTSRequest):
    torch.manual_seed(request.audio_seed_input)
    rand_spk = chat.sample_random_speaker()

    params_infer_code = {
        'spk_emb': rand_spk,
        'temperature': request.temperature,
        'top_P': request.top_P,
        'top_K': request.top_K,
    }
    params_refine_text = {'prompt': request.params_refine_text}

    torch.manual_seed(request.text_seed_input)
    text = request.text

    if request.refine_text_flag:
        text = chat.infer(
            text,
            skip_refine_text=False,
            refine_text_only=True,
            params_refine_text=params_refine_text,
            params_infer_code=params_infer_code
        )

    wavs = chat.infer(
        text,
        skip_refine_text=True,
        params_refine_text=params_refine_text,
        params_infer_code=params_infer_code
    )

    audio_data = wavs[0][0]
    audio_data = audio_data / np.max(np.abs(audio_data))
    audio_data = (audio_data * 32768).astype(np.int16)
    text_data = text[0] if isinstance(text, list) else text

    return [audio_data, text_data]


@app.post("/tts")
async def tts(request: TTSRequest):
    print(request)

    audio_data, text_data = generate_audio(request)
    audio_segment = AudioSegment(
        audio_data.tobytes(),
        frame_rate=24000,
        sample_width=2,
        channels=1
    )

    wav_io = io.BytesIO()
    audio_segment.export(wav_io, format="wav")
    wav_io.seek(0)

    encoded_text_data = base64.b64encode(text_data.encode('utf-8')).decode('utf-8')
    headers = {'X-Text-Data': encoded_text_data}
    return StreamingResponse(wav_io, media_type="audio/wav", headers=headers)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run the FastAPI application")
    parser.add_argument('-p', '--port', type=int, default=8000, help='Port to run the API on')
    args = parser.parse_args()

    uvicorn.run(app, host="0.0.0.0", port=args.port, timeout_keep_alive=120)

```
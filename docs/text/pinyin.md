# 拼音
拼音部分需要用到两个文件
1. 一个汉字有哪些读音
2. 多音字拼音要替换的目标文字

## 汉字拼音数据文件 
数据来源：https://github.com/mozillazg/pinyin-data/blob/master/pinyin.txt

如需修改一个汉字的读音或者增加删减拼音，下载这个文件重命名为`unihan-pinyin.txt`，放到项目的根路径下（和jar文件同级）。

::: warning 提示
已内置原文件，不修改可以不用下载
:::

## 多音字替换文件
下载 [pinyin-unihan.txt](IMAGE_BASE_URL/aigc-platform-doc/pinyin-unihan.txt) 放到项目的根路径下（和jar文件同级）。
打开文件找到目标拼音，在后面加上目标文字

示例：项目中想给以下句子注音

人要是<ruby>行<rp>(</rp><rt style="font-size: 0.8em;">xíng</rt><rp>)</rp></ruby>，干一<ruby>行<rp>(</rp><rt style="font-size: 0.8em;">háng</rt><rp>)</rp></ruby><ruby>行<rp>(</rp><rt style="font-size: 0.8em;">xíng</rt><rp>)</rp></ruby>一<ruby>行<rp>(</rp><rt style="font-size: 0.8em;">háng</rt><rp>)</rp></ruby>，一<ruby>行<rp>(</rp><rt style="font-size: 0.8em;">háng</rt><rp>)</rp></ruby><ruby>行<rp>(</rp><rt style="font-size: 0.8em;">xíng</rt><rp>)</rp></ruby><ruby>行<rp>(</rp><rt style="font-size: 0.8em;">háng</rt><rp>)</rp></ruby><ruby>行<rp>(</rp><rt style="font-size: 0.8em;">háng</rt><rp>)</rp></ruby><ruby>行<rp>(</rp><rt style="font-size: 0.8em;">xíng</rt><rp>)</rp></ruby>

打开下载的`pinyin-unihan.txt`文件
找到`xíng`和`háng`的位置，修改如下
```text
xíng: 形
háng: 航
```
然后重新生成语音。
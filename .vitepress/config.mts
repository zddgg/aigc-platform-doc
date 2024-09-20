import { defineConfig , type DefaultTheme} from 'vitepress'
import markdownItReplaceLink from 'markdown-it-replace-link'

export default defineConfig({
  lang: "zh",
  title: "AIGC Platform",
  description: "",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
  ],

  themeConfig: {
    logo: { src: '/logo-mini.png', width: 24, height: 24 },

    nav: nav(),

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '项目介绍', link: '/docs/guide/project-describe' },
          { text: '快速开始', link: '/docs/guide/getting-started' },
        ]
      },
      {
        text: '文本',
        items: [
          { text: '模块介绍', link: '/docs/text/describe' },
          { text: '拼音', link: '/docs/text/pinyin' },
        ]
      },
      {
        text: '文本大模型集成',
        items: [
          { text: '模块介绍', link: '/docs/text-model-integrated/describe' },
        ]
      },
      {
        text: '音频大模型集成',
        items: [
          { text: '模块介绍', link: '/docs/audio-model-integrated/describe' },
          { text: '编译环境准备', link: '/docs/audio-model-integrated/prepare' },
          { text: 'GPT-SoVITS', link: '/docs/audio-model-integrated/gpt-sovits' },
          { text: 'Fish-Speech', link: '/docs/audio-model-integrated/fish-speech' },
          { text: 'ChatTTS', link: '/docs/audio-model-integrated/chat-tts' },
          { text: 'Edge-TTS', link: '/docs/audio-model-integrated/edge-tts' },
          { text: '自定义模型', link: '/docs/audio-model-integrated/add-custom-model' },
          { text: '参考音频', link: '/docs/audio-model-integrated/add-ref-audio' },
        ]
      },
      {
        text: '运维部署',
        items: [
          { text: '本地启动', link: '/docs/deployment/deployment-local' },
          { text: '集成打包', link: '/docs/deployment/integrated-package' },
          { text: '容器部署', link: '/docs/deployment/deployment-docker' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zddgg/aigc-platform-server' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  markdown: {
    config: (md) => {
      md.use(markdownItReplaceLink, {
        replaceLink(link: string) {
          if (link.startsWith('IMAGE_BASE_URL')) {
            return link.replace('IMAGE_BASE_URL', 'https://files.wenliang.space')
          }
          return link
        }
      })
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '2.6.2',
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/zddgg/aigc-platform-server/blob/main/CHANGELOG.md'
        },
      ]
    }
  ]
}

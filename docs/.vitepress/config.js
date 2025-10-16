import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Glint UI',
  description: 'A Vue 3 based component library',
  
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '安装', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  },
  
  vite: {
    server: {
      host: true,
      fs: {
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
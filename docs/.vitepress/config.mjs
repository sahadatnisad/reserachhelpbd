import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';

export default defineConfig({
  title: 'Research Help BD',
  description: 'Global Open Access Documentation & Academic Research Repository',
  base: '/reserachhelpbd/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Research Help BD | Global Research Docs & Knowledge Base' }],
    ['meta', { property: 'og:site_name', content: 'Research Help BD' }],
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    }
  },

  themeConfig: {
    logo: '🎓',
    siteTitle: 'Research Help BD',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research Tools', link: '/research-tools/reference-managers' },
      { text: 'Templates', link: '/templates/research-proposal-template' },
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    sidebar: {
      '/research-tools/': [
        {
          text: '🛠️ Essential Research Tools',
          items: [
            { text: 'Reference Managers (Zotero & Mendeley)', link: '/research-tools/reference-managers' },
            { text: 'Open Access Databases & Datasets', link: '/research-tools/open-access-research-databases' },
            { text: 'Transcribing Verbatim with Gemini', link: '/research-tools/transcribing-verbatim-with-gemini' },
          ]
        }
      ],
      '/templates/': [
        {
          text: '📋 Ready-to-Use Templates',
          items: [
            { text: 'Research Proposal Template', link: '/templates/research-proposal-template' },
            { text: 'Paper Summary & Notes Template', link: '/templates/paper-summary-template' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sahadatnisad/reserachhelpbd' }
    ],

    footer: {
      message: 'Released under the MIT License. Open Access for Worldwide Researchers.',
      copyright: 'Copyright © 2026 Research Help BD. Founded by Sahadat Nisad.'
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
});

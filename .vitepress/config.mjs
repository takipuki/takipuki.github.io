import { defineConfig } from 'vitepress'

//import mathjax from 'markdown-it-mathjax';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "takipuki",
  description: "UIU solution bank",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // logo: {
    //   light: '/light.png',
    //   dark: '/dark.png'
    // },

    nav: [
      { text: 'About', link: '/about' },
    ],

    head: [
      [ 'link', { rel: 'icon', href: '/favicon.ico' } ],
      [ 'link',
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
      [ 'link',
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
    ],

    sidebar: [
      {
        text: 'SPL',
        items: [
          {
            text: 'Problem Set',
            collapsed: true,
            items: [
              { text: 'Intro',                   link: '/spl/problem-set/intro' },
              { text: 'Operator',                link: '/spl/problem-set/intro' },
              { text: 'Condition',               link: '/spl/problem-set/condition' },
              { text: 'Loop',                    link: '/spl/problem-set/loop' },
              { text: 'Nested Loop',             link: '/spl/problem-set/nested_loop' },
              { text: '1D Array',                link: '/spl/problem-set/1d_array' },
              { text: '2D Array',                link: '/spl/problem-set/2d_array' },
              { text: 'String',                  link: '/spl/problem-set/string' },
              { text: 'Function',                link: '/spl/problem-set/function' },
              { text: 'Structure',               link: '/spl/problem-set/structure' },
              { text: 'Pointers-Recursion-File', link: '/spl/problem-set/pointers-recursion-file' }
            ]
          },
          {
            text: 'Solve Mid',
            collapsed: true,
            items: [
              { text: '24 Spring', link: '/spl/solve-mid/24sp' },
              { text: '23 Summer', link: '/spl/solve-mid/23su' },
              { text: '23 Spring', link: '/spl/solve-mid/23sp' },
              { text: '22 Summer', link: '/spl/solve-mid/22su' }
            ]
          },
          {
            text: 'Solve Fin',
            collapsed: true,
            items: [
              { text: '23 Fall',   link: '/spl/solve-fin/23fa' },
              { text: '23 Summer', link: '/spl/solve-fin/23su' },
              { text: '23 Spring', link: '/spl/solve-fin/23sp' },
            ]
          },
          {
            text: 'Lab',
            collapsed: true,
            items: [
              {
                text: 'Assignments',
                link: '/spl/lab'
              }
            ]
          },
          {
            text: 'Miscellaneous',
            link: '/spl/misc',
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/takipuki' }
    ],
  },

  // markdown: {
  //   math: true,
  // },

})

import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "takipuki",
	description: "UIU solution bank",

	markdown: {
		lineNumbers: true,
		theme: {
			light: 'catppuccin-latte',
			dark: 'catppuccin-frappe',
		},
	},

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
			{ text: 'DM',
				collapsed: true,
				items: [
					{
						text: 'Solve Fin',
						items: [
							{ text: '22 Spring', link: '/courses/dm/solve-fin/22sp.pdf' },
							{ text: '21 Fall',   link: '/courses/dm/solve-fin/21fa.pdf' },
							{ text: '20 Fall',   link: '/courses/dm/solve-fin/20fa.pdf' },
							{ text: '19 Fall',   link: '/courses/dm/solve-fin/19fa.pdf' },
							{ text: '23 Summer', link: '/courses/dm/solve-fin/23su.pdf' },
							{ text: '23 Spring', link: '/courses/dm/solve-fin/23sp.pdf' },
							{ text: '21 Spring', link: '/courses/dm/solve-fin/21sp.pdf' },
							{ text: '21 Summer', link: '/courses/dm/solve-fin/21su.pdf' },
							{ text: '22 Summer', link: '/courses/dm/solve-fin/22su.pdf' },
						]
					},
				]
			},

			{ text: 'SPL',
				collapsed: true,
				items: [
					{ text: 'Problem Set',
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
					{ text: 'Solve Mid',
						collapsed: true,
						items: [
							{ text: '24 Spring', link: '/spl/solve-mid/24sp' },
							{ text: '23 Summer', link: '/spl/solve-mid/23su' },
							{ text: '23 Spring', link: '/spl/solve-mid/23sp' },
							{ text: '22 Summer', link: '/spl/solve-mid/22su' }
						]
					},
					{ text: 'Solve Fin',
						collapsed: true,
						items: [
							{ text: '24 Spring', link: '/spl/solve-fin/24sp' },
							{ text: '23 Fall',   link: '/spl/solve-fin/23fa' },
							{ text: '23 Summer', link: '/spl/solve-fin/23su' },
							{ text: '23 Spring', link: '/spl/solve-fin/23sp' },
							{ text: '22 Fall',   link: '/spl/solve-fin/22fa' },
							{ text: '22 Summer', link: '/spl/solve-fin/22su' },
						]
					},
					{ text: 'Lab',
						collapsed: true,
						items: [
							{ text: 'Solve Fin',
										items: [
											{ text: '23 Fall - A',   link: '/spl/lab/solve-fin/23fa-A' },
											{ text: '23 Fall - B',   link: '/spl/lab/solve-fin/23fa-B' },
											{ text: '23 Summer - A', link: '/spl/lab/solve-fin/23su-A' },
											{ text: '23 Summer - B', link: '/spl/lab/solve-fin/23su-B' },
											{ text: '23 Spring - A', link: '/spl/lab/solve-fin/23sp-A' },
											{ text: '23 Spring - B', link: '/spl/lab/solve-fin/23sp-B' },
											{ text: '22 Fall',       link: '/spl/lab/solve-fin/22fa' },
											{ text: '22 Summer',     link: '/spl/lab/solve-fin/22su' },
								]
							},
						]
					},
				]
			},

			{
				text: 'CALC',
				collapsed: true,
				items: [
					{ text: 'Solve Fin',
						items: [
							{ text: '23 Fall',   link: '/courses/calc/solve-fin/23fa.pdf' },
							{ text: '23 Summer', link: '/courses/calc/solve-fin/23su.pdf' },
							{ text: '22 Fall',   link: '/courses/calc/solve-fin/22fa.pdf' },
							{ text: '22 Summer', link: '/courses/calc/solve-fin/22su.pdf' },
						]
					},
				]
			},

			{
				text: 'OOP',
				collapsed: true,
				items: [
					{ text: 'Solve Mid',
						items: [
							{ text: '24 Summer', link: '/oop/solve-mid/24su' },
							{ text: '24 Spring', link: '/oop/solve-mid/24sp' },
							{ text: '23 Summer', link: '/oop/solve-mid/23su' },
							{ text: '23 Spring', link: '/oop/solve-mid/23sp' },
							{ text: '22 Fall',   link: '/oop/solve-mid/22fa' },
							{ text: '17 Fall',   link: '/oop/solve-mid/17fa' },
						]
					},
					{ text: 'Solve Fin',
						items: [
							{ text: '24 Spring', link: '/oop/solve-fin/24sp' },
							{ text: '23 Fall',   link: '/oop/solve-fin/23fa' },
							{ text: '23 Spring', link: '/oop/solve-fin/23sp' },
							{ text: '22 Summer', link: '/oop/solve-fin/22su' },
							{ text: '22 Spring', link: '/oop/solve-fin/22sp' },
						]
					},
				]
			},

			{
				text: 'LINEAR',
				collapsed: true,
				items: [
					{ text: 'Solve Fin',
						items: [
							{ text: '22 Spring', link: '/courses/linear/solve-fin/22sp.pdf' },
							{ text: '24 Spring', link: '/courses/linear/solve-fin/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/linear/solve-fin/23su.pdf' },
							{ text: '23 Spring', link: '/courses/linear/solve-fin/23sp.pdf' },
							{ text: '22 Fall',   link: '/courses/linear/solve-fin/22fa.pdf' },
						]
					},
				]
			},

			{
				text: 'DLD',
				collapsed: true,
				items: [
					{ text: 'Solve Fin',
						items: [
							{ text: '23 Fall',   link: '/courses/dld/solve-fin/23fa.pdf' },
							{ text: '24 Spring', link: '/courses/dld/solve-fin/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/dld/solve-fin/23su.pdf' },
							{ text: '23 Spring', link: '/courses/dld/solve-fin/23sp.pdf' },
						]
					},
				]
			},

			{
				text: 'EC',
				collapsed: true,
				items: [
					{ text: 'Solve Mid',
						items: [
							{ text: '24 Summer', link: '/courses/ec/solve-mid/24su.pdf' },
							{ text: '24 Spring', link: '/courses/ec/solve-mid/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/ec/solve-mid/23su.pdf' },
							{ text: '23 Spring', link: '/courses/ec/solve-mid/23sp.pdf' },
							{ text: '22 Fall',   link: '/courses/ec/solve-mid/22fa.pdf' },
						]
					},
					{ text: 'Solve Fin',
						items: [
							{ text: '23 Fall',   link: '/courses/ec/solve-fin/23fa.pdf' },
							{ text: '24 Summer', link: '/courses/ec/solve-fin/24su.pdf' },
							{ text: '24 Spring', link: '/courses/ec/solve-fin/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/ec/solve-fin/23su.pdf' },
						]
					},
				]
			},

			{ text: 'PHY',
				collapsed: true,
				items: [
					{ text: 'Solve Mid',
						items: [
							{ text: '23 Fall',   link: '/courses/phy/solve-mid/23fa.pdf' },
							{ text: '24 Spring', link: '/courses/phy/solve-mid/24sp.pdf' },
						]
					},
				]
			},

			{ text: 'VECTOR',
				collapsed: true,
				items: [
					{ text: 'Solve Mid',
						items: [
							{ text: '23 Fall',   link: '/courses/vector/solve-mid/23fa.pdf' },
							{ text: '24 Spring', link: '/courses/vector/solve-mid/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/vector/solve-mid/23su.pdf' },
							{ text: '21 Summer', link: '/courses/vector/solve-mid/21su.pdf' },
						]
					},
					{ text: 'Solve Fin',
						items: [
							{ text: '23 Fall',   link: '/courses/vector/solve-fin/23fa.pdf' },
							{ text: '24 Summer', link: '/courses/vector/solve-fin/24su.pdf' },
							{ text: '24 Spring', link: '/courses/vector/solve-fin/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/vector/solve-fin/23su.pdf' },
						]
					},
				]
			},

			{ text: 'TOC',
				collapsed: true,
				items: [
					{ text: 'Solve Mid',
						items: [
							{ text: '23 Fall',   link: '/courses/toc/solve-mid/23fa.pdf' },
							{ text: '24 Spring', link: '/courses/toc/solve-mid/24sp.pdf' },
							{ text: '23 Summer', link: '/courses/toc/solve-mid/23su.pdf' },
						]
					},
					{ text: 'Solve Fin',
						items: [
							{ text: '23 Fall',   link: '/courses/toc/solve-fin/23fa.pdf' },
							{ text: '24 Summer', link: '/courses/toc/solve-fin/24su.pdf' },
							{ text: '24 Spring', link: '/courses/toc/solve-fin/24sp.pdf' },
						]
					},
				]
			},

			{ text: 'DSA',
				collapsed: true,
				items: [
					{ text: 'Sort', link: '/dsa/sort.md' },
					{ text: 'Lab',
						collapsed: true,
						items: [
							{ text: 'Assingment - 01', link: '/dsa/lab/ass01.md', },
						]
					},
				]
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/takipuki' }
		],
	},
})

import colors from 'vuetify/es5/util/colors'
const routerBase =
	process.env.DEPLOY_ENV === 'GH_PAGES'
		? {
			router: {
				//   base: '/web-toucan/'
				base: '/'
			}
		}
		: {
		}
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'web-toucan-new',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/vuetify'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		[
			'nuxt-i18n',
			{
				locales: [
					{
						code: 'en',
						iso: 'en-US',
						name: 'English',
						file: 'en-US.json'
					},
					{
						code: 'fr',
						iso: 'fr-FR',
						name: 'Français',
						file: 'fr-FR.json'
					}
				],
				// loadLanguagesAsync: true,
				parsePages: false,
				lazy: true,
				langDir: 'lang/',
				defaultLocale: 'en',
				seo: false
			}
		],
		'@nuxtjs/recaptcha'
	],
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		defaultAssets: {
			font: {
				family: 'Lora'
			},
			icons: 'md'
		},
		icons: {
			iconfont: 'md'
		},
		theme: {
			dark: false,
			themes: {
				light: {
					primary: colors.blue.lighten2, //#64B5F6
					accent: colors.grey.darken3,
					secondary: colors.amber.darken1, //#FFB300
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				},
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			},
			options: { customProperties: true }
		}
	},
	recaptcha: {
		hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
		// language: 'en',   // Recaptcha language (v2)
		siteKey: '6LfQ21cfAAAAAA7315I17B26n4vSVXKzck4m4hjN',    // Site key for requests
		version: 2,     // Version
		// size: 'normal'
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	...routerBase
}

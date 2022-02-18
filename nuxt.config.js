const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')
  const posts = await $content('articles').fetch()
  const routes = []

  for (const post of posts) {
    routes.push(`articles/${post.slug}`)
  }

  return routes
}

// Convenience redirects.
const redirects = [
  {
    name: 'twitch',
    to: 'https://www.twitch.tv/jzimz',
    toDeep: 'twitch://stream/jzimz',
  },
  { name: 'twitter', to: 'https://twitter.com/jzimz' },
  { name: 'youtube', to: 'https://www.youtube.com/jzimz' },
  { name: 'yt', to: 'https://www.youtube.com/jzimz' },
  { name: 'discord', to: 'https://discord.gg/aV37twc' },
  {
    name: 'downloads',
    to: 'https://drive.google.com/drive/folders/1VgERaPXuk9pz-YFNMO9emE0FnOT3kRVk?usp=sharing',
  },
  { name: 'bio-template', to: 'https://github.com/jzimz/bio-template' },
]

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jzimz.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/google-gtag-module
    '@nuxtjs/google-gtag',
  ],

  // Hooks: https://content.nuxtjs.org/advanced#hooks
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.readingTime = require('reading-time')(document.text)
      }
    },
  },

  sitemap: {
    hostname: 'https://jzimz.com',
    gzip: true,
    exclude: redirects.map(({ name }) => `/${name}`),
    routes: createSitemapRoutes,
  },

  router: {
    extendRoutes(routes, resolve) {
      const component = resolve(__dirname, 'components/redirect-link.vue')

      redirects.forEach(({ name, to, toDeep }) => {
        routes.push({
          name,
          path: `/${name}`,
          component,
          props: {
            msg: `Sending you over to ${name}.`,
            to,
            toDeep,
          },
        })
      })
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Google Analytics configuration:
  // https://github.com/nuxt-community/google-gtag-module#using-top-level-options
  'google-gtag': {
    id: 'UA-170360802-1',
  },

  // Google Fonts configuration: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
}

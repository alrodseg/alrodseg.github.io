import NuxtConfiguration from '@nuxt/config'

const isDev = process.env.NODE_ENV !== "production";

const config: NuxtConfiguration = {
    dev: isDev,
    devTools: isDev,
    srcDir: 'src/',

    // No SSR
    mode: "spa",

    // Global LESS styles
    css: [
        '~assets/styles/index.less',
    ],
    // Global LESS Mixins/Vars/Functions
    styleResources: {
        less: '~/assets/styles/vars/*.less'
    },
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources'
    ],
    head: {
        titleTemplate: '%s - Alejandro RS',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    }
};

export default config;
import NuxtConfiguration from '@nuxt/config'

const isDev = process.env.NODE_ENV !== "production";

const config: NuxtConfiguration = {
    dev: isDev,
    devTools: isDev,
    srcDir: 'app/',

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
};

export default config;
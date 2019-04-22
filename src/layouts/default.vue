<template>
    <div class="main">
        <Navbar :navList="navItems" />
        <nuxt />
    </div>
</template>

<script lang="ts">
    import Navbar from '~/components/elements/navbar/navbar.vue';
    import {Component, Vue} from "vue-property-decorator";
    import { NavList } from "~/components/elements/navbar/nav-list";

    @Component({
        components: {
            Navbar
        },
    })
    export default class DefaultLayout extends Vue {
        navItems: NavList = [
            { name: 'About me', url: '#' },
            { name: 'Pages', url: '#', children: [
                { name: 'Shop', url: '#' },
                { name: 'Blog', url: '#' },
                { name: 'Gallery', url: '#' }
            ]}
        ];
    }
</script>

<style lang="less">
</style>
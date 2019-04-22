<template>
    <nav class="nav">
        <div class="nav-logo">
            <h3>Header</h3>
        </div>

        <div class="nav-links">
            <ul class="nav-list nav-list-base">
                <template v-for="listEntry in navList">
                    <li class="nav-item">
                        <nuxt-link :to="listEntry.url">{{ listEntry.name }}</nuxt-link>

                        <div class="nav-list-wrapper" v-if="listEntry.children">
                            <ul class="nav-list nav-list-nested">
                                <li class="nav-item nav-item-nested" v-for="nestedListEntry in listEntry.children">
                                    <nuxt-link :to="nestedListEntry.url">{{ nestedListEntry.name }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {NavList} from "~/components/elements/navbar/nav-list";

    @Component
    export default class NavbarElement extends Vue  {
        @Prop({type: Array, default: []}) navList!: NavList;
    }
</script>

<style lang="less">
    .nav,
    .nav-list,
    .nav-links {
        display: flex;
    }

    .nav {
        justify-content: space-between;

        background-color: @color-purple;
        color: @color-white;

        padding: @gap-xl;

        .nav-links {
                align-items: center;
        }

        .nav-list-wrapper {
            position: absolute;
            display: none;
        }
    }

    .nav-list {
        list-style: none;
        margin: 0;
        padding: 0;

        &.nav-list-base > .nav-item {
            margin-right: @gap-xl;

            &:last-child {
                margin-right: 0;
            }

            &:hover .nav-list-wrapper {
                display: block;
            }
        }

        &.nav-list-nested > .nav-item {
            padding: @gap-m;
            background-color: @color-purple-light;

            &:hover {
                background-color: @color-purple-lighter;
            }
        }

        .nav-list-nested {
            position: relative;
            top: @gap-l;
            z-index: 9999;
            flex-direction: column;
        }
    }

</style>
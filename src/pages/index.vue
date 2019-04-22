<template>
    <h3><a href="https://www.netflix.com">Netflix</a> and chill</h3>
</template>

@Component
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title: 'Home page'
        }
    })
    export default class HomePage extends Vue {
    }
</script>
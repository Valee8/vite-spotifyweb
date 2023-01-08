<script>

import MainLinks from './MainLinks.vue'

import RecentlyPlayed from './RecentlyPlayed.vue'


export default {
    name: "AppMain",
    components: {
        MainLinks,
        RecentlyPlayed

    }
}

</script>


<template>

    <MainLinks />

    <RecentlyPlayed />

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
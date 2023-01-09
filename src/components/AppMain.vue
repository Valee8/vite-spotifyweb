<script>

import MainLinks from './MainLinks.vue'

import YourSearches from './YourSearches.vue'

import FavoriteArtists from './FavoriteArtists.vue'

export default {
    name: "AppMain",
    components: {
        MainLinks,
        YourSearches,
        FavoriteArtists,

    }
}

</script>


<template>

    <MainLinks />

    <YourSearches />

    <FavoriteArtists />

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
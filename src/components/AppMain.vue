<script>

import MainLinks from './MainLinks.vue'

import RecentlyPlayed from './RecentlyPlayed.vue'

import FavoriteArtists from './FavoriteArtists.vue'

import MostListened from './MostListened.vue'



export default {
    name: "AppMain",
    components: {
        MainLinks,
        RecentlyPlayed,
        FavoriteArtists,
        MostListened

    }
}

</script>


<template>

    <MainLinks />

    <RecentlyPlayed />

    <FavoriteArtists />

    <MostListened />

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
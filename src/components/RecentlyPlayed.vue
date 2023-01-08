<script>

import { store } from '../store.js';

export default {
    name: "RecentlyPlayed",
    data() {
        return {
            store,
        }
    }
}

</script>


<template>

    <!-- Inizio prima sezione -->
    <section>
        <!-- Titolo -->
        <h2 class="title">
            Recently Played
        </h2>

        <!-- Lista card -->
        <div class="list-cards">

            <!-- Card -->
            <div class="card" v-for="(albums, index) in store.albums" :key="index">

                <a :href="albums.external_urls.spotify" target="_blank">
                    <div class="card-img">
                        <img :src="albums.images[0].url" :alt="albums.name">

                        <font-awesome-icon icon="fa-regular fa-circle-play" class="icon-circle-play" />
                    </div>

                    <h3>
                        {{ albums.name }}
                    </h3>

                    <div class="subtitle">
                        {{ albums.artists[0].name }}
                    </div>
                </a>

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
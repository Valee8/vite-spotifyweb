<script>

import { store } from '../store.js';

export default {
    name: "FavoriteArtists",
    data() {
        return {
            store,
        }
    },
}

</script>


<template>

    <section>
        <!-- Titolo -->
        <h2>
            Artisti preferiti
        </h2>

        <!-- Testo -->
        <div class="subtitle">
            Pi&ugrave; ascolti, pi&ugrave; saranno accurati i suggerimenti.
        </div>

        <!-- Lista card -->
        <div class="list-cards">
            <!-- Card -->
            <div class="card" v-for="(artists, index) in store.artists" :key="index">

                <a :href="artists.external_urls.spotify" target="_blank">
                    <img :src="artists.images[0].url">

                    <h3>
                        {{ artists.name }}
                    </h3>
                </a>

            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
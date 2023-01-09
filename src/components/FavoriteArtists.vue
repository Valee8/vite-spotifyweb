<script>

import { store } from '../store.js';

export default {
    name: "FavoriteArtists",
    data() {
        return {
            store,
            favoriteArtists: [
                {
                    name: 'Linkin Park',
                    url: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
                    image: 'https://i.scdn.co/image/ab6761610000e5eb34e5aa6afc1ba147bfbb0677'
                },
                {
                    name: 'Michael Jackson',
                    url: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
                    image: 'https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa'
                },
                {
                    name: 'Queen',
                    url: 'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d',
                    image: 'https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42'
                }
            ]
        }
    },
}

</script>


<template>

    <section>
        <!-- Titolo -->
        <h2 class="title">
            Artisti preferiti
        </h2>

        <!-- Testo -->
        <div class="subtitle">
            Pi&ugrave; ascolti, pi&ugrave; saranno accurati i suggerimenti.
        </div>

        <!-- Lista card -->
        <div class="list-cards">
            <!-- Card -->
            <div class="card" v-for="(artists, index) in favoriteArtists" :key="index">

                <a :href="artists.url" target="_blank">
                    <img :src="artists.image" :class="{ queen: artists.name === 'Queen' }">
                </a>

                <h3>
                    {{ artists.name }}
                </h3>

            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

img {
    border-radius: 50%;
}

.queen {
    min-height: 183px;
}
</style>
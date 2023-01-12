<script>

import { store } from '../store.js';

export default {
    name: "YourSearches",
    data() {
        return {
            store,
        }
    },
    computed: {
        getTitle() {
            if (store.options.includes("Best")) {
                this.title = "Trending";
            }
            else {
                this.title = "Results";
            }
            return this.title;
        }
    },
}

</script>


<template>

    <!-- Inizio prima sezione -->
    <section>

        <!-- Titolo -->
        <h2 class="title">
            {{ getTitle }}
        </h2>

        <!-- Lista card -->
        <div class="list-cards">

            <div class="card" v-for="(album, index) in store.cardList" :key="index">

                <a :href="album.shareUrl" target="_blank">
                    <div class="card-img">
                        <img :src="album.cover[0].url">

                        <font-awesome-icon icon="fa-regular fa-circle-play" class="icon-circle-play" />
                    </div>
                </a>

                <h1>
                    {{ album.name }}
                </h1>

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
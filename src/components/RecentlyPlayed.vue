<script>

import axios from 'axios';

import { store } from '../store.js';

export default {
    name: "RecentlyPlayed",
    data() {
        return {
            store,
        }
    },
    methods: {
        getAlbums() {
            const options = {
                method: 'GET',
                url: 'https://spotify81.p.rapidapi.com/albums',
                params: { ids: '6PFPjumGRpZnBzqnDci6qJ,4Gfnly5CzMJQqkUFfoHaP3,2ANVost0y2y52ema1E9xAZ,6mUdeDZCsExyJLMdAfDuwh,6i6folBtxKV28WX3msQ4FE,4isNDcdh05jGd91v2h6tbC' },
                headers: {
                    'X-RapidAPI-Key': 'baf622d4edmshd85bb4f97fcc4aep15feaajsne026f2c5830b',
                    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                store.albums = response.data.albums;
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
    mounted() {
        this.getAlbums();
    }
}

</script>


<template>

    <!-- Inizio prima sezione -->
    <section>
        <!-- Titolo -->
        <h2>
            Recently Played
        </h2>

        <!-- Lista card -->
        <div class="list-cards">

            <!-- Card -->
            <div class="card" v-for="(albums, index) in store.albums" :key="index">

                <div class="card-img">
                    <img :src="albums.images[0].url" :alt="albums.name">

                    <font-awesome-icon icon="fa-regular fa-circle-play" class="icon-circle-play" />
                </div>

                <h3>
                    {{ albums.name }}
                </h3>

                <span>
                    {{ albums.artists[0].name }}
                </span>

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

h2 {
    color: #fff;
    font-size: 1.4rem;
    padding-top: 40px;
}

span {
    color: #7C7E83;
    font-size: 0.7rem;
    font-weight: 700;
    padding-top: 10px;
    display: block;
}

.list-cards {
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    color: #fff;

    .card {
        width: calc(100% / 6);
        text-align: center;
        padding-right: 15px;
        padding-bottom: 25px;

        h3 {
            color: #fff;
            font-size: 1rem;
            padding: 10px 5px 0 5px;
        }

        .card-img {
            position: relative;
            cursor: pointer;

            img {
                height: 193px;
            }

            .icon-circle-play {

                color: #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3.5rem;
                display: none;
            }

            &:hover {
                img {
                    filter: brightness(83%);
                }

                .icon-circle-play {
                    display: block;
                }
            }
        }
    }
}

.list-cards.third .card img {
    border-radius: 50%;
}
</style>
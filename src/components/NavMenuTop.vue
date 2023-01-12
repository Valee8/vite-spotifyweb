<script>

import Search from '../components/Search.vue'

import axios from 'axios';

import { store } from '../store.js';

export default {
    name: "NavMenuTop",
    components: {
        Search
    },
    data() {
        return {
            store,
            options: {
                method: 'GET',
                url: 'https://spotify-scraper.p.rapidapi.com/v1/search',
                params: { term: '', type: 'album', limit: '12' },
                headers: {
                    'X-RapidAPI-Key': 'baf622d4edmshd85bb4f97fcc4aep15feaajsne026f2c5830b',
                    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
                }
            },
            linksMenuTop: [
                {
                    text: 'Home',
                    img: '/img/home.svg',
                    url: '/',
                    current: true
                },
                {
                    text: 'Cerca',
                    img: '/img/search.svg',
                    url: '#'
                },
                {
                    text: 'La tua libreria',
                    img: '/img/libreria.svg',
                    url: '#'
                }
            ]
        }
    },
    methods: {
        getCards() {

            if (store.search === '') {
                this.options.params.term = "Best";
            }
            else {
                this.options.params.term = store.search;
            }

            store.options = this.options.params.term;

            console.log(store.search);

            axios.request(this.options).then(function (response) {
                store.cardList = response.data.albums.items;

                console.log(store.cardList);

            }).catch(function (error) {
                console.error(error);
            });
        },
    },
    mounted() {
        this.getCards();
    }
}

</script>


<template>

    <div class="menu-top">

        <!-- Logo Desktop -->
        <img class="logo" src="/img/logo.svg" alt="logo">

        <!-- Logo mobile version -->
        <img class="logo-small" src="/img/logo-small.svg" alt="logo">

        <ul class="nav-links">
            <li :class="{ selected: links.current }" v-for="(links, index) in linksMenuTop" :key="index">
                <a :href="links.url" v-if="links.text != 'Cerca'">
                    <img :src="links.img" :alt="links.text">
                    <span>{{ links.text }}</span>
                </a>
                <Search v-else @search="getCards" />
            </li>
        </ul>

        <!-- Titolo -->
        <h3>
            PLAYLIST
        </h3>

        <a class="add-playlist" href="#">
            <font-awesome-icon icon="fa-solid fa-plus" class="icon-plus" /> <span>Crea Playlist</span>
        </a>

    </div>

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.menu-top {
    font-weight: 700;

    a {
        color: #676767;

        &:hover {
            color: #fff;
        }
    }

    .logo {
        padding: 15px 0 28px 18px;
        display: block;
        width: 150px;
    }

    .logo-small {
        display: none;
    }

    .nav-links {

        li {

            &.selected {
                border-left: 3px solid #adff2f;

                a {
                    color: #fff;
                }
            }

            img {
                width: 25px;
                vertical-align: middle;
                filter: invert(25%);
                max-width: 100%;
            }

            a {
                &:hover {
                    img {
                        filter: invert(0%);

                    }
                }
            }

            span {
                padding-left: 4px;
            }
        }
    }

    h3 {
        color: #fff;
        padding: 18px 0 10px 18px;
        font-size: 0.87rem;
    }

    .add-playlist {
        font-size: 0.9rem;
        padding-left: 18px;

        &:hover {
            .icon-plus {
                background: #fff;
            }
        }

        .icon-plus {
            background: #a3a3a3;
            padding: 10px;
            font-size: 1.1rem;
            color: #000;
            margin-right: 7px;
            vertical-align: middle;
        }
    }
}

@media all and (max-width: 600px) {
    .menu-top {
        flex-grow: 1;

        .add-playlist {
            display: none;
        }

        h3 {
            display: none;
        }

        .nav-links {
            span {
                display: none;
            }
        }

        .logo-small {
            display: block;
            padding-top: 2px;
            width: 20px;
            margin: 0 auto;
        }

        .logo {
            display: none;
        }

        .nav-links {

            li {
                padding: 0;

                &.selected {
                    border-left: 0;
                }
            }

            .logo {
                padding: 0;
            }
        }
    }
}
</style>
<script>

export default {
    name: "NavMenuTop",
    data() {
        return {
            linksMenuTop: [
                {
                    text: 'Home',
                    img: '/img/home.svg',
                    url: '#',
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
    }
}

</script>


<template>

    <div class="menu-top">

        <!-- Logo Desktop -->
        <img class="logo" src="/img/logo.svg" alt="logo">

        <!-- Logo mobile version -->
        <img class="logo-small" src="/img/logo-small.svg" alt="logo">

        <ul class="menu-links">
            <li :class="{ selected: links.current }" v-for="(links, index) in linksMenuTop" :key="index">
                <a :href="links.url">
                    <img :src="links.img" :alt="links.text">
                    <span>{{ links.text }}</span>
                </a>
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

    .menu-links {

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
</style>
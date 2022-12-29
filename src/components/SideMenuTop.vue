<script>

export default {
    name: "SideMenuTop",
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
        list-style-type: none;
        font-size: 0.8rem;

        li {
            padding-left: 18px;
            height: 34px;
            line-height: 34px;

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
}
</style>
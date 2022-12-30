<script>

export default {
    name: "FooterCenter",
    data() {
        return {
            listIcons: [
                {
                    icon: 'fa-solid fa-shuffle',
                    url: '#'
                },
                {
                    icon: 'fa-solid fa-backward-step',
                    url: '#'
                },
                {
                    icon: 'fa-regular fa-circle-play',
                    url: '#',
                    hover: true
                },
                {
                    icon: 'fa-solid fa-forward-step',
                    url: '#'
                },
                {
                    icon: 'fa-solid fa-arrow-rotate-right',
                    url: '#'
                }
            ]
        }
    }
}

</script>


<template>

    <!-- Parte centrale footer -->
    <div class="footer-center">

        <!-- Pulsanti player -->
        <ul class="player-top">
            <li v-for="(icons, index) in listIcons" :key="index">
                <a :href="icons.url" :class="{ button: icons.hover }">
                    <font-awesome-icon :icon="icons.icon" :class="{ play: icons.hover }" />
                </a>
            </li>
        </ul>

        <!-- Barra player -->
        <ul class="player-bottom">
            <li>
                <a href="#">
                    0:25
                </a>
            </li>

            <li class="bar">
                <a href="#">
                    <div class="bar-completed">
                        <div class="bar-circle"> </div>
                    </div>
                </a>
            </li>

            <li>
                <a href="#">
                    4:35
                </a>
            </li>
        </ul>

    </div>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.footer-center {
    width: 400px;

    a {
        color: #fff;
    }

    .player-top,
    .player-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    .player-top {
        gap: 30px;
        font-size: 0.8rem;

        .button {
            font-size: 1.6rem;

            &:hover {
                .play {
                    transform: scale(1.1);
                }
            }
        }
    }

    .player-bottom {
        padding-top: 10px;
        gap: 20px;
        font-size: 0.6rem;
        font-weight: 700;
    }

}
</style>
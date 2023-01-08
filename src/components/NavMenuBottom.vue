<script>

export default {
    name: "NavMenuBottom"
}

</script>


<template>

    <!-- Parte sotto -->
    <div class="menu-bottom">

        <!-- Scritta installa -->
        <div class="install">
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-circle-arrow-down" class="icon-arrow-down" />
                <span>Installa app</span>
            </a>
        </div>

        <!-- Profilo utente -->
        <div class="profile-user">
            <img src="/img/profile.svg" alt="profile">
            <span>John Doe</span>
        </div>

    </div>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.menu-bottom {
    padding: 25px 18px 8px 18px;
    font-size: 0.8rem;
    font-weight: 700;

    .install {
        padding-bottom: 10px;

        span {
            padding-left: 9px;

        }

        a {
            color: #676767;

            &:hover {
                color: #fff;

                .icon-arrow-down {
                    color: #676767;
                }
            }
        }

        .icon-arrow-down {
            vertical-align: middle;
        }

    }

    .profile-user {
        border-top: 1px solid #585858;
        padding-top: 15px;

        img {
            background-color: #808080;
            border-radius: 50%;
            vertical-align: middle;
            width: 25px;
            height: 25px;
        }

        span {
            font-weight: bold;
            color: #fff;
            font-size: 0.9rem;
            padding-left: 10px;
            vertical-align: middle;
        }
    }
}

@media all and (max-width: 600px) {
    .menu-bottom {
        padding: 0 0 8px 0;

        .install {
            padding-bottom: 0;

            span {
                display: none;
            }
        }

        .profile-user {
            border-top: 0;

            img {
                width: 20px;
                height: 20px;
            }

            span {
                display: none;
            }
        }
    }
}
</style>
<script>

export default {
    name: "FooterLeft"
}

</script>


<template>

    <div class="footer-left">

        <!-- Inizio lista -->
        <ul class="list-footer">

            <li>
                <img src="/img/sinister.jpeg" alt="sinister">
            </li>

            <li class="song">
                Sinister
                <span class="song-name">
                    <a href="#">Brano Nome</a>
                </span>
            </li>
        </ul>

        <ul class="list-footer icons">
            <li>
                <a href="#">
                    <font-awesome-icon icon="fa-regular fa-heart" class="icon-heart" />
                </a>
            </li>

            <li>
                <a href="#">
                    <font-awesome-icon icon="fa-regular fa-folder" class="icon-folder" />
                </a>
            </li>
        </ul>



    </div>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.footer-left {
    display: flex;
    align-items: center;

    .list-footer {
        gap: 10px;

        img {
            width: 45px;
            vertical-align: middle;
        }

        .icon-heart,
        .icon-folder {
            color: #7C7E83;
            font-size: 0.9rem;

            &:hover {
                color: #fff;
            }
        }

        .song {
            padding-right: 30px;
        }

        .song-name {
            display: block;
            font-size: 0.6rem;

            a {
                color: #7C7E83;

                &:hover {
                    color: #fff;
                    text-decoration: underline;
                }
            }
        }
    }

}

@media all and (max-width: 1200px) {
    .footer-left {
        .list-footer {
            .song {
                padding-right: 6px;
            }
        }
    }
}

@media all and (max-width: 600px) {
    .footer-left {
        .list-footer {
            gap: 8px;

            img {
                width: 20px;
            }

            &.icons {
                gap: 4px;
                flex-direction: column;

                .icon-heart,
                .icon-folder {
                    font-size: 0.6rem;
                }
            }

            .song {
                padding-right: 6px;
            }

            .song-name {
                font-size: 0.4rem;
            }
        }
    }
}
</style>
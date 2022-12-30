<script>

export default {
    name: "FooterRight",
    data() {
        return {
            listIcons: [
                {
                    icon: 'fa-solid fa-list',
                    url: '#'
                },
                {
                    icon: 'fa-solid fa-desktop',
                    url: '#'
                },
                {
                    icon: 'fa-solid fa-volume-low',
                    url: '#'
                }
            ]
        }
    }
}

</script>


<template>

    <!-- Parte destra footer -->
    <div class="footer-right">

        <!-- Inizio lista -->
        <ul class="list-footer">
            <li v-for="(icons, index) in listIcons" :key="index">
                <a :href="icons.url">
                    <font-awesome-icon :icon="icons.icon" />
                </a>
            </li>

            <li class="bar">
                <a href="#">
                    <div class="bar-completed">
                        <div class="bar-circle"> </div>
                    </div>
                </a>
            </li>
        </ul>

    </div>



</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.footer-right {
    width: 200px;

    a {
        color: #fff;
    }

    .list-footer {
        gap: 17px;
    }
}
</style>
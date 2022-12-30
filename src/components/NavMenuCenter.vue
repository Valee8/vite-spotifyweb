<script>

export default {
    name: "NavMenuCenter",
    data() {
        return {
            linksMenuCenter: [
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                },
                {
                    text: 'Nome Playlist',
                    url: '#',
                }
            ]
        }
    }
}

</script>


<template>

    <!-- Link menu -->
    <ul class="nav-links">

        <li v-for="(links, index) in linksMenuCenter" :key="index">
            <a :href="links.url">{{ links.text }}</a>
        </li>
    </ul>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.nav-links {
    flex-grow: 1;
    overflow-y: auto;
    font-weight: 700;

    a {
        color: #676767;

        &:hover {
            color: #fff;
        }
    }
}
</style>
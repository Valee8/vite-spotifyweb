<script>

export default {
    name: "MainLinks",
    data() {
        return {
            mainLinks: [
                {
                    text: 'IN EVIDENZA',
                    url: '#',
                    current: true
                },
                {
                    text: 'PODCAST',
                    url: '#',
                },
                {
                    text: 'CLASSIFICHE',
                    url: '#',
                },
                {
                    text: 'GENERI E MOOD',
                    url: '#',
                },
                {
                    text: 'NUOVE USCITE',
                    url: '#',
                },
                {
                    text: 'SCOPRI',
                    url: '#',
                }
            ]
        }
    }
}

</script>


<template>

    <!-- Links main -->
    <ul class="main-links">
        <li v-for="(links, index) in mainLinks" :key="index">
            <a :href="links.url"> {{ links.text }} <span v-if="links.current"
                    :class="{ border: links.current }"></span></a>
        </li>
    </ul>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

.main-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 20px;
    font-size: 0.8rem;
    font-weight: 700;

    li {
        a {
            color: #72757A;

            &:hover {
                color: #fff;
            }
        }
    }

    .border {
        border-bottom: 2px solid #ADFF2F;
        display: block;
        width: 30px;
        padding-top: 2px;
        margin: 0 auto;
    }
}
</style>
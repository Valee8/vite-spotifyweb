<script>

import MainLinks from './MainLinks.vue'

export default {
    name: "AppMain",
    components: {
        MainLinks,

    }
}

</script>


<template>

    <MainLinks />

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
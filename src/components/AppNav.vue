<script>

import SideMenuTop from '../components/SideMenuTop.vue'


export default {
    name: "AppNav",
    components: {
        SideMenuTop
    }
}

</script>


<template>

    <nav id="side-menu">
        <SideMenuTop />
    </nav>

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

#side-menu {
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 230px;
    height: calc(100vh - 90px);
    overflow: hidden;
}
</style>
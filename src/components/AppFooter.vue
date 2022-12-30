<script>

import FooterLeft from './FooterLeft.vue'
import FooterCenter from './FooterCenter.vue'

export default {
    name: "AppFooter",
    components: {
        FooterLeft,
        FooterCenter
    }
}

</script>


<template>

    <footer>
        <FooterLeft />
        <FooterCenter />
    </footer>

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #282828;
    height: 90px;
    width: 100%;
    color: #fff;
    padding: 0 10px;
}
</style>
<script>

export default {
    name: "AppHeader",
}

</script>


<template>

    <header>
        Sono un header
    </header>

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;

header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #080b12;
    height: 90px;
    padding-right: 20px;
}
</style>
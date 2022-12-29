<script>

export default {
    name: "AppHeader",
}

</script>


<template>

    <!-- Header -->
    <header>
        <!-- Bottone -->
        <a class="button-upgrade" href="#">EFFETTUA L'UPGRADE</a>
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

    .button-upgrade {
        text-align: center;
        border-radius: 20px;
        border: 1px solid #fff;
        padding: 12px 35px;
        line-height: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        color: #fff;
        display: block;

        &:hover {
            transform: scale(1.08);
        }
    }
}
</style>
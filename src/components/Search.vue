<script>

import { store } from '../store.js';

export default {
    name: "Search",
    data() {
        return {
            store
        }
    }
}

</script>


<template>

    <form>
        <img src="/img/search.svg" class="icon-search">
        <input type="search" placeholder="Cerca un artista" v-model="store.search" class="input-search">
        <button type="submit" @click.prevent="$emit('search')" class="button-search"></button>
    </form>

</template>



<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;


form {
    height: 34px;
    position: relative;
    line-height: 34px;

    .icon-search {
        width: 25px;
        filter: invert(25%);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .input-search {
        font-family: 'Montserrat', sans-serif;
        background-color: transparent;
        font-size: 0.8rem;
        padding-left: 30px;
        border: 0;
        height: 25px;
        color: #676767;
        font-weight: 700;
        cursor: pointer;

        &:focus {
            outline: none;
            filter: invert(0%);
        }
    }

    .button-search {
        display: none;
    }
}

@media all and (max-width: 600px) {

    form {

        .icon-search {
            cursor: pointer;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:hover {
                filter: invert(0%);
            }
        }

        .input-search {
            display: none;
        }
    }
}
</style>
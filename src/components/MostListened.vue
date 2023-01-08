<script>

import { store } from '../store.js';

export default {
    name: "MostListened",
    data() {
        return {
            store,
        }
    },
}

</script>


<template>

    <section>
        <!-- Titolo -->
        <h2 class="title">
            Artisti pi&ugrave; ascoltati nell'ultimo mese
        </h2>

        <!-- Lista card -->
        <div class="list-cards">
            <!-- Card -->
            <div class="card" v-for="(trend, index) in store.moreListened" :key="index">

                <h1>
                    {{ trend.rank }}
                </h1>

                <h3>
                    {{ trend.artist }}
                </h3>

            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use './src/styles/general.scss' as *;
@use './src/styles/partials/variables' as *;
</style>
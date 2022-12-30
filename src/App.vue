<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
    AppNav,
    AppMain
  }
}
</script>

<template>

  <div class="container-flex">

    <AppNav />

    <div class="container-right">

      <AppHeader />

      <main>
        <AppMain />
      </main>

    </div>

    <AppFooter />
  </div>

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;

.container-flex {
  display: flex;
  flex-wrap: wrap;


  .container-right {
    width: calc(100% - 230px);
  }
}

.nav-links {
  list-style-type: none;
  font-size: 0.8rem;

  li {
    padding-left: 18px;
    height: 34px;
    line-height: 34px;
  }
}
</style>

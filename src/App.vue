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


    <AppHeader />

    <main>
      <AppMain />
    </main>


    <AppFooter />
  </div>

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;
</style>

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

main {
  height: calc(100vh - 180px);
  overflow-y: auto;
  padding: 20px;

  img {
    max-width: 100%;
  }
}

.list-footer {
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: 0.8rem;
  font-weight: 700;
}

.bar {
  width: 100%;
  background-color: #606060;
  border-radius: 3px;
  height: 4px;
  display: block;

  .bar-completed {
    background-color: #c1c1c1;
    width: 22%;
    height: 4px;
    border-radius: 3px;
    position: relative;

    .bar-circle {
      background-color: #fdfdfe;
      padding: 4px;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      display: none;
    }
  }

  &:hover {
    .bar-completed {
      background-color: #c2f962;
    }

    .bar-circle {
      display: block;
    }

  }
}
</style>

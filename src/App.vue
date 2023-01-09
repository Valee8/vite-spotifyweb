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

  .title {
    color: #fff;
    font-size: 1.4rem;
    padding-top: 40px;
  }

  .subtitle {
    color: #7C7E83;
    font-size: 0.7rem;
    font-weight: 700;
    padding-top: 5px;
  }

  .list-cards {
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    color: #fff;

    .card {
      width: calc(100% / 6 - 10px);
      margin: 0 5px;
      text-align: center;
      padding-right: 15px;
      padding-bottom: 25px;

      .subtitle {
        padding-top: 0;
      }

      img {
        object-fit: cover;
      }

      h3 {
        color: #fff;
        font-size: 1rem;
        padding: 10px 5px 0 5px;
      }

      .card-img {
        position: relative;

        .icon-circle-play {

          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3.5rem;
          display: none;
        }

        &:hover {
          img {
            filter: brightness(83%);
          }

          .icon-circle-play {
            display: block;
          }
        }
      }
    }
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

@media all and (max-width: 600px) {
  .container-flex {
    .container-right {
      width: calc(100% - 40px);
    }
  }

  .list-footer {
    font-size: 0.6rem;
  }

  main {
    section {
      .list-cards {
        .card {
          width: calc(100% / 2 - 10px);
        }
      }
    }
  }
}
</style>

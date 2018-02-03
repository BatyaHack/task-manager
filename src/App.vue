<template>
  <div id="app">
    <top-bar/>
    <main class="content-block">
      <div class="container  content-block__container">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex';
  import TobBar from './components/TopBar/TobBar.vue'

  export default {
    name: 'App',
    components: {
      'top-bar': TobBar,
    },
    created: function () {
      this.$store.dispatch('getAllTask');
    }
  }
</script>

<style lang="scss">
  @import "sass/style.scss";

  .slide-leave-active {
    animation: goPage 0.7s reverse;
  }

  .slide-enter-active {
    animation: goPage 0.7s;
  }

  @keyframes goPage {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

</style>

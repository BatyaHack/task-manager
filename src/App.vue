<template>
  <div id="app">
    <top-bar/>
    <main class="content-block">
      <div class="container  content-block__container">
        <router-view/>
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
      'top-bar' : TobBar,
    },
  }
</script>

<style lang="scss">
    @import "sass/style.scss";
</style>

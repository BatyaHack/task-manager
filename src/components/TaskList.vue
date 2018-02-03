<template>
      <transition-group name="list" tag="div" class="row  content-block__row"  mode="out-in">
        <task v-for="(task, index) in allTask" :key="index" :content="task"/>
      </transition-group>
</template>

<script>

  import Task from './Task.vue';
  import {mapGetters} from 'vuex';

  export default {
    computed: mapGetters({
      allTask: 'allTask',
    }),
    components: {
      'task': Task,
    }
  }

</script>

<style lang="scss">
  .list-enter-active, .list-leave-active {
    transition: all 1s;
    opacity: 0;
    transform: translateY(30px);
  }

</style>

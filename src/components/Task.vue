<template>
  <article class="card-task  content-block__card-task">
    <header class="card-task__header">
      <div class="card-task__wrapper-img">
        <img :src="content.img" class="card-task__img" alt="card-task-img">
        <div class="card-task__controls">
          <router-link :to="{name: 'TaskEdit', params: {taskID: content.id}}"
                       class="card-task__control  card-task__control--edit">
          </router-link>
          <a @click.prevent="removeTask" class="card-task__control  card-task__control--delete" href="#"></a>
        </div>
      </div>
      <h2 class="card-task__title">{{content.title}}</h2>
    </header>
    <div class="card-task__content">
      <p class="card-task__description">{{content.description}}</p>
      <time class="card-task__time  card-task__time">{{content.time}}</time>
    </div>
    <footer class="card-task__footer">
      <a class="btn  btn--secondary  card-task__btn" href="#">просмотреть</a>
    </footer>
  </article>
</template>

<script>
  export default {
    props: ['content'],
    methods: {
      removeTask: function () {
        this.$store.dispatch('removeTask', {id: this.content.id});
      }
    }
  }

</script>

<style lang="scss">

</style>

<template>
  <div class="new-task  left-block__new-task">
    <form class="new-task__form" action="#">
      <label class="label  label--material  new-task__label">
        <input v-model="newUser.title" class="input  input--primary  label__input" type="text" required>
        <span class="label__title">Заголовок</span>
      </label>
      <label class="label  label--material  new-task__label">
        <textarea v-model="newUser.content" class="input  input--primary  input--textarea  label__input" type="text"
                  required></textarea>
        <span class="label__title">Описание</span>
      </label>

      <button @click.prevent="createdTask" class="btn  btn--primary  new-task__btn">Отправить</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newUser: {
          id: '',
          title: '',
          content: '',
          time: '',
        }
      }
    },
    methods: {
      createdTask: function () {
        this.$store.dispatch('addTask', {
          title: this.newUser.title,
          description: this.newUser.content,
          time: '11.22.33',
        });
      }
    }
  }
</script>

<style lang="scss">

</style>

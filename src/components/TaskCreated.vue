<template>
  <div class="new-task  left-block__new-task">

    <p class="info-text  info-text--error" v-if="errorFlag"> Вы ввели корявые символы</p>
    <div class="info-text" v-else>
      <p>Достпны только символы 1-9 A-Z A-Я !,.?</p>
      <p>Картинка обязательна</p>
    </div>

    <form ref="form" class="new-task__form" action="#">
      <label class="label  label--material  new-task__label">
        <input
          v-model="newUser.title"
          class="input  input--primary  label__input" type="text" required>
        <span class="label__title">Заголовок</span>
      </label>
      <label class="label  label--material  new-task__label">
        <textarea
          v-model="newUser.description"
          class="input  input--primary  input--textarea  label__input" type="text"
          required></textarea>
        <span class="label__title">Описание</span>
      </label>

      <div class="img-prev  new-task__img-prev">
        <label class="img-prev__label">
          <img class="img-prev__img" id="img-pic" :src="newUser.img">
          <span class="img-prev__icon"></span>
          <input type="file" id="test-input" hidden>
        </label>
      </div>

      <button @click.prevent="createdTask" class="btn  btn--primary  new-task__btn">Отправить</button>
    </form>
  </div>
</template>

<script>

  import mixinsBasic from './mixins/mixins'
  import {dataFormat} from '@/config'


  export default {
    mixins: [mixinsBasic],
    data() {
      return {
        newUser: {
          title: '',
          description: '',
          time: '',
          img: '',
        },
      }
    },
    methods: {
      _successInput: function () {
        this.$store.dispatch('addTask', {
          title: this.newUser.title,
          description: this.newUser.description,
          img: this.newUser.img,
          time: new Date().toLocaleString('ru', dataFormat),
        });
        this.$router.push('/');
      },
    },
  }
</script>

<style lang="scss">

  .info-text {
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
    &--error {
      color: red;
    }
  }

  #test-input {
    margin-bottom: 20px;
  }

  .errorAnimation {
    animation-name: errorMove;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.05, .46, .8, .3);
  }

  @keyframes errorMove {
    0% {
      transform: translateX(15px);
    }
    25% {
      transform: translateX(-15px);
    }
    50% {
      transform: translateX(15px);;
    }
    75% {
      transform: translateX(-15px);
    }
    100% {
      transform: translateX(0);
    }

  }
</style>

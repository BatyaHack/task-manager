<template>
  <div class="new-task  left-block__new-task">

    <p class="info-text  info-text--error" v-if="errorFlag"> Вы ввели корявые символы</p>
    <p class="info-text" v-else>Достпны только символы 1-9 A-Z A-Я !,.?</p>

    <form ref="form" class="new-task__form" action="#">
      <label class="label  label--material  new-task__label">
        <input
          v-model="newUser.title"
          class="input  input--primary  label__input" type="text" required>
        <span class="label__title">Заголовок</span>
      </label>
      <label class="label  label--material  new-task__label">
        <textarea
          v-model="newUser.content"
          class="input  input--primary  input--textarea  label__input" type="text"
          required></textarea>
        <span class="label__title">Описание</span>
      </label>
      <button @click.prevent="createdTask" class="btn  btn--primary  new-task__btn">Отправить</button>
    </form>
  </div>
</template>

<script>

  import {dataFormat} from '@/config'

  export default {
    data() {
      return {
        newUser: {
          title: '',
          content: '',
          time: '',
        },
        errorFlag: false,
      }
    },
    methods: {
      // хотя тут нужно сделать как то более универсально. Например через какие-то поля с пользовательскими событиями
      // жаль что тут нет фильтров как в angular
      _updateValue: function (evt) {
        return this.$checkInput(this.newUser.title) && this.$checkInput(this.newUser.content);
      },

      _errorInput: function () {
        this.newUser.title = '';
        this.newUser.content = '';
        this.errorFlag = true;
        this.$refs.form.classList.add('errorAnimation');
        setTimeout(()=> {
          this.$refs.form.classList.remove('errorAnimation');
        }, 1000);
      },

      _successInput: function () {
        this.$store.dispatch('addTask', {
          title: this.newUser.title,
          description: this.newUser.content,
          time: new Date().toLocaleString('ru', dataFormat),
        });
        this.$router.push('/');
      },

      createdTask: function () {
        if (this._updateValue()) {
          this._successInput();
        } else {
          this._errorInput();
        }
      }
    }
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

  .errorAnimation {
    animation-name: errorMove;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.05,.46,.8,.3);
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
      transform: translateX(15px);
    }

  }
</style>

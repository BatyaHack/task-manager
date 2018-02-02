<template>
  <header class="top-bar">
    <div class="container  top-bar__container">

      <section class="logo  top-bar__logo">
        <div class="logo__wrapper">
          <router-link :to="{name: 'TaskList'}" exact-active-class="">
            <img class="logo__img" src="../../assets/logo.png" alt="logo-img">
          </router-link>
        </div>
        <h1 class="logo__seo-title" hidden>такс менеджер</h1>
      </section>

      <nav class="navigation  top-bar__navigation">

        <ul class="navigation__list">
          <li class="navigation__elem">
            <router-link :to="{name: 'TaskCreated'}" class="navigation__link">
              Добавить пользователя
            </router-link>
          </li>
          <li class="navigation__elem">
            <a class="navigation__link" href="#">Пункт 1</a>
          </li>
          <li class="navigation__elem">
            <a class="navigation__link" href="#">Пункт 2</a>
          </li>
        </ul>

        <ul class="navigation__list  navigation__list--mobile">
          <li class="navigation__elem">
            <router-link :to="{name: 'TaskCreated'}" class="navigation__link">
              Добавить пользователя
            </router-link>
          </li>
          <li class="navigation__elem">
            <a class="navigation__link" href="#">Пункт 1</a>
          </li>
          <li class="navigation__elem">
            <a class="navigation__link" href="#">Пункт 2</a>
          </li>
        </ul>

        <div class="navigation__burger">
          <span class="navigation__line"></span>
        </div>

      </nav>

    </div>
  </header>
</template>

<script>

  import tobBarInit from './topBarHelpers';

  export default {
    name: 'TobBar',
    mounted: function () {
      tobBarInit();
    }
  }
</script>

<style lang="scss">

</style>

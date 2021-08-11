<template>
  <header class="header">
    <div class="header__icon">
      <router-link to="/">
        <img src="" alt="Icon" />
      </router-link>
    </div>
    <div class="header__navigation">
      <nav class="navigation">
        <ul class="navigation__items">
          <li class="navigation__item">
            <router-link to="/">About</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/">Contanct</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/">Projects</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/">Blog</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__access"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VHeader',
})
</script>

<style lang="scss" scoped>
@import '~@/scss/mixins', '~@/scss/variables';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  background-color: #ffffff;
  box-shadow: 2px 2px 20px 10px #e9e9e9;
  user-select: none;
  position: sticky;
  top: 0;

  @include breakpoint(md) {
    padding: 0.9rem 1.7rem;
  }

  @include breakpoint(lg) {
    padding: 1rem 1.4rem;
  }

  &__navigation .navigation .navigation__items {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    .navigation__item {
      margin: 0 0.3rem;
      list-style: none;

      @include breakpoint(md) {
        margin: 0 0.6rem;
      }

      @include breakpoint(lg) {
        margin: 0 1rem;
      }

      a {
        text-decoration: none;
        color: $color-gray-500;
        font-weight: 500;

        &:hover {
          color: $color-primary-500;
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>

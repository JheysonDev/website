<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@import '~@/scss/fonts', '~@/scss/normalize';

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden auto;

  kbd,
  samp,
  pre,
  code {
    font-family: 'JetBrains Mono', monospace;
  }
}

@supports (font-variation-settings: normal) {
  #app {
    font-family: 'Inter var', sans-serif;
  }
}
</style>

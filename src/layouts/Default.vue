<template>
  <Head>
    <title>{{ finalTitle }}</title>
  </Head>
  <v-header></v-header>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VHeader from '@/components/VHeader.vue'

const props = defineProps({
  hTitle: {
    type: String,
    required: true,
  },
  hTitleTemplate: {
    type: String,
    default: '{hTitle} - {hSiteName}',
  },
  hDescription: {
    type: String,
    default: 'A software programmer',
  },
  hSiteName: {
    type: String,
    default: 'Jheyson Saavedra',
  },
})

let finalTitle = ref(props.hTitleTemplate)
for (const key in props) {
  finalTitle.value = finalTitle.value.replace(
    `{${key}}`,
    (props as any)[key] // eslint-disable-line
  )
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>

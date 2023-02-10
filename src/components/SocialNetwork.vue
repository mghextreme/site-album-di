<template>
  <a v-if="href" :href="href" target="_blank" :title="title"><img :src="'img/icon-' + social + '.png'" :alt="title" /></a>
</template>

<script>
export default {
  name: 'AlbumLink',
  props: {
    href: String,
    social: String,
    title: String
  }
}
</script>

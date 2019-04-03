<template>
  <div class="container has-text-centered">
    <img :alt="artist.name" class="responsive-image" :src="artist.image" />
    <p class="label">{{ artist.bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailArtistView',
  props: ['artist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
</style>

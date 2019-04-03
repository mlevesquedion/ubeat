<template>
  <section class="section">
    <div class="container has-text-centered">
      <p class="label">{{ artist.bio }}</p>
    </div>
  </section></template
>

<script>
export default {
  name: 'DetailArtistView',
  props: ['artist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
</style>

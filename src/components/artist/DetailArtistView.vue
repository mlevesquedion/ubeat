<template>
  <section class="section">
    <section class="container has-text-centered">
      <p class="label">{{ detailArtist.bio }}</p>
    </section>
  </section></template
>

<script>
export default {
  name: 'DetailArtistView',
  props: ['detailArtist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
</style>

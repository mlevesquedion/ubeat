<template>
  <section class="section">
    <section class="container has-text-centered">
      <p class="label">{{ artist.name }}</p>
    </section>
  </section></template
>

<script>
import ArtistAPI from '@/api/artist';

export default {
  name: 'DetailArtistView',
  props: ['artist'],
  data() {
    return {
      details: ArtistAPI.getDetails(this.artist.name)
    };
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
</style>

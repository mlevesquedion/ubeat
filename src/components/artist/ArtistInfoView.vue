
<template>
  <section class="section">
    <section class="container has-text-centered">
      <p class="label is-size-1">{{ artist.name }}</p>
      <p class="label is-size-3">{{ artist.genre }}</p>
      <a id="itunes-link" :href="artist.url">
        <img
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        >
      </a>
    </section>
  </section>
</template>

<script>
export default {
  name: 'artistInfoView',
  props: ['artist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.section {
  padding-bottom: 0;
}

#itunes-link {
  margin-bottom: 1%;
}
</style>

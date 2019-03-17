<template>
  <section class="section">
    <section class="container has-text-centered">
      <p class="label is-size-1">{{ artist.name }}</p>
      <p class="label is-size-3">{{ artist.genre }}</p>
      <a :href="artist.url" id="itunes-link">
        <img
          alt="Find this artist on iTunes"
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        />
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

#itunes-link {
  margin-bottom: 1%;
}
</style>

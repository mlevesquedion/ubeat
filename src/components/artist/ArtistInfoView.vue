<template>
  <section class="section">
    <div class="container has-text-centered">
      <p class="label is-size-1">{{ artist[0].name }}</p>
      <p class="label is-size-3">{{ artist[0].genre }}</p>

      <img
        :alt="artist[0].name"
        class="responsive-image is-round"
        :src="artist[1].image"
      />
      <p class="label">{{ artist[1].bio }}</p>
      <a :href="artist[0].url" id="itunes-link">
        <img
          alt="Listen on Apple Music"
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        />
      </a>
    </div>
  </section>
</template>

<script>
import DetailArtist from './DetailArtist';

export default {
  name: 'artistInfoView',
  components: { DetailArtist },
  props: ['artist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>

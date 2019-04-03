<template>
  <section class="section">
    <div class="container has-text-centered">
      <p class="label is-size-1">{{ artist.name }}</p>
      <p class="label is-size-3">{{ artist.genre }}</p>
      <a :href="artist.url" id="itunes-link">
        <img
          alt="Listen on Apple Music"
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        />
      </a>
    </div>
    <DetailArtist :artistName="artist.name"></DetailArtist>
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

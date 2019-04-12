<template>
  <section class="section">
    <div class="container has-text-centered">
      <p class="label is-size-1">{{ artist.name }}</p>
      <p class="label is-size-3">{{ artist.genre }}</p>
      <ArtistDetails :artistName="artist.name" />
      <a :href="artist.url" id="itunes-link">
        <img
          alt="Listen on Apple Music"
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        />
      </a>
    </div>
  </section>
</template>

<script>
import ArtistDetails from './ArtistDetails';

export default {
  name: 'artistInfoView',
  props: ['artist'],
  components: { ArtistDetails }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>

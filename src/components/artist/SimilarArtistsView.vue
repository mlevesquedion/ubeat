<template>
  <section class="section">
    <h1 class="title is-primary has-text-centered">Similar Artists</h1>
    <div class="similarArtists-gallery">
      <div
        class="similarArtist"
        v-for="similarArtist in artist[1].similarArtists"
      >
        <router-link
          :to="{ name: 'Artist', params: { id: 373843476 } }"
          class="responsive-image-container"
        >
          <img
            :alt="similarArtist.name"
            :src="similarArtist.image[5]['#text']"
            class="responsive-image"
          />
        </router-link>
        <label class="artist-name subtitle">{{ similarArtist.name }}</label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SimilarArtistsView',
  props: ['artist']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.section {
  padding-top: 0;
}

.responsive-image-container {
  width: 25vw;
  height: 25vw;
  min-width: 250px;
  min-height: 250px;
  max-width: 350px;
  max-height: 350px;
  padding: 2% 2%;
}

.similarArtists-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.similarArtist {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.artist-name {
  width: 200px;
  text-align: center;
  color: $text;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<template>
  <div>
    <div>
      <header>
        <h1
          id="welcome-message"
          class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered"
        >
          Welcome to UBeat!
        </h1>
        <p
          id="summary-message"
          class="is-size-3-desktop is-size-4-tablet is-size-5-mobile is-primary flex-centered"
        >
          Manage your favorite albums, artists, playlists and tracks. UBeat does
          it all and lets you listen to your music, your way.
        </p>
        <ImageCarousel />
        <div class="links">
          <router-link
            to="/artist/491675603"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Artist
          </router-link>
          <router-link
            to="/album/1083396755"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Album
          </router-link>
          <router-link
            to="/playlists"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Playlists
          </router-link>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import ImageCarousel from '@/components/utils/ImageCarousel';

export default {
  name: 'app',
  components: {
    ImageCarousel
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#welcome-message {
  font-family: $stylish-text;
  padding-top: 1em;
  margin-bottom: 0;
}

#summary-message {
  text-align: center;
  padding: 1em 20px;
}

.links {
  padding-top: 1em;
  display: flex;
  justify-content: center;
}
</style>

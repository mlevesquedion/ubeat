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
        <image-carousel />
        <h2
          id="punchline-message"
          class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered"
        >
          <p>Get started now !</p>
          <router-link
            to="/artist/3941697"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Artist
          </router-link>
          <router-link
            to="/album/1125488753"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Album</router-link
          >
          <router-link
            to="/playlists"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary bumped-right"
            >Playlists</router-link
          >
        </h2>
      </header>
    </div>
  </div>
</template>

<script>
import ImageCarousel from '@/components/utils/ImageCarousel';

export default {
  name: 'app',
  components: {
    'image-carousel': ImageCarousel
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#welcome-message {
  font-family: $stylish-text;
  padding-top: 1em;
}

#summary-message {
  text-align: center;
  padding: 1em 20px;
}

#punchline-message {
  font-family: $stylish-text;
  padding-top: 2em;
}
</style>

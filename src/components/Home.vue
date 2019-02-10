<template>
  <div>
    <div>
      <header>
        <h1
          id="welcome-message"
          class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered"
        >Welcome to UBeat!</h1>
        <p
          id="summary-message"
          class="is-size-3-desktop is-size-4-tablet is-size-5-mobile is-primary flex-centered"
        >
          Manage your favorite albums, artists, playlists and songs. UBeat does it
          all and lets you listen to your music, your way.
        </p>
        <image-carousel/>
        <h2
          id="punchline-message"
          class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered"
        >
          <p>Get started now !</p>
          <router-link
            to="/user"
            id="get-started-arrow"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile"
          >
            <i class="fa fa-arrow-circle-right bumped-right is-primary"></i>
          </router-link>
        </h2>
      </header>
    </div>
  </div>
</template>

<script>
import ImageCarousel from '@/components/ImageCarousel';

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
  text-shadow: $black-border;
  padding-top: 1em;
}

#summary-message {
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: $black-border;
}

#punchline-message {
  font-family: $stylish-text;
  padding-top: 2em;
  text-shadow: $black-border;
}

#get-started-arrow {
  border-color: $primary;
  text-shadow: $black-border;
}
</style>

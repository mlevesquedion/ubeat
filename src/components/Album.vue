<template>
  <div class="container">
    <section class="section">
      <div class="columns">
        <div class="column is-one-third is-one-quarter-widescreen ">
          <figure class="media-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/8b/Foo_Fighters_-_There_Is_Nothing_Left_to_Lose.jpg"
              alt="Album cover"
            >
          </figure>
          <div>
            <span class="tag is-success is-medium is-rounded">Rock</span>
            <span class="tag is-success is-medium is-rounded">Alternative</span>
          </div>
        </div>
        <div class="column">
          <p class="title is-1 has-text-light">There Is Nothing Left to Lose</p>
          <div class="subtitle is-6 has-text-grey-light">
            <p>Foo Fighters (1998)</p>
            <p>11 songs, 46 minutes</p>
          </div>
          <p>
            There Is Nothing Left to Lose is the third studio album by
            American rock band Foo Fighters, released on November 2, 1999 by
            Roswell and RCA Records.
          </p>
        </div>
      </div>
      <song-list></song-list>
    </section>
    <footer class="footer">
      <div class="has-text-centered">
        <a
          href="https://itunes.apple.com/ca/album/there-is-nothing-left-to-lose/278229648"
          style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music) no-repeat;width:158px;height:45px;"
        ></a>
      </div>
    </footer>
  </div>
</template>

<script>
import SongList from '@/components/SongList';

export default {
  name: 'album',
  components: {
    'song-list': SongList
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.footer {
  background: $background;
}
</style>

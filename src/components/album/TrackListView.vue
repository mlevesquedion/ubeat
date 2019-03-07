<template>
  <section class="section">
    <div class="track-gallery">
      <div :key="track.id" v-for="track in tracks" class="track">
        <hr v-if="track.number !== 1" class="horizontal-line"/>
        <div class="track-line level is-mobile is-bordered" style="padding: 5px">
          <div class="level-left">
            <div>{{ track.number }}. {{ track.name }}</div>
          </div>
          <div class="level-right">
            <a class="has-text-light track-button" style="text-decoration: none;"
               v-on:click="addTrackToList(track.id)">
            <span class="icon is-medium">
              <i class="fas fa-plus-circle"></i>
            </span>
            </a>
            <a class="has-text-light track-button" style="text-decoration: none;"
               v-on:click="playTrack(track.id)">
                        <span class="icon is-medium bumped-left">
              <i class="fas fa-play-circle"></i>
            </span>
            </a>
            <span>{{ formatTrackDuration(track.duration) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer has-text-centered">
      <a :href="this.tracks[0].url">
        <img class="img-responsive" src="@/static/images/get_on_itunes.png" alt="iTunes">
      </a>
    </div>
  </section>
</template>

<script>
  import trackDurationFormatter from '../../formatting/trackDurationFormatter';

  export default {
    name: 'trackListView',
    props: ['tracks'],
    methods: {
      formatTrackDuration(seconds) {
        return trackDurationFormatter.format(seconds);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  .horizontal-line {
    margin: 0;
    border-bottom: 1px solid #3B3B3B;
  }

  .level {
    margin-bottom: 0;
  }

  .track-line:hover {
    background-color: $primary;
  }

  .footer {
    background: $background;
  }

  .footer img {
    min-width: 150px;
    width: 15%;
  }

  .img-responsive {
    min-width: 180px;
    max-width: 150px;
    height: auto;
  }

  #box-track {
    box-shadow: 0 0px 100px 0 #1B1B1B;
    text-align: center;
    padding: 20px;
  }

  .track-line .track-button {
    visibility: hidden;
  }

  .track-line:hover .track-button {
    visibility: visible;
  }

</style>

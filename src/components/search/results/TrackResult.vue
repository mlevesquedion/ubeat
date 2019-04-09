<template>
  <div class="is-bordered level is-mobile">
    <div class="is-primary is-clipped">
      {{ track.name }}, {{track.artist}} - {{ track.album }}
    </div>

    <div class="level-right">
      <div class="button-group bumped-left">
        <AsyncPlaylistDropdown
          :isRight="true"
          :onPlaylistClick="addTrackToPlayList(track)"
          :playlists="playlists"
        >
          <a class="navbar-link has-text-light">
                <span class="icon is-medium">
                  <i class="fas fa-plus-circle"></i>
                </span>
          </a>
        </AsyncPlaylistDropdown>
        <a class="has-text-light" v-if="track.id === playingTrackId">
              <span class="icon is-medium">
                <i class="fas fa-stop-circle" v-on:click="stopTrack()"></i>
              </span>
        </a>
        <a class="has-text-light" v-else>
              <span class="icon is-medium">
                <i class="fas fa-play-circle" v-on:click="playTrack(track)"></i>
              </span>
        </a>
      </div>

      <span class="level-right">
        {{ formatTrackDuration(track.duration) }}
      </span>
    </div>
  </div>
</template>

<script>
  import Jukebox from '@/utils/jukebox';
  import AsyncPlaylistDropdown from '../../playlists/dropdown/AsyncPlaylistDropdown';
  import PlaylistAPI from '../../../api/playlist';
  import trackDurationFormatter from '../../../utils/trackDurationFormatter';

  export default {
    name: 'TrackResult',
    props: ['track', 'playlists'],
    data() {
      return {
        jukebox: new Jukebox(this.stopTrack, this.onPlaybackError)
      };
    },
    computed: {
      playingTrackId() {
        return this.jukebox.playingTrackId();
      },
      albumUrl() {
        return this.tracks[0].url;
      }
    },
    beforeDestroy() {
      this.stopTrack();
    },
    methods: {
      playTrack(url) {
        this.jukebox.play(url);
      },
      stopTrack() {
        this.jukebox.stop();
      },
      onPlaybackError(track) {
        this.$toasted.show(`Could not play track ${track.name}!`, {
          type: 'ubeat-error'
        });
      },
      formatTrackDuration(seconds) {
        return trackDurationFormatter.format(seconds);
      },
      addTrackToPlayList(track) {
        return (playlist, onTrackAdded) => {
          PlaylistAPI.addTrackToPlaylist(track, playlist.id)
            .then(_ =>
              this.$toasted.show(
                `Track ${track.name} was successfully added to playlist ${
                  playlist.name
                  }!`,
                { type: 'ubeat-success' }
              )
            )
            .then(onTrackAdded)
            .catch(_ =>
              this.$toasted.show(
                `Could not add ${track.name} to playlist ${playlist.name}.`,
                { type: 'ubeat-error' }
              )
            );
        };
      },
    },
    components: {
      AsyncPlaylistDropdown
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  .is-clipped {
    min-width: 100px;
    width: 50vw;
  }

  // Have to add this style to prevent the dropdown arrow fromBackend showing
  .navbar-link {
    padding: 0 !important;
    margin: 0 !important;

    &::after {
      border: 0 solid transparent !important;
    }
  }
</style>

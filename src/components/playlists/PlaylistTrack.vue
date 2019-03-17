<template>
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item is-clipped">
        {{ trackDescription }}
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <PlaylistDropdown
          :isRight="true"
          :onPlaylistClick="addToPlaylist"
          :playlists="playlists"
        >
          <button class="button is-primary is-small">
            <span class="icon is-medium">
              <i class="fas fa-plus-circle"></i>
            </span>
          </button>
        </PlaylistDropdown>
      </div>
      <div class="level-item">
        <button
          :class="{ 'is-loading': isDeleting }"
          @click="deleteTrack"
          class="button level-item is-danger is-small"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import PlaylistAPI from '../../api/playlist';
import PlaylistDropdown from './dropdown/PlaylistDropdown';

export default {
  name: 'PlaylistTrack',
  props: ['track', 'index', 'playlist', 'playlistIndex', 'playlists'],
  data() {
    return {
      isDeleting: false
    };
  },
  computed: {
    trackDescription() {
      const track = this.track;
      return `${track.name}, ${track.artist} - ${track.album}`;
    }
  },
  methods: {
    deleteTrack() {
      this.isDeleting = true;
      PlaylistAPI.deleteTrack(this.playlist.id, this.track.id)
        .then(_ => {
          this.$root.$emit('delete-track', this.playlistIndex, this.index);
        })
        .catch(_err => {
          this.isDeleting = false;
          this.$toasted.show(
            `We could not delete track ${this.track.name} from playlist ${
              this.playlist.name
            } at this time.`,
            { type: 'ubeat-error' }
          );
        });
    },
    addToPlaylist(playlist, onTrackAdded) {
      PlaylistAPI.addTrackToPlaylist(this.track, playlist.id)
        .then(newPlaylist => this.$root.$emit('track-added', newPlaylist))
        .then(_ =>
          this.$toasted.show(
            `Track ${this.track.name} was successfully added to playlist ${
              playlist.name
            }!`,
            { type: 'ubeat-success' }
          )
        )
        .then(onTrackAdded)
        .catch(_ =>
          this.$toasted.show(
            `Could not add ${this.track.name} to playlist ${playlist.name}.`,
            { type: 'ubeat-error' }
          )
        );
    }
  },
  components: {
    PlaylistDropdown
  }
};
</script>

<style scoped lang="scss">
.is-clipped {
  width: 50vw;
  max-width: 1000px;
}
</style>

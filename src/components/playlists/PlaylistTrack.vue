<template>
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <TrackDetails :track="track" />
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <PlaylistDropdown
          :isRight="true"
          :onPlaylistClick="addToPlaylist"
          :playlists="userPlaylists"
        />
      </div>
      <div class="level-item" v-if="!isReadOnly">
        <DeleteButton
          :deleteAction="deleteTrack"
          :isDeleting="isDeleting"
          :isSmall="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PlaylistAPI from '../../api/playlist';
import PlaylistDropdown from './dropdown/PlaylistDropdown';
import DeleteButton from './DeleteButton';
import TrackDetails from '../album/track/TrackDetails';

export default {
  name: 'PlaylistTrack',
  props: [
    'track',
    'index',
    'playlist',
    'playlistIndex',
    'userPlaylists',
    'isReadOnly'
  ],
  data() {
    return {
      deletePending: false,
      isDeleting: false
    };
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
    TrackDetails,
    PlaylistDropdown,
    DeleteButton
  }
};
</script>

<style lang="scss" scoped>
.is-clipped {
  width: 50vw;
  max-width: 1000px;
}

.fixed-width {
  width: 27px;
}
</style>

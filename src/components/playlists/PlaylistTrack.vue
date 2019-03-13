<template>
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item ">
        {{ trackDescription }}
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <button
          class="button level-item is-danger is-small"
          :class="{ 'is-loading': isDeleting }"
          @click="deleteTrack"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import PlaylistAPI from '../../api/playlists';

export default {
  name: 'PlaylistTrack',
  props: ['track', 'index', 'playlist', 'playlistIndex'],
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
    }
  }
};
</script>

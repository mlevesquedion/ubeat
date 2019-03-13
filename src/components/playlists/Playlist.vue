<template>
  <Accordion>
    <template slot="header">
      <div class="level is-mobile">
        <div class="level-left">
          <span class="subtitle is-primary level-item">{{
            playlist.name
          }}</span>
        </div>
        <div class="level-right">
          <button
            class="button level-item is-danger"
            :class="{ 'is-loading': isDeleting }"
            @click.stop="deletePlaylist"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </template>
    <template slot="body">
      <div v-if="isEmpty">{{ emptyPlaylistMessage }}</div>
      <PlaylistTrack
        :track="t"
        :playlist="playlist"
        :index="ti"
        :playlistIndex="index"
        v-for="(t, ti) in playlist.tracks"
        :key="t.id"
      />
    </template>
  </Accordion>
</template>
<script>
import Accordion from '../utils/Accordion';
import isEmpty from '../../utils/isEmpty';
import PlaylistAPI from '../../api/playlists';
import PlaylistTrack from './PlaylistTrack';

export default {
  name: 'Playlist',
  props: ['playlist', 'index'],
  data() {
    return {
      emptyPlaylistMessage: 'This playlist is empty!',
      isDeleting: false
    };
  },
  computed: {
    isEmpty() {
      return isEmpty(this.playlist.tracks);
    }
  },
  methods: {
    deletePlaylist() {
      this.isDeleting = true;
      PlaylistAPI.deletePlaylist(this.playlist.id)
        .then(_ => this.$root.$emit('delete-playlist', this.index))
        .catch(_err => {
          this.isDeleting = false;
          this.$toasted.show(
            `We could not delete playlist ${this.playlist.name} at this time.`,
            { type: 'ubeat-error' }
          );
        });
    }
  },
  components: { PlaylistTrack, Accordion }
};
</script>

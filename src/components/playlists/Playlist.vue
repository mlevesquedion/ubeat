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
          <div id="update-name" class="level-right bumped-left">
            <input
              id="update-name-input"
              class="input bumped-left"
              placeholder="New name"
              type="text"
              @click.stop=""
              v-model.lazy="newPlaylistName"
            />
            <button
              @click.stop="updateName()"
              class="button level-item is-primary"
              :class="{ 'is-loading': isUpdating }"
            >
              Update
            </button>
          </div>
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
        :key="`${t.id}${ti}`"
      />
      <!-- Have to concatenate id and index to guarantee unicity -->
    </template>
  </Accordion>
</template>
<script>
import PlaylistAPI from '@/api/playlist';
import Accordion from '../utils/Accordion';
import isEmpty from '../../utils/isEmpty';
import PlaylistTrack from './PlaylistTrack';

export default {
  name: 'Playlist',
  props: ['playlist', 'index'],
  data() {
    return {
      emptyPlaylistMessage: 'This playlist is empty!',
      newPlaylistName: '',
      isUpdating: false,
      isDeleting: false
    };
  },
  computed: {
    isEmpty() {
      return isEmpty(this.playlist.tracks);
    }
  },
  methods: {
    updateName() {
      if (!this.newPlaylistName) {
        this.$toasted.show('Cannot give playlist empty name!', {
          type: 'ubeat-error'
        });
        return;
      }
      this.isUpdating = true;
      PlaylistAPI.updatePlaylistName(this.playlist.id, this.newPlaylistName)
        .then(playlist =>
          this.$root.$emit(
            'update-playlist-name',
            this.playlist.id,
            playlist.name
          )
        )
        .then(this.resetName)
        .catch(_err =>
          this.$toasted.show(
            `Could not update playlist ${this.playlist.name}.`,
            { type: 'ubeat-error' }
          )
        );
    },
    resetName() {
      this.isUpdating = false;
      this.newPlaylistName = '';
    },
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

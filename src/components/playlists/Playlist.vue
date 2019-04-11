<template>
  <Accordion>
    <template slot="header">
      <div class="level is-mobile">
        <div class="level-left">
          <span class="editing-group" v-if="isEditing">
            <input
              :placeholder="playlist.name"
              @click.stop=""
              @keydown.enter="updateName()"
              class="input bumped-left width-responsive"
              type="text"
              v-model="newPlaylistName"
            />
          </span>
          <span class="subtitle is-primary is-clipped level-item" v-else>{{
            playlist.name
          }}</span>
        </div>
        <div class="level-right">
          <button
            @click.stop="stopEditing()"
            class="button level-item is-warning"
            v-if="isEditing"
          >
            <i class="fas fa-ban"></i>
          </button>
          <button
            :class="{ 'is-loading': isUpdating }"
            @click.stop="edit()"
            class="button level-item is-primary"
            v-else
          >
            <i class="fas fa-pencil-alt"></i>
          </button>
          <DeleteButton
            :deleteAction="deletePlaylist"
            :is-deleting="isDeleting"
          />
        </div>
      </div>
    </template>
    <template slot="body">
      <div v-if="isEmpty">{{ emptyPlaylistMessage }}</div>
      <PlaylistTrack
        :index="ti"
        :key="`${t.uniqueId}${ti}`"
        :playlist="playlist"
        :playlistIndex="index"
        :playlists="playlists"
        :track="t"
        v-for="(t, ti) in playlist.tracks"
      />
    </template>
  </Accordion>
</template>
<script>
import PlaylistAPI from '@/api/playlist';
import Accordion from '../utils/Accordion';
import isEmpty from '../../utils/isEmpty';
import PlaylistTrack from './PlaylistTrack';
import PlaylistState from './playlistState';
import DeleteButton from './DeleteButton';

export default {
  name: 'Playlist',
  props: ['playlist', 'index', 'playlists'],
  data() {
    return {
      PlaylistState,
      emptyPlaylistMessage: 'This playlist is empty!',
      newPlaylistName: this.playlist.name,
      state: PlaylistState.NORMAL
    };
  },
  computed: {
    isEmpty() {
      return isEmpty(this.playlist.tracks);
    },
    isUpdating() {
      return this.state === PlaylistState.UPDATING;
    },
    isDeleting() {
      return this.state === PlaylistState.DELETING;
    },
    isEditing() {
      return this.state === PlaylistState.EDITING;
    }
  },
  methods: {
    edit() {
      this.state = PlaylistState.EDITING;
    },
    stopEditing() {
      this.state = PlaylistState.NORMAL;
    },
    updateName() {
      if (this.newPlaylistName === this.playlist.name) {
        return;
      }
      if (!this.newPlaylistName.trim()) {
        this.$toasted.show('Cannot give playlist empty name!', {
          type: 'ubeat-error'
        });
        return;
      }
      this.state = PlaylistState.UPDATING;
      PlaylistAPI.updatePlaylistName(this.playlist, this.newPlaylistName)
        .then(playlist => {
          this.$root.$emit(
            'update-playlist-name',
            this.playlist.id,
            playlist.name
          );
          this.resetName(playlist.name);
        })
        .catch(_err => {
          this.$toasted.show(
            `Could not update playlist ${this.playlist.name}.`,
            { type: 'ubeat-error' }
          );
          this.stopEditing();
        });
    },
    resetName(name) {
      this.state = PlaylistState.NORMAL;
      this.newPlaylistName = name;
    },
    deletePlaylist() {
      this.state = PlaylistState.DELETING;
      PlaylistAPI.deletePlaylist(this.playlist.id)
        .then(_ => this.$root.$emit('delete-playlist', this.index))
        .catch(_err => {
          this.state = PlaylistState.NORMAL;
          this.$toasted.show(
            `We could not delete playlist ${this.playlist.name} at this time.`,
            { type: 'ubeat-error' }
          );
        });
    }
  },
  components: { DeleteButton, PlaylistTrack, Accordion }
};
</script>

<style lang="scss" scoped>
.editing-group {
  display: flex;
  align-items: flex-start;
}

.width-responsive {
  width: 35vw;
}

.is-clipped {
  width: 40vw;
}
</style>

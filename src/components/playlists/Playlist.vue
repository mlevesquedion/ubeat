<template>
  <Accordion>
    <template slot="header">
      <div class="level is-mobile">
        <div class="level-left">
          <span v-if="isEditing" class="editing-group">
            <input
              class="input bumped-left width-responsive"
              placeholder="New name"
              type="text"
              @click.stop=""
              @keydown.enter="updateName()"
              v-model="newPlaylistName"
            />
            <button
              @click.stop="updateName()"
              class="button level-item is-primary"
              :class="{ 'is-loading': isUpdating }"
            >
              <i class="fas fa-check"></i>
            </button>
            <button
              @click.stop="stopEditing()"
              class="button level-item is-warning"
              :class="{ 'is-loading': isUpdating }"
            >
              <i class="fas fa-ban"></i>
            </button>
          </span>
          <span v-else class="subtitle is-primary level-item">{{
            playlist.name
          }}</span>
        </div>
        <div class="level-right">
          <button
            class="button level-item is-primary"
            v-if="!isEditing"
            @click.stop="edit()"
          >
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button
            class="button level-item is-danger size-correction"
            :class="{ 'is-loading': isDeleting }"
            @click.stop="deletePlaylist()"
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
import PlaylistState from './playlistState';

export default {
  name: 'Playlist',
  props: ['playlist', 'index'],
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
      if (!this.newPlaylistName) {
        this.$toasted.show('Cannot give playlist empty name!', {
          type: 'ubeat-error'
        });
        return;
      }
      if (this.newPlaylistName === this.playlist.name) {
        return;
      }
      this.state = PlaylistState.UPDATING;
      PlaylistAPI.updatePlaylistName(this.playlist.id, this.newPlaylistName)
        .then(playlist => {
          this.$root.$emit(
            'update-playlist-name',
            this.playlist.id,
            playlist.name
          );
          this.resetName(playlist.name);
        })
        .catch(_err =>
          this.$toasted.show(
            `Could not update playlist ${this.playlist.name}.`,
            { type: 'ubeat-error' }
          )
        );
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
  components: { PlaylistTrack, Accordion }
};
</script>

<style scoped lang="scss">
.editing-group {
  display: flex;
  align-items: flex-start;
}

.width-responsive {
  width: 20vw;
}

.size-correction {
  width: 42px;
  height: 36px;
}
</style>

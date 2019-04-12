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
        <div class="level-right" v-if="!isStatic">
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
        <div class="level-right" v-else-if="isNotOwnPlaylist">
          <button
            @click.stop="stealPlaylist()"
            :class="{ 'is-loading': isStealing }"
            class="button level-item is-primary"
          >
            <i class="fas fa-copy"></i>
          </button>
        </div>
      </div>
    </template>
    <template slot="body">
      <div v-if="isEmpty">This playlist is empty!</div>
      <PlaylistTrack
        v-for="(t, ti) in playlist.tracks"
        :track="t"
        :index="ti"
        :key="`${t.uniqueId}${ti}`"
        :playlist="playlist"
        :playlistIndex="index"
        :userPlaylists="userPlaylists"
        :isStatic="isStatic"
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
  props: ['playlist', 'index', 'userPlaylists', 'isStatic'],
  data() {
    return {
      newPlaylistName: this.playlist.name,
      state: PlaylistState.NORMAL,
      isStealing: false
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
    },
    isNotOwnPlaylist() {
      return this.playlist.ownerEmail !== this.$root.$data.email();
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
          this.setName(playlist.name);
        })
        .catch(_err => {
          this.$toasted.show(
            `Could not update playlist ${this.playlist.name}.`,
            { type: 'ubeat-error' }
          );
          this.stopEditing();
        });
    },
    setName(name) {
      this.stopEditing();
      this.newPlaylistName = name;
    },
    deletePlaylist() {
      this.state = PlaylistState.DELETING;
      PlaylistAPI.deletePlaylist(this.playlist.id)
        .then(_ => this.$root.$emit('delete-playlist', this.index))
        .catch(_err => {
          this.state = PlaylistState.NORMAL;
          this.$toasted.show(
            `Could not delete playlist ${this.playlist.name} at this time.`,
            { type: 'ubeat-error' }
          );
        });
    },
    stealPlaylist() {
      this.isStealing = true;
      PlaylistAPI.stealPlaylist(this.playlist)
        .then(_ => {
          this.isStealing = false;
          this.$toasted.show(
            `Successfully stole playlist ${this.playlist.name}!`,
            { type: 'ubeat-success' }
          );
        })
        .catch(_err => {
          this.isStealing = false;
          this.$toasted.show(
            `Could not steal playlist ${this.playlist.name} at this time.`,
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

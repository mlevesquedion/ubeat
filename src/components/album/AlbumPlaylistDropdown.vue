<template>
  <AsyncPlaylistDropdown
    :isRight="isRight"
    :onPlaylistClick="addAlbumToPlaylist"
    :playlists="playlists"
  >
    <div class="tag is-medium bumped-down hover-hand">
      <i class="fas fa-plus-circle"></i>
      <span class="bumped-right" :class="{ 'hidden-mobile': hideTextOnMobile }"
        >Album</span
      >
    </div>
  </AsyncPlaylistDropdown>
</template>

<script>
import PlaylistAPI from '../../api/playlist';
import AsyncPlaylistDropdown from '../playlists/dropdown/AsyncPlaylistDropdown';

export default {
  name: 'AlbumPlaylistDropdown',
  props: ['isRight', 'album', 'playlists', 'hideTextOnMobile'],
  methods: {
    addAlbumToPlaylist(playlist, onAlbumAdded) {
      PlaylistAPI.addAlbumToPlaylist(this.album.id, playlist.id)
        .then(_ =>
          this.$toasted.show(
            `Album ${this.album.name} was successfully added to playlist ${
              playlist.name
            }!`,
            { type: 'ubeat-success' }
          )
        )
        .then(onAlbumAdded)
        .catch(_ =>
          this.$toasted.show(
            `Could not add at least one track from ${
              this.album.name
            } to playlist ${playlist.name}.`,
            { type: 'ubeat-error' }
          )
        );
    }
  },
  components: { AsyncPlaylistDropdown }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.bumped-down {
  margin-top: 5px;
}

.hover-hand {
  cursor: pointer;
}

// Overriding Bulma stuff, need to use !important
.tag {
  border: 1px solid white;
  background-color: $primary !important;
  color: white !important;
}

.tag:hover {
  color: #e2e2e2 !important;
}

.hidden-mobile {
  @media screen and (max-width: $navbar-breakpoint) {
    display: none;
  }
}
</style>

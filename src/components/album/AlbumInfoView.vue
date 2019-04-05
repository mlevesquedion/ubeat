<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left image">
        <img :alt="album.name" :src="album.src" class="responsive-image" />
      </figure>
    </div>
    <div class="column">
      <p class="title is-size-3 has-text-light">{{ album.name }}</p>
      <div class="subtitle has-text-grey-lighter">
        <div class="label is-size-5">
          <a>
            <router-link
              :to="{ name: 'Artist', params: { id: album.artistId } }"
              id="artist-name"
            >
              <span>{{ album.artist }}</span>
            </router-link>
          </a>
        </div>
        <div class="is-size-6 has-text-grey-lighter">
          <p class="label">{{ album.genre }} ({{ album.year }})</p>
          <p class="label">{{ album.trackCount }} tracks</p>
          <AsyncPlaylistDropdown
            :isRight="false"
            :onPlaylistClick="addAlbumToPlaylist"
            :playlists="playlists"
          >
            <div class="tag is-medium bumped-down hover-hand" id="add-album">
              <i class="fas fa-plus-circle"></i>
              <span class="bumped-right">Album</span>
            </div>
          </AsyncPlaylistDropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaylistAPI from '../../api/playlist';
import AsyncPlaylistDropdown from '../playlists/dropdown/AsyncPlaylistDropdown';

export default {
  name: 'AlbumInfoView',
  props: ['album', 'playlists'],
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

.section {
  padding-bottom: 0;
  padding-top: 0;
}

#artist-name {
  color: $primary;
}

// Overriding Bulma stuff, need to use !important
.tag {
  border: 1px solid white;
  background-color: $primary !important;
  color: $white !important;
}

.tag:hover {
  color: #e2e2e2 !important;
}

.bumped-down {
  margin-top: 5px;
}

.hover-hand {
  cursor: pointer;
}
</style>

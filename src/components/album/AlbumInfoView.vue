<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left image">
        <img class="img-responsive" :src="album.artworkUrl" alt="album.name" />
      </figure>
    </div>
    <div class="column is-three-quarters">
      <p class="title is-size-3 has-text-light">{{ album.name }}</p>
      <div class="subtitle has-text-grey-lighter">
        <div class="label is-size-5">
          <a>
            <router-link
              :to="{ name: 'Album', params: { id: album.artistId } }"
              id="artist-name"
            >
              <span>{{ album.artist }}</span>
            </router-link>
          </a>
        </div>
        <div class="is-size-6 has-text-grey-lighter">
          <p class="label">{{ album.genre }} ({{ album.year }})</p>
          <p class="label">{{ album.trackCount }} tracks</p>
          <PlaylistDropdown
            :playlists="playlists"
            :on-playlist-click="addAlbumToPlaylist"
            :is-right="false"
          >
            <div id="add-album" class="tag is-medium bumped-down">
              <i class="fas fa-plus-circle"></i>
              <span class="bumped-right">Album</span>
            </div>
          </PlaylistDropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaylistAPI from '../../api/playlists';
import PlaylistDropdown from './PlaylistDropdown';

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
  components: { PlaylistDropdown }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.section {
  padding-bottom: 0;
  padding-top: 0;
}

.img-responsive {
  display: block;
  min-width: 180px;
  max-width: 200px;
  height: auto;
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
  color: $white-ter !important;
}

.bumped-down {
  margin-top: 5px;
}
</style>

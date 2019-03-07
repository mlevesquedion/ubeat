<template>
  <section class="section columns">
    <div class="column is-narrow ">
      <figure class="media-left image">
        <img class="img-responsive" :src="album.artworkUrl" alt="album.name"/>
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
          <p class="label">{{ album.trackCount }} songs</p>
        </div>
        <PlaylistDropdown :playlists="playlists" :on-playlist-click="addAlbumToPlaylist">
          <div
            id="add-album"
            class="tag is-medium button navbar-link is-arrowless"
          >
            <i class="fas fa-plus-circle"></i
            ><span style="padding-left:5px">Album</span>
          </div>
        </PlaylistDropdown>
      </div>
    </div>
  </section>
</template>

<script>
  import { addAlbumToPlaylist } from '../../api/playlist';
  import PlaylistDropdown from './PlaylistDropdown';

  export default {
    name: 'AlbumInfoView',
    props: ['album'],
    data() {
      return {
        playlists: [
          {
            id: '5c813c94d6f63a0004c26543',
            name: 'Ma playlist'
          }, {
            id: 'an-invalid-id',
            name: 'Chansons que mon chat aime'
          }
        ]
      };
    },
    methods: {
      addAlbumToPlaylist(playlist) {
        addAlbumToPlaylist(this.album.id, playlist.id)
          .then(_ => alert(`Album ${this.album.name} was successfully added to playlist ${playlist.name}!`))
          .catch(_ => alert(`Could not add at least one song from ${this.album.name} to playlist ${playlist.name}.`));
      }
    },
    components: { PlaylistDropdown }
  }
  ;
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
</style>

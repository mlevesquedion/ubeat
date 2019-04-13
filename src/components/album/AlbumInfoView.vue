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
              class="is-primary"
            >
              <span>{{ album.artist }}</span>
            </router-link>
          </a>
        </div>
        <div class="is-size-6 has-text-grey-lighter">
          <p class="label">{{ album.genre }} ({{ album.year }})</p>
          <p class="label">{{ album.trackCount }} tracks</p>
          <AlbumPlaylistDropdown
            :album="album"
            :playlists="playlists"
          ></AlbumPlaylistDropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AlbumPlaylistDropdown from './AlbumPlaylistDropdown';

export default {
  name: 'AlbumInfoView',
  props: ['album', 'playlists'],
  components: { AlbumPlaylistDropdown }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/styles.scss';

.section {
  padding-bottom: 0;
  padding-top: 0;
}

.responsive-image {
  display: block;
  width: 25vw !important;
  min-width: 200px;
  max-width: 300px;
}
</style>

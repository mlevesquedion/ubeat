<template>
  <section class="section columns">
    <div class="column is-narrow ">
      <figure class="media-left image">
        <img class="img-responsive" :src="album.artworkUrl" alt="album.name">
      </figure>
    </div>
    <div class="column is-three-quarters">
      <p
        class="title is-size-3 has-text-light"
      >{{ album.name }}</p>
      <div class="subtitle has-text-grey-lighter">
        <div class="label is-size-5">
          <a>
            <router-link :to="{name: 'Album', params: {id: album.artistId}}" id="artist-name">
              <span>{{ album.artist }}</span>
            </router-link>
          </a>
        </div>
        <div class="is-size-6 has-text-grey-lighter">
          <p class="label">{{ album.genre }} ({{album.year}})</p>
          <p class="label">{{ album.trackCount }} songs</p>
        </div>
        <div style="padding-top: 10px">
          <div id=add-album class="tag  is-medium button" v-on:click="addAblbumToList( album.id )">
            <i class="fas fa-plus-circle"></i><span style="padding-left:5px">Album</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'albumInfoView',
    props: ['album']
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

  #add-album:hover {
    color: white;
    background-color: $primary;
  }

  #artist-name {
    color: $primary;
  }

</style>

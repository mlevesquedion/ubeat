<template>
  <div class="container">
    <div class="hero-body playlist-content">
      <div v-for="playlist in user1.userplaylist">
        <div class="playlist-name row">{{getPlaylistName(playlist)}}
        </div>
        <div v-for="song in getPlaylistContent(playlist)">
          <div class="row">
            <div class="column check-icon">
              <div v-if="song.isInPlaylist"> <i class="fas fa-check "></i> </div>
              <button v-else class="plus-icon"> <i class="fas fa-plus"></i> </button></div>
            <div class="column song-name">{{song.name}}</div>
          </div>
          <div class="song-info">{{song.artist}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import userTemp from './userTemporaire.json';

  export default {
    name: 'UserPlaylist',
    data() {
      return {
        user1: userTemp,
      };
    },
    methods: {
      getPlaylistName(playlist) {
        return Object.keys(playlist)[0];
      },
      getPlaylistContent(playlist) {
        return Object.values(playlist)[0];
      },
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .playlist-name{
    font-weight: bolder;
    color: $primary;
    padding-top: 30px;
    font-size: 18px;
  }

  .check-icon {
    float: left;
    padding: 0 10px 0 0;
    font-size: 10px;
    margin-top: 8px;
  }

  .plus-icon{
    padding: 0;
    background-color: transparent;
    color:white;
    border: none;
  }

  .column.song-name{
    font-size: 18px;
    padding: 0 0 0 20px;
  }

  .song-info{
    padding-left:20px;
    font-size: 14px;
    color: grey;
  }

  .playlist-content{
    margin-left: 30px
  }
</style>

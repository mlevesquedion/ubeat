<template>
  <section class="section">
    <div class="accordions">
      <Accordion>
        <template slot="header">
          <h1 class="title has-text-light">Playlist ({{ count }})</h1>
        </template>
        <template slot="body">
          <!--<div v-if="">-->
          <Playlists :user="true"/>
          <!--</div>-->
          <!--<div v-else>This user has no playlist!</div>-->
        </template>
      </Accordion>
    </div>
  </section>



</template>

<script>
  import Playlists from '../playlists/Playlists';
  import PlaylistAPI from '../../api/playlist';
  import Accordion from '../utils/Accordion';

  export default {
    name: 'UserPlaylist',
    props: ['user'],
    components: { Playlists, Accordion },
    computed: {
      count() {
        return this.playlists.length;
      },
    },
    data() {
      return {
        playlists: PlaylistAPI.getUserPlaylists()
      };
    },
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  .playlist-name {
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

  .plus-icon {
    padding: 0;
    background-color: transparent;
    color: white;
    border: none;
  }

  .column.song-name {
    font-size: 18px;
    padding: 0 0 0 20px;
  }

  .song-info {
    padding-left: 20px;
    font-size: 14px;
    color: grey;
  }

  .playlist-content {
    margin-left: 30px;
  }
</style>

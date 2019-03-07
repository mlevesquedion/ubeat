<template>
    <div class="container">


      <section id="sub-menu" class="section">
        <div class="columns">
          <div class="column is-one-third is-3-fullhd">

            <p id="create-message" class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile"> Create a new playlist</p>
            <span> <p id="existing-message" class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              Your playlists :
            </p>

            </span>
          </div>
        </div>
      </section>


      <Async>
        <section> <p id="playlist-name" class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile flex-centered"> name</p>
          <div id="tracks"></div>
        </section>
      </Async>



    </div>
</template>

<script>
  import { getPlaylist } from '@/api/playlist';
  import Async from '@/components/utils/Async/Async';

  export default {
    name: 'playlist',
    data() {
      return {
        dataSource:
          getPlaylist('5c7f1e7483f8840004680d0e'),
        dataName: 'user playlist'
      };
    },
    components: {
      Async
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #create-message{
    font-family: $stylish-text;
  }
  #existing-message{
    font-family: $stylish-text;
  }
  #playlist-name {
    font-family: $stylish-text;
  }

</style>

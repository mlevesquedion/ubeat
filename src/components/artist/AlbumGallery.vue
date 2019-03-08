<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <AlbumGalleryView :albums="data"/>
    </template>
  </Async>
</template>

<script>
  import Async from '@/components/utils/Async/Async';
  import AlbumGalleryView from './AlbumGalleryView';
  import ArtistAPI from '../../api/artist';

  export default {
    name: 'albumGallery',
    props: ['artistId'],
    data() {
      return {
        dataSource:
          ArtistAPI.getAlbums(this.artistId),
        dataName: 'artist albums'
      };
    },
    components: {
      Async,
      AlbumGalleryView
    }
  };
</script>

<style scoped lang="scss">
</style>

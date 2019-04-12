<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery :elements="data" linkTo="Album" title="Albums" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import ArtistAPI from '../../api/artist';
import Gallery from '../utils/Gallery';

export default {
  name: 'AlbumGallery',
  props: ['artistId'],
  data() {
    return {
      dataSource: ArtistAPI.getAlbums(this.artistId),
      dataName: 'artist albums'
    };
  },
  components: {
    GenericAsync,
    Gallery
  }
};
</script>

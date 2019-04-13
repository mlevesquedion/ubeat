<template>
  <SpecificResults :data="albums">
    <template slot-scope="{ data }">
      <AlbumResult :album="data" :playlists="playlists"></AlbumResult>
    </template>
  </SpecificResults>
</template>

<script>
import AlbumResult from '../individual_results/AlbumResult';
import SpecificResults from './SpecificResults';

export default {
  name: 'AlbumResults',
  props: ['albums', 'playlists'],
  components: { SpecificResults, AlbumResult }
};
</script>

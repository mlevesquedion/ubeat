<template>
  <SpecificResults :data="albums">
    <template slot-scope="{ data }">
      <AlbumResult :album="data"></AlbumResult>
    </template>
  </SpecificResults>
</template>

<script>
import AlbumResult from '../individual_results/AlbumResult';
import SpecificResults from './SpecificResults';

export default {
  name: 'AlbumResults',
  props: ['albums'],
  components: { SpecificResults, AlbumResult }
};
</script>

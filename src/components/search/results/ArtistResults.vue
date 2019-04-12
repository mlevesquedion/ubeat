<template>
  <SpecificResults :data="artists">
    <template slot-scope="{ data }">
      <ArtistResult :artist="data"></ArtistResult>
    </template>
  </SpecificResults>
</template>

<script>
import ArtistResult from './ArtistResult';
import SpecificResults from './SpecificResults';

export default {
  name: 'ArtistResults',
  props: ['artists'],
  components: { SpecificResults, ArtistResult }
};
</script>

<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <ArtistDetailsView :artist="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import ArtistDetailsAPI from '../../api/artistDetails';
import ArtistDetailsView from './ArtistDetailsView';

export default {
  name: 'ArtistDetails',
  components: { GenericAsync, ArtistDetailsView },
  props: ['artistName'],
  data() {
    return {
      dataSource: ArtistDetailsAPI.get(this.artistName),
      dataName: 'artist details'
    };
  }
};
</script>

<template>
  <section class="section">
    <GenericAsync :dataName="dataName" :dataSource="dataSource">
      <template slot-scope="{ data }">
        <PlaylistList :playlists="data" :isReadOnly="isNot" />
      </template>
    </GenericAsync>
  </section>
</template>

<script>
import PlaylistAPI from '../../api/playlist';
import Accordion from '../utils/Accordion';
import PlaylistList from '../playlists/PlaylistList';
import GenericAsync from '../utils/Async/GenericAsync';

export default {
  name: 'UserPlaylists',
  props: ['user'],
  components: { PlaylistList, Accordion, GenericAsync },
  data() {
    return {
      dataName: 'user playlists',
      dataSource: PlaylistAPI.getPlaylists(this.user.id)
    };
  }
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0;
}
</style>

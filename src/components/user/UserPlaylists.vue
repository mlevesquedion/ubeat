<template>
  <section class="section">
    <div class="accordions">
      <Accordion>
        <template slot="header">
          <h1 class="title has-text-light">Playlists</h1>
        </template>
        <template slot="body">
          <GenericAsync :dataName="dataName" :dataSource="dataSource">
            <template slot-scope="{ data }">
              <PlaylistList :playlists="data" />
            </template>
          </GenericAsync>
        </template>
      </Accordion>
    </div>
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

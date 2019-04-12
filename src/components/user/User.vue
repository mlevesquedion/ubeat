<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <UserView :user="data" />
      <UserPlaylist :user="data"/>
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import UserView from './UserView';
import UserPlaylist from './UserPlaylist';
import userAPI from '../../api/user';

export default {
  name: 'User',
  props: ['friend', 'index', 'userList'],
  components: { GenericAsync, UserView, UserPlaylist },
  data() {
    return {
      dataName: 'user info',
      dataSource: userAPI.get(this.$route.params.id)
    };
  }
};
</script>

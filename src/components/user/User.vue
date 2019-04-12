<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <div class="container">
        <UserHeader :user="data" />
        <FollowingList :user="data"></FollowingList>
      </div>
      <UserPlaylists :user="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import UserPlaylists from './UserPlaylists';
import userAPI from '../../api/user';
import UserHeader from './UserHeader';
import FollowingList from './FollowingList';

export default {
  name: 'User',
  components: {
    GenericAsync,
    UserHeader,
    FollowingList,
    UserPlaylists
  },
  data() {
    return {
      dataName: 'user info',
      dataSource: userAPI.get(this.$route.params.id)
    };
  }
};
</script>

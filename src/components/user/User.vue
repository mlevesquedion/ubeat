<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <div class="container">
        <UserHeader :user="data" />
        <FollowingList :user="data"></FollowingList>
      </div>
      <UserPlaylists :user="data" :userPlaylists="userPlaylists" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import UserPlaylists from './UserPlaylists';
import userAPI from '../../api/user';
import UserHeader from './UserHeader';
import FollowingList from './FollowingList';
import playlistsAPI from '../../api/playlist';

export default {
  name: 'User',
  components: {
    GenericAsync,
    UserHeader,
    FollowingList,
    UserPlaylists
  },
  created() {
    playlistsAPI
      .getUserPlaylists()
      .then(this.setUserPlaylists)
      .catch(this.setError);
  },
  data() {
    return {
      dataName: 'user info',
      dataSource: userAPI.get(this.$route.params.id),
      userPlaylists: 'loading'
    };
  },
  methods: {
    setUserPlaylists(playlists) {
      this.userPlaylists = playlists;
    },
    setError(_e) {
      this.userPlaylists = 'error';
    }
  }
};
</script>

<template>
  <div class="container">
    <UserHeader :user="user" />
    <FollowingList :user="user"></FollowingList>
  </div>
</template>

<script>
import FollowingList from './FollowingList';
import UserHeader from './UserHeader';

export default {
  name: 'UserView',
  props: ['user'],
  components: { UserHeader, FollowingList }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.user-info {
  min-width: 150px;
  max-width: 150px;
}

.tab-title {
  background-color: dimgrey;
  font-size: 12px;
  size: 12px;
}
.vue-tabs {
  font-size: 10px;
}

.user-content {
  padding: 20px;
}

span.icon {
  font-family: FontAwesome, monospace;
}

.friend-content {
  background-color: #181818;
  border: 1px solid white;
  border-top-width: 0;
}

.column.song-name {
  font-size: 18px;
  padding: 0 0 0 20px;
}

#user-image {
  display: flex;
  width: 100px;
}
</style>

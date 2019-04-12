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

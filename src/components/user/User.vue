<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <UserView :user="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';

export default {
  name: 'User',
  props: ['friend', 'index', 'userList'],
  components: { GenericAsync },
  data() {
    return {
      dataName: 'user info',
      dataSource: userAPI.getUser(this.$route.id)
    };
  }
};
</script>

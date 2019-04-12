<template>
  <SpecificResults :data="users">
    <template slot-scope="{ data }">
      <UserResult :user="data"></UserResult>
    </template>
  </SpecificResults>
</template>

<script>
import UserResult from './UserResult';
import SpecificResults from './SpecificResults';

export default {
  name: 'UserResults',
  props: ['users'],
  components: { SpecificResults, UserResult }
};
</script>

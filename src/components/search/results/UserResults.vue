<template>
  <ResultsGroup resultType="Users" :results="users" icon="fa-user">
    <template slot-scope="{ data }">
      <UserResult :user="data"></UserResult>
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import UserResult from './UserResult';

export default {
  name: 'UserResults',
  components: { ResultsGroup, UserResult },
  props: ['users']
};
</script>

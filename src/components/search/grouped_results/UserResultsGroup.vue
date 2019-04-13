<template>
  <ResultsGroup :results="users" icon="fa-user" resultType="User">
    <template slot-scope="{ data }">
      <UserResult class="vertically-separated" :user="data"></UserResult>
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import UserResult from '../individual_results/UserResult';

export default {
  name: 'UserResults',
  components: { ResultsGroup, UserResult },
  props: ['users']
};
</script>

<style scoped lang="scss">
.vertically-separated {
  padding: 5px 0;
}
</style>

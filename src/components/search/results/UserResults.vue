<template>
  <ResultsGroup
    resultType="Users"
    :results="users"
    icon="fa-star"
  ></ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';

export default {
  name: 'UserResults',
  components: { ResultsGroup },
  props: ['users']
};
</script>

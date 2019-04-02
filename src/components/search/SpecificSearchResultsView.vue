<template>
  <section class="accordions section">
    <h1
      id="title"
      class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
    >
      {{ formattedQueryType }} matching "{{ query }}" ({{ count }})
    </h1>
    {{ results }}
  </section>
</template>

<script>
import pluralize from '../../utils/pluralize';

export default {
  name: 'SpecificSearchResultsView',
  props: ['queryType', 'results', 'query'],
  computed: {
    count() {
      return this.results.length;
    },
    formattedQueryType() {
      return this.capitalize(pluralize(this.queryType, this.count));
    }
  },
  methods: {
    capitalize(s) {
      // TODO : MOVE ME TO THE UTILS FOLDER AND TEST ME
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
};
</script>

<style scoped lang="scss">
.padded-bottom {
  padding-bottom: 20px;
}
</style>

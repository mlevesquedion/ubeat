<template>
  <section class="accordions section">
    <h1
      class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
      id="title"
    >
      {{ formattedQueryType }} matching "{{ query }}" ({{ count }})
    </h1>
    {{ results }}
  </section>
</template>

<script>
import pluralize from '../../utils/pluralize';
import capitalize from '../../utils/capitalize';

export default {
  name: 'SpecificSearchResultsView',
  props: ['queryType', 'results', 'query'],
  computed: {
    count() {
      return this.results.length;
    },
    formattedQueryType() {
      return capitalize(pluralize(this.queryType, this.count));
    }
  }
};
</script>

<style lang="scss" scoped>
.padded-bottom {
  padding-bottom: 20px;
}
</style>

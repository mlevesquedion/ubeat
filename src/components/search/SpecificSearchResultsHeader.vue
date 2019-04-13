<template>
  <section class="section">
    <h1
      class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile"
      id="title"
    >
      <i :class="`fa ${icon}`" class="bumped-left"></i>
      {{ formattedQueryType }} matching "{{ query }}" ({{ count }})
    </h1>
  </section>
</template>

<script>
import pluralize from '../../utils/pluralize';
import capitalize from '../../utils/capitalize';
import iconFromQueryType from './utils/icons';

export default {
  name: 'SpecificSearchResultsHeader',
  props: ['queryType', 'results', 'query'],
  computed: {
    icon() {
      return iconFromQueryType(this.queryType);
    },
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
.section {
  padding-bottom: 0;
}
</style>

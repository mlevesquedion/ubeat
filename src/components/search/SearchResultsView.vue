<template>
  <section class="accordions section">
    <h1 id="title"
        class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile level-left">
      Your search results
    </h1>

    <Accordion>
      <template slot="header">
            <span class="subtitle is-primary is-clipped level-item">
              <i class="fa fa-star is-primary bumped-right"></i>
              Artists
            </span>
      </template>
      <template slot="body">
        <div v-for="r in searchresults">
          <p>
            {{ r }}
          </p>
        </div>
      </template>
    </Accordion>

    <Accordion>
      <template slot="header">
            <span class="subtitle is-primary is-clipped level-item">
              <i class="fa fa-list-ol is-primary bumped-right"></i>
              Albums
            </span>
      </template>
      <template slot="body">
        <div>
          {{ NoResultsFoundMessage }}
        </div>
      </template>
    </Accordion>

    <Accordion>
      <template slot="header">
            <span class="subtitle is-primary is-clipped level-item">
              <i class="fa fa-music is-primary bumped-right"></i>
              Songs
            </span>
      </template>
      <template slot="body">
        <div>
          {{ NoResultsFoundMessage }}
        </div>
      </template>
    </Accordion>

    <Accordion>
      <template slot="header">
            <span class="subtitle is-primary is-clipped level-item">
              <i class="fa fa-user is-small is-primary bumped-right"></i>
              Users
            </span>
      </template>
      <template slot="body">
        <div>
          {{ NoResultsFoundMessage }}
        </div>
      </template>
    </Accordion>
  </section>
</template>

<script>
  import Accordion from '../utils/Accordion';
  import SearchResultsView from './SearchResultsView';

  export default {
    name: 'SearchResultsView',
    data() {
      return {
        NoResultsFoundMessage: 'No results were found for this category.'
      };
    },
    components: { SearchResultsView, Accordion },
    props: ['searchresults']
  }
  ;
</script>

<style scoped>

</style>

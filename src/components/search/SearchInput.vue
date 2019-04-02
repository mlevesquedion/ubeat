<template>
  <div class="navbar-item is-marginless">
    <input
      class="is-size-6-tablet is-size-5-desktop search-bar"
      placeholder="Search ..."
      type="search"
      v-model="query"
      @keydown.enter="search"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      if (this.query === '') {
        return;
      }
      this.$router.push(`/searchresults/${this.query}`);
      this.$root.$emit('close-burger');
    }
  }
};
</script>
<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.search-bar {
  height: 40px;
  padding: 10px;
  @media screen and (min-width: $navbar-breakpoint) {
    width: 200px;
  }
  @media screen and (min-width: $desktop) {
    width: 300px;
  }
  @media screen and (max-width: $navbar-breakpoint) {
    width: 100%;
  }
}
</style>

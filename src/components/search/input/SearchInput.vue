<template>
  <div class="navbar-item is-marginless one-line">
    <input
      @keydown.enter="search"
      class="is-size-6-tablet is-size-5-desktop search-bar"
      placeholder="Search ..."
      type="search"
      v-model="query"
    />
    <Dropdown is-right="true" is-small="true">
      <template slot="trigger">
        <button
          class="button is-primary is-round small-fixed-width bumped-right"
        >
          <span>
            <i :class="`fa ${icon}`"></i>
          </span>
        </button>
      </template>
      <template slot="content">
        <SearchInputDropdownContent :queryTypes="otherQueryTypes" />
      </template>
    </Dropdown>
  </div>
</template>
<script>
import Dropdown from '../../utils/Dropdown';
import SearchInputDropdownContent from './SearchInputDropdownContent';

export default {
  name: 'SearchInput',
  components: { SearchInputDropdownContent, Dropdown },
  created() {
    this.$root.$on('set-query-type', this.setQueryType);
  },
  data() {
    return {
      query: '',
      queryTypes: ['global', 'artist', 'album', 'track', 'user'],
      queryType: 'global'
    };
  },
  computed: {
    icon() {
      switch (this.queryType) {
        case 'artist':
          return 'fa-star';
        case 'album':
          return 'fa-compact-disc';
        case 'track':
          return 'fa-music';
        case 'user':
          return 'fa-user';
        case 'global':
        default:
          return 'fa-search';
      }
    },
    otherQueryTypes() {
      return this.queryTypes.filter(q => q !== this.queryType);
    }
  },
  methods: {
    search() {
      if (this.query === '') {
        return;
      }
      this.$parent.$emit('close-burger');
      this.dispatch();
    },
    dispatch() {
      this.$router.push(`/search/${this.queryType}/${this.query}`);
    },
    setQueryType(type) {
      this.queryType = type;
    }
  }
};
</script>
<style lang="scss" scoped>
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

.one-line {
  display: flex;
}

.small-fixed-width {
  width: 40px !important;
}
</style>

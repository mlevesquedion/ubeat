<template>
  <div class="navbar-item is-marginless one-line">
    <input
      class="is-size-6-tablet is-size-5-desktop search-bar"
      placeholder="Search ..."
      type="search"
      v-model="query"
      @keydown.enter="search"
    />
    <Dropdown is-right="true">
      <template slot="trigger">
        <button class="button is-primary is-round fixed-width bumped-right">
          <span>
            <i :class="`fa ${icon}`"></i>
          </span>
        </button>
      </template>
      <template slot="content" class="small">
        <div
          v-for="t in queryTypes"
          :key="t"
          @click="setQueryType(t)"
          class="capitalized"
        >
          {{ t }}
        </div>
      </template>
    </Dropdown>
  </div>
</template>
<script>
import Dropdown from '../utils/Dropdown';

export default {
  name: 'SearchInput',
  components: { Dropdown },
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
          return 'fa-list';
        case 'track':
          return 'fa-music';
        case 'user':
          return 'fa-user';
        case 'global':
        default:
          return 'fa-search';
      }
    }
  },
  methods: {
    search() {
      if (this.query === '') {
        return;
      }
      this.$router.push(`/globalsearch/${this.query}`);
      this.$parent.$emit('close-burger');
    },
    setQueryType(type) {
      this.queryType = type;
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

.one-line {
  display: flex;
}

.fixed-width {
  width: 40px !important;
}
</style>

<template>
  <div>
    <a
      :key="t"
      @click="setQueryType(t)"
      class="capitalized dropdown-item"
      v-for="t in queryTypes"
    >
      {{ t }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchInputDropdownContent',
  props: ['queryTypes'],
  methods: {
    setQueryType(t) {
      this.$parent.$emit('close');
      this.$root.$emit('set-query-type', t);
    }
  }
};
</script>

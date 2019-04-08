<template>
  <div>
    <a
      v-for="t in queryTypes"
      :key="t"
      @click="setQueryType(t)"
      class="capitalized dropdown-item"
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

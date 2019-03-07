<template>
  <div class="box">
    <div :class="{'zoom-in': !expanded, 'zoom-out': expanded, 'bottom-padded': expanded}" @click="toggle">
      <slot name="header"></slot>
    </div>
    <slot v-if="expanded" name="body"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    data() {
      return {
        expanded: false
      };
    },
    methods: {
      toggle() {
        this.expanded = !this.expanded;
      }
    }
  };
</script>

<style scoped>
  .zoom-in {
    cursor: zoom-in;
  }

  .zoom-out {
    cursor: zoom-out;
  }

  .bottom-padded {
    padding-bottom: 20px;
  }

  .box {
    border: 2px solid white;
  }
</style>

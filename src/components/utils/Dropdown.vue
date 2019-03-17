<template>
  <div class="dropdown" :class="{ 'is-active': isOpen, 'is-right': isRight }">
    <div @click="toggle()" class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu my-menu" role="menu">
      <div class="dropdown-content">
        <slot name="content"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['isRight'],
  data() {
    return {
      isOpen: false
    };
  },
  created() {
    this.$on('close', this.close);
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped lang="scss">
// Have to add this style to prevent the dropdown arrow from showing
.track-button {
  padding: 0 !important;
  margin: 0 !important;

  &::after {
    border: 0 solid transparent !important;
  }
}
</style>

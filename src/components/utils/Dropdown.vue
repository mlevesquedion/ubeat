<template>
  <div :class="{ 'is-active': isOpen, 'is-right': isRight }" class="dropdown">
    <div @click="toggle()" class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu " :class="{ 'is-small': isSmall }" role="menu">
      <div class="dropdown-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['isRight', 'isSmall'],
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
.dropdown-menu.is-small {
  min-width: 76px !important;
  width: 76px !important;
}
</style>

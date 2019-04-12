<template>
  <div class="box">
    <div
      :class="{
        'zoom-in': !isOpen,
        'zoom-out': isOpen,
        'bottom-padded': isOpen
      }"
      @click="toggle"
    >
      <slot name="header"></slot>
    </div>
    <slot name="body" v-if="isOpen"></slot>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
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

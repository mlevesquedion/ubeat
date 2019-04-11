<template>
  <button
    :class="{
      'is-loading': isDeleting,
      'is-small': isSmall,
      'is-normal': !isSmall
    }"
    @click.stop="doDelete"
    class="button level-item is-danger size-correction"
  >
    <i v-if="pendingDeletion" class="fas fa-question"></i>
    <i v-else class="fas fa-trash"></i>
  </button>
</template>
<script>
export default {
  name: 'DeleteButton',
  props: ['deleteAction', 'isDeleting', 'isSmall'],
  data() {
    return {
      pendingDeletion: false
    };
  },
  methods: {
    doDelete() {
      if (!this.pendingDeletion) {
        this.pendingDeletion = true;
        setTimeout(() => {
          this.pendingDeletion = false;
        }, 3000);
        return;
      }
      this.deleteAction();
    }
  }
};
</script>
<style scoped lang="scss">
.is-normal {
  width: 42px;
  height: 36px;
}

.is-small {
  width: 27px;
  height: 27px;
}
</style>

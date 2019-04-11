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
    <i class="fas fa-question" v-if="pendingDeletion"></i>
    <i class="fas fa-trash" v-else></i>
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
        }, 2000);
        return;
      }
      this.deleteAction();
    }
  }
};
</script>

<style lang="scss" scoped>
.is-normal {
  width: 42px;
  height: 36px;
}

.is-small {
  width: 27px;
  height: 27px;
}
</style>

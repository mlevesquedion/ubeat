<template>
  <div>
    <h1>User</h1>
    <div>GLO-3102 User page</div>
    <button @click="showSuccess">Succeed</button>
    <button @click="showError">Fail</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  methods: {
    showSuccess() {
      this.$toasted.show('Success', { type: 'ubeat-success' });
    },
    showError() {
      this.$toasted.show('Error', { type: 'ubeat-error' });
    }
  }
};
</script>

<style></style>

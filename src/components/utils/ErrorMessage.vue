<template>
  <div class="message is-danger">
    <div class="message-header">
      <p>Error</p>
    </div>
    <div class="message-body">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default { name: 'ErrorMessage', props: ['message'] };
</script>

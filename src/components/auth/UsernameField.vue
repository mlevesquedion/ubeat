<template>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input
        v-model="username"
        class="input"
        :class="{
          'is-success': value.isValid,
          'is-danger': hasError
        }"
        type="text"
        placeholder="Username"
        @blur="wasBlurred = true"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
    <p v-if="hasError" class="help is-danger">
      {{ error }}
    </p>
  </div>
</template>

<script>
import Username from '../../auth/username';

export default {
  name: 'UsernameField',
  props: ['value'],
  data() {
    return {
      username: this.value.value,
      error: '',
      wasBlurred: false
    };
  },
  computed: {
    hasError() {
      return this.wasBlurred && !this.value.isValid;
    }
  },
  watch: {
    username(value) {
      this.error = Username.validate(value);
      this.$emit('input', {
        ...this.value,
        value,
        isValid: this.error === ''
      });
    }
  }
};
</script>

<style scoped></style>

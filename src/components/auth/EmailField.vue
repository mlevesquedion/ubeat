<template>
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input
        v-model="email"
        class="input"
        :class="{
          'is-success': value.isValid,
          'is-danger': hasError
        }"
        type="text"
        placeholder="Email"
        @blur="wasBlurred = true"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
    <p v-if="hasError" class="help is-danger">
      {{ error }}
    </p>
  </div>
</template>

<script>
import Email from '../../auth/email';

export default {
  name: 'EmailField',
  props: ['value'],
  data() {
    return {
      email: this.value.value,
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
    email(value) {
      this.error = Email.validate(value);
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

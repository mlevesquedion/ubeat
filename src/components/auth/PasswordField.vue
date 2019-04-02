<template>
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input
        v-model="password"
        class="input"
        :class="{
          'is-success': value.isValid,
          'is-danger': hasError
        }"
        type="password"
        placeholder="Username"
        @blur="wasBlurred = true"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </div>
    <p v-if="hasError" class="help is-danger">
      {{ error }}
    </p>
  </div>
</template>

<script>
import Password from '../../auth/password';

export default {
  name: 'PasswordField',
  props: ['value'],
  data() {
    return {
      password: this.value.value,
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
    password(value) {
      this.error = Password.validate(value);
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

<template>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input
        v-model="username"
        class="input"
        :class="{
          'is-success': value.isValid,
          'is-danger': wasBlurred && !value.isValid
        }"
        type="text"
        placeholder="Username"
        @blur="wasBlurred = true"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
    <p v-if="wasBlurred && !value.isValid" class="help is-danger">
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
  watch: {
    username(value) {
      const error = Username.validate(value);
      this.error = error;
      this.$emit('input', {
        ...this.value,
        value,
        isValid: error === ''
      });
    }
  }
};
</script>

<style scoped></style>

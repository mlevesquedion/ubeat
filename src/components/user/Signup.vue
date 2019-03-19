<template>
  <div class="section">
    <h1 class="title is-primary">Signup</h1>
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="username"
          class="input"
          :class="{
            'is-success': usernameIsValid,
            'is-danger': !usernameIsValid
          }"
          type="text"
          placeholder="Your username"
          value="bulma"
          @input="validateUsername"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <p v-if="!usernameIsValid" class="help is-danger">{{ usernameError }}</p>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="email"
          :class="{ 'is-success': emailIsValid, 'is-danger': !emailIsValid }"
          class="input"
          type="email"
          placeholder="Your email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <p v-if="!emailIsValid" class="help is-danger">{{ emailError }}</p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input
          v-model="password"
          :class="{
            'is-success': passwordIsValid,
            'is-danger': !passwordIsValid
          }"
          class="input"
          type="password"
          placeholder="Your password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <p v-if="!passwordIsValid" class="help is-danger">{{ passwordError }}</p>
    <div class="field">
      <p class="control">
        <button class="button is-primary">Signup</button>
      </p>
    </div>
  </div>
</template>

<script>
import Username from '@/utils/username';
import Email from '@/utils/email';
import Password from '@/utils/password';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  computed: {
    usernameIsValid() {
      return this.usernameError === '';
    },
    usernameError() {
      return Username.validate(this.username);
    },
    emailIsValid() {
      return this.emailError === '';
    },
    emailError() {
      return Email.validate(this.email);
    },
    passwordIsValid() {
      return this.passwordError === '';
    },
    passwordError() {
      return Password.validate(this.password);
    }
  }
};
</script>

<style scoped></style>

<template>
  <section class="section">
    <div class="spaced-row">
      <h1 class="title is-primary">{{ authType }}</h1>
      <p>
        {{ hasAccountMessage }}
        <a class="is-primary" @click="toggleIsLogin">{{ oppositeAuthType }}</a>
      </p>
    </div>
    <div class="field" v-if="!isLogin">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="username"
          class="input"
          :class="{
            'is-success': usernameWasBlurred && usernameIsValid,
            'is-danger': usernameWasBlurred && !usernameIsValid
          }"
          type="text"
          placeholder="Username"
          @input="validateUsername"
          @blur="usernameWasBlurred = true"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <p v-if="!usernameIsValid && usernameWasBlurred" class="help is-danger">
      {{ usernameError }}
    </p>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="email"
          :class="{ 'is-success': emailIsValid, 'is-danger': !emailIsValid }"
          class="input"
          type="email"
          placeholder="Email"
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
          placeholder="Password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <p v-if="!passwordIsValid" class="help is-danger">{{ passwordError }}</p>
    <div class="field submit-button">
      <p class="control">
        <button class="button is-primary">{{ authType }}</button>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      usernameError: '',
      usernameWasBlurred: false,
      email: '',
      password: '',
      isLogin: false
    };
  },
  computed: {
    authType() {
      return this.isLogin ? 'Login' : 'Signup';
    },
    oppositeAuthType() {
      return this.isLogin ? 'Signup' : 'Login';
    },
    hasAccountMessage() {
      const prefix = this.isLogin
        ? "Don't have an account"
        : 'Already have an account';
      return `${prefix} ?`;
    },
    usernameIsValid() {
      return !this.usernameWasBlurred;
      // return this.usernameError === '';
    },
    usernameError() {
      return '';
      // return Username.validate(this.username);
    },
    emailIsValid() {
      return true;
      // return this.emailError === '';
    },
    emailError() {
      return '';
      // return Email.validate(this.email);
    },
    passwordIsValid() {
      return true;
      // return this.passwordError === '';
    },
    passwordError() {
      return '';
      // return Password.validate(this.password);
    }
  },
  methods: {
    toggleIsLogin() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<style scoped>
.section {
  padding-top: 30px;
}
.submit-button {
  padding-top: 10px;
}
a:hover,
a:active {
  color: white;
}

.spaced-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

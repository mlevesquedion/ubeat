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
          :class="{
            'is-success': emailWasBlurred && emailIsValid,
            'is-danger': emailWasBlurred && !emailIsValid
          }"
          @blur="emailWasBlurred = true"
          class="input"
          type="email"
          @input="validateEmail"
          placeholder="Email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <p v-if="emailWasBlurred && !emailIsValid" class="help is-danger">
        {{ emailError }}
      </p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input
          v-model="password"
          :class="{
            'is-success': passwordWasBlurred && passwordIsValid,
            'is-danger': passwordWasBlurred && !passwordIsValid
          }"
          @blur="passwordWasBlurred = true"
          class="input"
          @input="validatePassword"
          type="password"
          placeholder="Password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <p v-if="passwordWasBlurred && !passwordIsValid" class="help is-danger">
      {{ passwordError }}
    </p>
    <div class="field submit-button">
      <p class="control">
        <button
          class="button is-primary"
          :disabled="!isValid"
          @click="authenticate"
        >
          {{ authType }}
        </button>
      </p>
    </div>
    <button
      class="button is-warning"
      :class="{
        'is-loading': isSkipping
      }"
      @click="skip"
    >
      Skip
    </button>
  </section>
</template>

<script>
import { v4 as uuid } from 'uuid';
import Username from '../../auth/username';
import Email from '../../auth/email';
import Password from '../../auth/password';
import authAPI from '../../api/auth';

export default {
  data() {
    return {
      username: '',
      usernameError: '',
      usernameWasBlurred: false,
      email: '',
      emailError: '',
      emailWasBlurred: false,
      password: '',
      passwordError: '',
      passwordWasBlurred: false,
      isLogin: false,
      isSkipping: false
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
      return this.usernameError === '';
    },
    emailIsValid() {
      return this.emailError === '';
    },
    passwordIsValid() {
      return this.passwordError === '';
    },
    isValid() {
      const blurs = this.emailWasBlurred && this.passwordWasBlurred;
      const valids = this.emailIsValid && this.passwordIsValid;
      if (this.isLogin) {
        return blurs && valids;
      }
      const username = this.usernameWasBlurred && this.usernameIsValid;
      return blurs && valids && username;
    }
  },
  methods: {
    toggleIsLogin() {
      this.isLogin = !this.isLogin;
    },
    validateUsername() {
      this.usernameError = Username.validate(this.username);
    },
    validateEmail() {
      this.emailError = Email.validate(this.email);
    },
    validatePassword() {
      this.passwordError = Password.validate(this.password);
    },
    login() {
      return authAPI.login({ email: this.email, password: this.password });
    },
    signup() {
      return authAPI.signup({
        name: this.username,
        email: this.email,
        password: this.password
      });
    },
    authenticate() {
      if (this.isLogin) {
        const promise = this.login();
        promise
          .then(_ => {
            this.$router.push('/');
          })
          .catch(_ =>
            this.$toasted.show(
              'Could not log you in. Double-check your login info!',
              { type: 'ubeat-error' }
            )
          );
      } else {
        this.signup()
          .then(_ => {
            this.isSkipping = false;
            this.isLogin = true;
            this.authenticate();
          })
          .catch(_ =>
            this.$toasted.show(
              'Could not sign you up. Double-check your signup info!',
              { type: 'ubeat-error' }
            )
          );
      }
    },
    skip() {
      this.username = 'monsieur_patate';
      this.email = uuid();
      this.password = 'patate';
      this.authenticate();
      this.isSkipping = true;
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

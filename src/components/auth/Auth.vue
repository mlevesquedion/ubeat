<template>
  <div class="container">
    <section class="section">
      <div class="spaced-row">
        <h1 class="title is-size-4-mobile is-primary">{{ authType }}</h1>
        <p>
          {{ changeAuthTypeMessage }}
          <a @click="toggleIsLogin" class="is-primary">{{
            oppositeAuthType
          }}</a>
        </p>
      </div>
      <UsernameField v-if="isSignup" v-model="username" />
      <EmailField v-model="email"></EmailField>
      <PasswordField v-model="password"></PasswordField>
      <div class="field submit-button">
        <p class="control">
          <button
            :disabled="!isValid"
            @click="submit"
            class="button is-primary"
          >
            {{ authType }}
          </button>
        </p>
      </div>
      <button
        :class="{
          'is-loading': isSkipping
        }"
        @click="skip"
        class="button is-warning"
      >
        Skip
      </button>
    </section>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import authAPI from '../../api/auth';
import UsernameField from './UsernameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

export default {
  components: { UsernameField, EmailField, PasswordField },
  created() {
    this.$root.$on('submit', this.submit);
  },
  data() {
    return {
      username: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      isLogin: true,
      isSkipping: false
    };
  },
  computed: {
    isSignup() {
      return !this.isLogin;
    },
    authType() {
      return this.isLogin ? 'Login' : 'Signup';
    },
    oppositeAuthType() {
      return this.isLogin ? 'Signup' : 'Login';
    },
    changeAuthTypeMessage() {
      const prefix = this.isLogin
        ? "Don't have an account"
        : 'Already have an account';
      return `${prefix} ?`;
    },
    isValid() {
      const emailAndPasswordAreValid =
        this.email.isValid && this.password.isValid;
      if (this.isLogin) {
        return emailAndPasswordAreValid;
      }
      return emailAndPasswordAreValid && this.username.isValid;
    }
  },
  methods: {
    toggleIsLogin() {
      this.isLogin = !this.isLogin;
    },
    login() {
      return authAPI
        .login({ email: this.email.value, password: this.password.value })
        .then(userData => {
          this.$root.$data.setUser(userData);
          this.$router.push('/');
        })
        .catch(_ => {
          this.incorrectLoginInformation();
          this.$toasted.show(
            'Could not log you in. Double-check your login info!',
            { type: 'ubeat-error' }
          );
        });
    },
    signup() {
      return authAPI
        .signup({
          name: this.username.value,
          email: this.email.value,
          password: this.password.value
        })
        .then(_ => {
          this.isSkipping = false;
          this.login();
        })
        .catch(_ => {
          this.incorrectLoginInformation();
          this.$toasted.show(
            'Could not sign you up. Maybe you already have an account with that email?',
            { type: 'ubeat-error' }
          );
        });
    },
    submit() {
      if (!this.isValid) {
        return;
      }
      if (this.isLogin) {
        this.login();
      } else {
        this.signup();
      }
    },
    skip() {
      this.username.value = 'monsieur_patate';
      this.email.value = uuid();
      this.password.value = 'patate';
      this.isLogin = false;
      this.submit();
      this.isSkipping = true;
    },
    incorrectLoginInformation() {
      if (this.isLogin) {
        this.password.isValid = false;
      } else {
        this.email.isValid = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 700px;
}

.section {
  padding-top: 40px;
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

<template>
  <section class="section">
    <div class="spaced-row">
      <h1 class="title is-primary">{{ authType }}</h1>
      <p>
        {{ changeAuthTypeMessage }}
        <a class="is-primary" @click="toggleIsLogin">{{ oppositeAuthType }}</a>
      </p>
    </div>
    <UsernameField v-if="isSignup" v-model="username" />
    <EmailField v-model="email"></EmailField>
    <PasswordField v-model="password"></PasswordField>
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
import authAPI from '../../api/auth';
import UsernameField from './UsernameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

export default {
  components: { UsernameField, EmailField, PasswordField },
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
        .then(_ => {
          this.$router.push('/');
        })
        .catch(_ => {
          this.emailAndOrPasswordInvalid();
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
          this.emailAndOrPasswordInvalid();
          this.$toasted.show(
            'Could not sign you up. Double-check your signup info!',
            { type: 'ubeat-error' }
          );
        });
    },
    authenticate() {
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
      this.authenticate();
      this.isSkipping = true;
    },
    emailAndOrPasswordInvalid() {
      this.email.isValid = false;
      this.password.isValid = false;
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

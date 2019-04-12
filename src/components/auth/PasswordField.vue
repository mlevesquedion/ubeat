<template>
  <AuthField
    :isPassword="true"
    :validator="validator"
    :value="value"
    fieldName="Password"
    iconName="lock"
  />
</template>

<script>
import Password from '../../auth/password';
import AuthField from './AuthField';

export default {
  name: 'PasswordField',
  props: ['value'],
  data() {
    return {
      validator: Password
    };
  },
  components: { AuthField }
};
</script>

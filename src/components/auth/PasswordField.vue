<template>
  <FormField
    fieldName="Password"
    iconName="lock"
    :value="value"
    :validator="validator"
    :isPassword="true"
    eventEmittedOnEnter="authenticateSubmitted"
  />
</template>

<script>
import Password from '../../auth/password';
import FormField from './AuthField';

export default {
  name: 'EmailField',
  props: ['value'],
  data() {
    return {
      validator: Password
    };
  },
  components: { FormField }
};
</script>

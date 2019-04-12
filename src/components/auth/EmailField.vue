<template>
  <FormField
    fieldName="Email"
    iconName="envelope"
    :value="value"
    :validator="validator"
    eventEmittedOnEnter="signupSubmitted"
  />
</template>

<script>
import Email from '../../auth/email';
import FormField from './AuthField';

export default {
  name: 'EmailField',
  props: ['value'],
  data() {
    return {
      validator: Email
    };
  },
  components: { FormField }
};
</script>

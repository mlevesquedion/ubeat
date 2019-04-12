<template>
  <AuthField
    :validator="validator"
    :value="value"
    fieldName="Email"
    iconName="envelope"
  />
</template>

<script>
import Email from '../../auth/email';
import AuthField from './AuthField';

export default {
  name: 'EmailField',
  props: ['value'],
  data() {
    return {
      validator: Email
    };
  },
  components: { AuthField }
};
</script>

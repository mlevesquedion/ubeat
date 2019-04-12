<template>
  <FormField
    :validator="validator"
    :value="value"
    fieldName="Email"
    iconName="envelope"
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

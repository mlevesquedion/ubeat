<template>
  <FormField
    fieldName="Password"
    iconName="lock"
    :value="value"
    :validator="validator"
  />
</template>

<script>
import Password from '../../auth/password';
import FormField from './FormField';

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

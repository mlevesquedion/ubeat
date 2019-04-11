<template>
  <FormField
    fieldName="Username"
    iconName="user"
    :value="value"
    :validator="validator"
  />
</template>

<script>
import Username from '../../auth/username';
import FormField from './AuthField';

export default {
  name: 'UsernameField',
  props: ['value'],
  data() {
    return {
      validator: Username
    };
  },
  components: { FormField }
};
</script>

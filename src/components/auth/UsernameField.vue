<template>
  <FormField
    :validator="validator"
    :value="value"
    fieldName="Username"
    iconName="user"
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

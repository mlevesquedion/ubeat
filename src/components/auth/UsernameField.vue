<template>
  <AuthField
    :validator="validator"
    :value="value"
    fieldName="Username"
    iconName="user"
  />
</template>

<script>
import Username from '../../auth/username';
import AuthField from './AuthField';

export default {
  name: 'UsernameField',
  props: ['value'],
  data() {
    return {
      validator: Username
    };
  },
  components: { AuthField }
};
</script>

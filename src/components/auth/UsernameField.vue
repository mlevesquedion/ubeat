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
import FormField from './FormField';

export default {
  name: 'EmailField',
  props: ['value'],
  data() {
    return {
      validator: Username
    };
  },
  components: { FormField }
};
</script>

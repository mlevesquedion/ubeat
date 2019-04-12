<template>
  <div class="field">
    <label class="label">{{ fieldName }}</label>
    <div class="control has-icons-left">
      <input
        :class="{
          'is-success': value.isValid,
          'is-danger': hasError
        }"
        :placeholder="fieldName"
        :type="type"
        @blur="onBlur"
        @keydown.enter="emitSubmitted"
        class="input"
        v-model="fieldValue"
      />
      <span class="icon is-small is-left">
        <i :class="`fa fa-${iconName}`"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="hasError">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthField',
  props: ['fieldName', 'iconName', 'value', 'validator', 'isPassword'],
  data() {
    return {
      fieldValue: this.value.value,
      error: '',
      dirty: false,
      wasBlurred: false,
      type: this.isPassword ? 'password' : 'text'
    };
  },
  computed: {
    hasError() {
      return this.dirty && this.wasBlurred && !this.value.isValid;
    }
  },
  methods: {
    onBlur() {
      /*
          This check ensures that we don't annoy the user with an error message when (s)he
          starts typing and up to now has only clicked into and out of the field without
          entering anything.
         */
      if (this.dirty) {
        this.wasBlurred = true;
      }
    },
    emitSubmitted() {
      this.$root.$emit('submitted');
    }
  },
  watch: {
    fieldValue(value) {
      this.dirty = true;
      this.error = this.validator.validate(value);
      this.$parent.$emit('input', {
        ...this.value,
        value,
        isValid: this.error === ''
      });
    }
  }
};
</script>

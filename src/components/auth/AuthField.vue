<template>
  <div class="field">
    <label class="label">{{ fieldName }}</label>
    <div class="control has-icons-left">
      <input
        v-model="fieldValue"
        class="input"
        :class="{
          'is-success': value.isValid,
          'is-danger': hasError
        }"
        :type="type"
        :placeholder="fieldName"
        @blur="onBlur"
        @keydown.enter="onEmit"
      />
      <span class="icon is-small is-left">
        <i :class="`fa fa-${iconName}`"></i>
      </span>
    </div>
    <p v-if="hasError" class="help is-danger">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthField',
  props: ['fieldName', 'iconName', 'value', 'validator', 'isPassword', 'eventEmittedOnEnter'],
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
    onEmit() {
      this.$root.$emit(this.eventEmittedOnEnter);
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

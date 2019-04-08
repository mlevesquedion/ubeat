const validate = email => {
  if (email === '') {
    return "Email can't be empty.";
  }
  // Really basic check, not actually a complete way of validating an email
  if (!/\w+@\w{2,}\.\w{2,}/.test(email)) {
    return 'Email has invalid format.';
  }
  return '';
};

export default {
  validate
};

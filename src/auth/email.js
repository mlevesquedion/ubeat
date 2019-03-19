const validate = email => {
  if (email === '') {
    return "Email can't be empty.";
  }
  if (!/\w+@\w{2,}\.\w{2,}/.test(email)) {
    return 'Email has invalid format.';
  }
  return '';
};

export default {
  validate
};

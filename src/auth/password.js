const validate = password => {
  if (password.length < 10) {
    return 'Password is too short.';
  }
  if (password.length > 30) {
    return 'Password is too long.';
  }
  return '';
};

export default {
  validate
};

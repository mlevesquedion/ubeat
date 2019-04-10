const validate = password => {
  if (password.length < 8) {
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

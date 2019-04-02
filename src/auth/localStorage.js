const saveUser = userData => {
  localStorage.setItem('user', JSON.stringify(userData));
};

const getUser = () => JSON.parse(localStorage.getItem('user'));

export default {
  saveUser,
  getUser
};

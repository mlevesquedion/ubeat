import isEmpty from './utils/isEmpty';

const store = {
  state: {
    user: {}
  },
  getUser() {
    if (isEmpty(this.state.user)) {
      this.state.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.state.user;
  },
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.state.user = user;
  }
};

export default store;

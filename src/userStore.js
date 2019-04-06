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
  id() {
    return this.getUser().id;
  },
  isUser(user) {
    return user.id === this.id();
  },
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.state.user = user;
  },
  following() {
    return this.state.user.following;
  },
  followingIds() {
    return this.following().map(u => u.id);
  },
  isFollowing(user) {
    return this.followingIds().indexOf(user.id) !== -1;
  }
};

export default store;

<template>
  <div class="container">
    <div class="hero-body">
      <div class="columns is-mobile is-multiline is-centered ">
        <div v-for="friend in user1.following" class=" ">
          <button class="column friend-card btn">
            <div class="friend-initial">
              <p>{{ friend.name[0] }}</p>
            </div>
            <div class="friend-name">{{ friend.name }}</div>
            <div class="follow-user-friend">
              <div v-if="friend.isFollowing">
                <i class="fas fa-check add-friend"></i>
                Unfollow
              </div>
              <button v-else>
                <i class="fas fa-user-plus bumped-left"></i
                ><span class="bumped-right">
                  Follow
                </span>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFriends',
  props: ['friend', 'index', 'userList'],
  data() {
    return {
      user1: {},
      isUnfollowing: false
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.friend-card {
  color: white;
  border-radius: 2px;
  margin: 20px;
  display: block;
  padding: 20px;
  text-align: center;
  min-width: 200px;
  background-color: #242424;
  border: None;
}

.friend-card:hover {
  background-color: dimgrey;
}

.friend-content {
  background-color: #181818;
  border: 1px solid #535353;
  border-top: 0;
}

.check-icon {
  float: left;
  padding: 0 10px 0 0;
  font-size: 10px;
  margin-top: 10px;
}

.friend-initial {
  margin: auto;
  position: relative;
  font-size: 25px;
  background-color: grey;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
}

.friend-initial p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.follow-check {
  position: absolute;
  top: 15px;
  margin-right: 10px;
}

.friend-name {
  margin-top: 20px;
  font-size: 16px;
}

.friend-email {
  font-size: 10px;
}

.follow-user-friend {
  margin-top: 10px;
  color: $primary;
}

.follow-user-friend button {
  color: white;
  border: none;
  background-color: $primary;
}

#user-image {
  display: flex;
  width: 100px;
}

.add-friend {
  height: 20px;
}
</style>

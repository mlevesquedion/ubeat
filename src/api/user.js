import axios from 'axios';
import { apiRoot } from './constants';
import Headers from '../auth/headers';
import User from '../models/user';

const userRoot = `${apiRoot}users/`;
const followRoot = `${apiRoot}follow/`;

const get = id =>
  axios
    .get(`${userRoot}${id}`, Headers.auth())
    .then(({ data }) => User.from(data));

const follow = id =>
  axios.post(followRoot, { id }, Headers.auth()).then(({ data }) => data);

const unfollow = id =>
  axios.delete(`${followRoot}${id}`, Headers.auth()).then(({ data }) => data);

export default {
  get,
  follow,
  unfollow
};

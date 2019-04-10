import * as qs from 'qs';
import axios from 'axios';
import { apiRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';
import Headers from '../auth/headers';

const isAuthenticated = () => axios.get(`${apiRoot}tokenInfo`, Headers.auth());

const signup = signupData =>
  axios
    .post(`${apiRoot}signup`, qs.stringify(signupData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(({ data }) => data);

const login = loginData =>
  axios
    .post(`${apiRoot}login`, qs.stringify(loginData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(({ data }) => {
      CookieMonster.setToken(data.token);
      return data;
    });

const logout = () =>
  axios.get(`${apiRoot}logout`).then(_ => CookieMonster.clearToken());

export default {
  isAuthenticated,
  signup,
  login,
  logout
};

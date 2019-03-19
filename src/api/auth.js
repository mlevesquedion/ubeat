import * as qs from 'qs';
import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';

const isAuthenticated = () =>
  axios.get(`${secureRoot}tokenInfo`, {
    headers: { Authorization: CookieMonster.getToken() }
  });

const signup = signupData =>
  axios
    .post(`${secureRoot}signup`, qs.stringify(signupData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(({ data }) => data);

const login = loginData =>
  axios
    .post(`${secureRoot}login`, qs.stringify(loginData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(({ data }) => data)
    .then(userData => {
      CookieMonster.setToken(userData.token);
      return userData;
    });

const logout = axios.get(`${secureRoot}logout`);

export default {
  isAuthenticated,
  signup,
  login,
  logout
};

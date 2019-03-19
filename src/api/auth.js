import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/CookieMonster';

const isAuthenticated = () =>
  axios
    .get(`${secureRoot}tokenInfo`, {
      headers: { Authorization: CookieMonster.getToken() }
    })
    .then(_ => true)
    .catch(_ => false);

const signup = signupData =>
  axios
    .post(`${secureRoot}signup`, signupData)
    .then(({ userData }) => userData);

const login = loginData =>
  axios
    .post(`${secureRoot}login`, loginData)
    .then(({ userData }) => userData)
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

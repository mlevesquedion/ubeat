import * as qs from 'qs';
import axios from 'axios';
import apiRoot from './apiRoot';
import Token from '../auth/token';
import Headers from '../auth/headers';

const authHeaders = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const isAuthenticated = () => axios.get(`${apiRoot}tokenInfo`, Headers.auth());

const signup = signupData =>
  axios
    .post(`${apiRoot}signup`, qs.stringify(signupData), authHeaders)
    .then(({ data }) => data);

const login = loginData =>
  axios
    .post(`${apiRoot}login`, qs.stringify(loginData), authHeaders)
    .then(({ data }) => {
      Token.set(data.token);
      return data;
    });

const logout = () => axios.get(`${apiRoot}logout`).then(_ => Token.clear());

export default {
  isAuthenticated,
  signup,
  login,
  logout
};

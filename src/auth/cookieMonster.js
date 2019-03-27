import * as Cookies from 'js-cookie';

const tokenName = 'token';

const setToken = token => Cookies.set(tokenName, token);
const getToken = () => Cookies.get(tokenName);
const hasToken = getToken() !== undefined;
const clearToken = () => Cookies.remove(tokenName);

export default {
  setToken,
  getToken,
  hasToken,
  clearToken
};

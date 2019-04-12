import * as Cookies from 'js-cookie';

const tokenName = 'token';

const set = token => Cookies.set(tokenName, token);
const get = () => Cookies.get(tokenName);
const clear = () => Cookies.remove(tokenName);

export default {
  set,
  get,
  clear
};

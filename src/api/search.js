import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';

const globalSearch = () =>
  axios.get(`${secureRoot}search?q=skrillex`, {
    headers: { Authorization: CookieMonster.getToken() }
  });

export default {
  globalSearch
};

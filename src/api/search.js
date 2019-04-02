import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';
import SearchResults from '../models/searchResults';

const searchRoot = `${secureRoot}search/`;
const globalSearchRoot = `${searchRoot}?limit=20&q=`;
const userSearchRoot = `${searchRoot}users/?q=`;
const authorization = () => ({
  headers: { Authorization: CookieMonster.getToken() }
});

const usersGlobal = query =>
  axios
    .get(`${userSearchRoot}${encodeURIComponent(query)}`, authorization())
    .then(({ data }) => data);

const everythingElseGlobal = query =>
  axios
    .get(`${globalSearchRoot}${encodeURIComponent(query)}`, authorization())
    .then(({ data }) => data.results);

const global = query =>
  axios
    .all([usersGlobal(query), everythingElseGlobal(query)])
    .then(
      axios.spread((users, everythingElse) =>
        SearchResults.from([...users, ...everythingElse])
      )
    );

export default {
  global
};

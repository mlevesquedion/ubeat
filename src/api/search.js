import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';
import SearchResults from '../models/searchResults';

const global = query =>
  axios
    .get(`${secureRoot}search?q=${encodeURIComponent(query)}`, {
      headers: { Authorization: CookieMonster.getToken() }
    })
    .then(({ data }) => SearchResults.from(data.results));

export default {
  global
};

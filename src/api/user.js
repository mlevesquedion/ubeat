import axios from 'axios';
import { secureRoot } from './constants';
import Album from '../models/album';
import AlbumTracks from '../models/albumTracks';
import CookieMonster from '../auth/cookieMonster';

const userRoot = `${secureRoot}/users`;
const followRoot = `${secureRoot}/follow`;

const user = id =>
  axios
    .get(`${userRoot}${id}`, {
      headers: { Authorization: CookieMonster.getToken() }
    })
    .then(({ data }) => User.from(data));

export default {
  getAlbum,
  getAlbumTracks
};

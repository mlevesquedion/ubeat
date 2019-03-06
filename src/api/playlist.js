import axios from 'axios';
import { apiRoot } from './constants';
import Playlist from '../models/playlist';

const playlistRoot = `${apiRoot}playlist/`;

export const getPlaylist = id => (callBack, onError) => {
  axios
    .get(`${playlistRoot}${id}`)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};

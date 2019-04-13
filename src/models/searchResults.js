import Track from './track';
import Album from './album';
import Artist from './artist';

export default {
  from: results => {
    const albums = [];
    const artists = [];
    const tracks = [];
    const users = [];
    results.forEach(r => {
      switch (r.wrapperType) {
        case 'collection':
          albums.push(Album.from(r));
          break;
        case 'artist':
          artists.push(Artist.from(r));
          break;
        case 'track':
          tracks.push(Track.fromBackend(r));
          break;
        default:
          users.push(r);
          break;
      }
    });
    return {
      albums,
      artists,
      tracks,
      users
    };
  }
};

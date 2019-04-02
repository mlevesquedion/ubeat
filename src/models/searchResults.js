import Track from './track';
import Album from './album';
import Artist from './artist';

export default {
  from: results => {
    const albums = [];
    const artists = [];
    const tracks = [];
    results.forEach(r => {
      console.log(r);
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
          break;
      }
    });
    return {
      albums,
      artists,
      tracks
    };
  }
};

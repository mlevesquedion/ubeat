import Track from './track';
import Album from './album';
import Artist from './artist';

export default {
  from: results => {
    const albums = [];
    const artists = [];
    const tracks = [];
    results.forEach(r => {
      switch (r.wrapperType) {
        case 'collection':
          albums.push(Album.from(r));
          console.log(r);
          console.log(Album.from(r));
          break;
        case 'artist':
          artists.push(Artist.from(r));
          // console.log(r);
          // console.log(Artist.from(r));
          break;
        case 'track':
          tracks.push(Track.fromBackend(r));
          // console.log(r);
          // console.log(Track.fromBackend(r));
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

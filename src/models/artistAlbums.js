import Album from './album';

const ArtistAlbums = {
  from: albumsData => albumsData.map(albumData => Album.from(albumData))
};

export default ArtistAlbums;

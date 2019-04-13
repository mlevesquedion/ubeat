import defaultArtistImagePath from '../utils/defaultArtistImagePath';

const ArtistList = {
  from: artists =>
    artists.map(a => ({
      name: a.name,
      src: a.image[4]['#text'] || defaultArtistImagePath,
      url: a.url
    }))
};

export default ArtistList;

import isArtistImagePresent from '../utils/isArtistImagePresent';


const ArtistList = {
  from: artists =>
    artists.map(a => ({
      name: a.name,
      src: isArtistImagePresent(a.image[4]['#text']),
      url: a.url
    }))
};

export default ArtistList;

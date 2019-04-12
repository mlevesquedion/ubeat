import isArtistImagePresent from '../utils/isArtistImagePresent';

const ArtistDetails = {
  from: artistData => ({
    name: artistData.name,
    bio: artistData.bio.summary.replace(/ <.*>/, ''),
    src: isArtistImagePresent(artistData.image[5]['#text'])
  })
};


export default ArtistDetails;

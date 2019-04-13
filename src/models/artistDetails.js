import defaultArtistImagePath from '../utils/defaultArtistImagePath';

const ArtistDetails = {
  from: artistData => ({
    name: artistData.name,
    bio: artistData.bio.summary.replace(/ <.*>/, ''),
    src: artistData.image[5]['#text'] || defaultArtistImagePath
  })
};

export default ArtistDetails;

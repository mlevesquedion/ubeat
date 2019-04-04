const ArtistDetails = {
  from: detailArtistData => ({
    name: detailArtistData.name,
    bio: detailArtistData.bio.summary.replace(/ <.*>/, ''),
    image: detailArtistData.image[5]['#text'],
    similarArtists: detailArtistData.similar.artist
  })
};
export default ArtistDetails;

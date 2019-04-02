const Artist = {
  from: artistData => ({
    id: artistData.artistId,
    name: artistData.artistName,
    url: artistData.artistLinkUrl,
    genre: artistData.primaryGenreName
  })
};

export default Artist;

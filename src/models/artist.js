const Artist = {
  from: artistData => ({
    name: artistData.artistName,
    url: artistData.artistLinkUrl,
    genre: artistData.primaryGenreName
  })
};

export default Artist;

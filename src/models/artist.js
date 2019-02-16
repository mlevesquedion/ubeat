const Artist = {
  from: json => {
    const artistData = json.results[0];
    return {
      name: artistData.artistName,
      url: artistData.artistLinkUrl,
      genre: artistData.primaryGenreName
    };
  }
};

export default Artist;

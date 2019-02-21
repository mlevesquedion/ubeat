const ArtistAlbums = {
  from: json => {
    const tracksData = json.results;
    return tracksData.map(trackData => ({
      id: trackData.trackId,
      number: trackData.trackNumber,
      name: trackData.trackName,
      url: trackData.trackViewUrl,
      duration: trackData.trackTimeMillis,
      albumUrl: trackData.collectionViewUrl
    }));
  }
};

export default ArtistAlbums;

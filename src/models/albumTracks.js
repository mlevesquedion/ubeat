const AlbumTracks = {
  from: json => {
    const tracksData = json.results;
    return tracksData.map(trackData => ({
      id: trackData.trackId,
      number: trackData.trackNumber,
      name: trackData.trackName,
      url: trackData.trackViewUrl,
      duration: trackData.trackTimeMillis / 1000,
      albumUrl: trackData.collectionViewUrl
    }));
  }
};

export default AlbumTracks;

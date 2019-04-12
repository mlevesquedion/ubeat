import { v4 as uuid } from 'uuid';

export default {
  fromBackend: trackData => ({
    uniqueId: uuid(),
    id: trackData.trackId,
    number: trackData.trackNumber,
    name: trackData.trackName,
    album: trackData.collectionName,
    albumId: trackData.collectionId,
    artist: trackData.artistName,
    artistId: trackData.artistId,
    url: trackData.trackViewUrl,
    sample: trackData.previewUrl,
    duration: trackData.trackTimeMillis / 1000,
    albumUrl: trackData.collectionViewUrl
  }),
  toBackend: trackData => ({
    trackId: trackData.id,
    trackNumber: trackData.number,
    trackName: trackData.name,
    collectionName: trackData.album,
    collectionId: trackData.albumId,
    artistName: trackData.artist,
    artistId: trackData.artistId,
    trackViewUrl: trackData.url,
    previewUrl: trackData.sample,
    trackTimeMillis: trackData.duration * 1000,
    collectionViewUrl: trackData.albumUrl
  })
};

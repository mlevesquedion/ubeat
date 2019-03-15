import { uuid } from 'bulma-extensions/bulma-calendar/src/js/utils';

export default {
  fromBackend: trackData => ({
    id: trackData.trackId,
    uniqueId: uuid(),
    number: trackData.trackNumber,
    name: trackData.trackName,
    album: trackData.collectionName,
    artist: trackData.artistName,
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
    artistName: trackData.artist,
    trackViewUrl: trackData.url,
    previewUrl: trackData.sample,
    trackTimeMillis: trackData.duration * 1000,
    collectionViewUrl: trackData.albumUrl
  })
};

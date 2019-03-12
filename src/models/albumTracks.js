import Track from './track';

export default {
  from: tracksData => tracksData.map(t => Track.fromBackend(t))
};

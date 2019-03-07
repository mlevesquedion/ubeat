import Track from './track';

export default {
  from: tracksData =>
    tracksData.map(Track.from)
};


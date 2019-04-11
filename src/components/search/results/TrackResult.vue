<template>
  <Track :track="track" :playlists="playlists" :playingTrackId="playingTrackId">
    <TrackDetails :track="track" />
  </Track>
</template>

<script>
import Track from '../../album/Track';
import TrackDetails from '../../album/TrackDetails';

export default {
  name: 'TrackResult',
  props: ['track', 'playlists', 'playingTrackId'],
  components: {
    Track,
    TrackDetails
  }
};
</script>

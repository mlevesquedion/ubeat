<template>
  <Track :playingTrackId="playingTrackId" :playlists="playlists" :track="track">
    <TrackDetails :track="track" />
  </Track>
</template>

<script>
import Track from '../../album/track/Track';
import TrackDetails from '../../album/track/TrackDetails';

export default {
  name: 'TrackResult',
  props: ['track', 'playlists', 'playingTrackId'],
  components: {
    Track,
    TrackDetails
  }
};
</script>

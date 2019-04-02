export default {
  format: seconds => {
    const minutes = Math.floor(seconds / 60);
    const leftoverSeconds = Math.floor(seconds % 60);
    const formattedSeconds = leftoverSeconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }
};

export default {
  format: seconds => {
    const minutes = Math.floor(seconds / 60);
    const leftOverSeconds = Math.floor(seconds % 60);
    const formattedSeconds = leftOverSeconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }
};

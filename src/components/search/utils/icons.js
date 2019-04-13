const iconFromQueryType = queryType => {
  switch (queryType) {
    case 'artist':
      return 'fa-star';
    case 'album':
      return 'fa-compact-disc';
    case 'track':
      return 'fa-music';
    case 'user':
      return 'fa-user';
    case 'global':
    default:
      return 'fa-search';
  }
};

export default iconFromQueryType;

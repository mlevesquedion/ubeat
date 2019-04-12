const PlaylistState = Object.freeze({
  NORMAL: Symbol('normal'),
  EDITING: Symbol('editing'),
  UPDATING: Symbol('updating'),
  DELETING: Symbol('deleting')
});

export default PlaylistState;

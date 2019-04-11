const PlaylistState = Object.freeze({
  NORMAL: Symbol('normal'),
  EDITING: Symbol('editing'),
  UPDATING: Symbol('updating'),
  PENDING_DELETION: Symbol('pending'),
  DELETING: Symbol('deleting')
});

export default PlaylistState;

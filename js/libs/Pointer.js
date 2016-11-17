var Pointer = (function() {
  var pointer = {
    pos1: {
      x: -1,
      y: -1,
    },
    pos0: {
      x: -1,
      y: -1
    },
    isClicked: false,
    release: function release() {
      this.isClicked = false;
      this.pos0.y = -1;
      this.pos0.x = -1;
    },
    init: function init() {
      this.release();
    },
    set: function set(pos) {
      this.pos1.x = pos.x;
      this.pos1.y = pos.y;
    }
  };
  return pointer;
})();

(function() {
  var Ui;

  Ui = (function() {
    function Ui() {}

    Ui.prototype.render = function(board) {
      var div, id, position, robot, _ref, _results;

      $("#board").css({
        height: board.height,
        width: board.width,
        position: "relative"
      });
      _ref = board.robots;
      _results = [];
      for (id in _ref) {
        robot = _ref[id];
        position = board.positions[id];
        div = $("#robot_" + id);
        if (div.length === 0 && position) {
          div = $("<div></div>");
          div.attr({
            id: "robot_" + id
          });
          $("#board").append(div);
        }
        _results.push(div.css({
          background: robot.color,
          height: 40,
          width: 40,
          position: 'absolute'
        }).css("margin-left", "" + position.x + "px").css("margin-top", "" + position.y + "px"));
      }
      return _results;
    };

    return Ui;

  })();

  this.Ui = new Ui;

}).call(this);

(function() {
  this.MainRobotLoop = (function() {
    function MainRobotLoop() {
      this.initializeBoard();
      this.lastExecuted = new Date();
      this.start();
    }

    MainRobotLoop.prototype.start = function() {
      var _this = this;

      return this.running = setInterval((function() {
        return _this.loop();
      }), 5);
    };

    MainRobotLoop.prototype.stop = function() {
      return this.running = false;
    };

    MainRobotLoop.prototype.initializeBoard = function() {
      this.height = 400;
      this.width = 400;
      this.robot1 = new Robot({
        id: 1,
        hitPoints: 100,
        color: "red",
        visionAngle: 90,
        visionRange: 10,
        visionDirection: 0
      });
      this.robot2 = new Robot({
        id: 2,
        hitPoints: 100,
        color: "blue",
        visionAngle: 90,
        visionRange: 10,
        visionDirection: 0
      });
      this.board = new Board({
        height: this.height,
        width: this.width,
        robotOne: this.robot1,
        robotTwo: this.robot2
      });
      this.board.teleport(this.robot1.id, {
        x: 4,
        y: 10
      });
      return this.board.teleport(this.robot2.id, {
        x: 144,
        y: 100
      });
    };

    MainRobotLoop.prototype.loop = function() {
      var delta, now;

      now = new Date();
      delta = this.lastExecuted - now;
      return Ui.render(this.board);
    };

    return MainRobotLoop;

  })();

}).call(this);

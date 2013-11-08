(function() {
  this.Board = (function() {
    function Board(options) {
      options = options || {};
      this.height = options.height;
      this.width = options.width;
      this.robots = {};
      this.robots[options.robotOne.id] = options.robotOne;
      this.robots[options.robotTwo.id] = options.robotTwo;
      this.positions = {};
    }

    Board.prototype.teleport = function(robotId, placement) {
      return this.positions[robotId] = placement;
    };

    Board.prototype.move = function(robotId, amount) {
      this.positions[robotId].x += amount.x;
      return this.positions[robotId].y += amount.y;
    };

    Board.prototype.robotCanSee = function(robot1Id, robot2Id) {
      var angleToTarget, distanceToTarget;

      angleToTarget = Math.angleBetweenVectors(this.positions[robot1Id], this.positions[robot2Id]);
      distanceToTarget = Math.distanceBetweenPoints(this.positions[robot1Id], this.positions[robot2Id]);
      return this.isInViewOf(this.robots[robot1Id], angleToTarget, distanceToTarget);
    };

    Board.prototype.isInViewOf = function(seeingRobot, targetAngle, targetDistance) {
      if (targetDistance <= seeingRobot.visionRange && targetAngle >= seeingRobot.minViewingAngle() && targetAngle <= seeingRobot.maxViewingAngle()) {
        return true;
      } else {
        return false;
      }
    };

    Board.prototype.shotFired = function(shot) {
      if (this.robotCanSee(shot.from.id, shot.at.id)) {
        shot.at.hitPoints -= shot.power;
        return "HIT";
      } else {
        return "MISS";
      }
    };

    return Board;

  })();

}).call(this);

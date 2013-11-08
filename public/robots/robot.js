(function() {
  this.Robot = (function() {
    function Robot(options) {
      options = options || {};
      this.id = options.id;
      this.speed = options.speed;
      this.hitPoints = options.hitPoints;
      this.color = options.color;
      this.visionAngle = options.visionAngle;
      this.visionRange = options.visionRange;
      this.visionDirection = options.visionDirection;
    }

    Robot.prototype.rotateVision = function(amount) {
      return this.visionDirection += amount;
    };

    Robot.prototype.maxViewingAngle = function() {
      return this.visionDirection + (this.visionAngle / 2);
    };

    Robot.prototype.minViewingAngle = function() {
      return this.visionDirection - (this.visionAngle / 2);
    };

    return Robot;

  })();

}).call(this);

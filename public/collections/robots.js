(function() {
  this.Robots = (function() {
    function Robots() {
      this.list = [];
    }

    Robots.prototype.add = function(robot) {
      return this.list.push(robot);
    };

    Robots.prototype.count = function() {
      return this.list.length;
    };

    return Robots;

  })();

}).call(this);

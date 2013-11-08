(function() {
  Math.distanceBetweenPoints = function(point1, point2) {
    var xs, ys;

    xs = point2.x - point1.x;
    xs = xs * xs;
    ys = point2.y - point1.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  };

  Math.angleBetweenVectors = function(v1, v2) {
    var angle, vectorX, vectorY;

    vectorX = v2.x - v1.x;
    vectorY = v2.y - v1.y;
    angle = Math.atan2(vectorY, vectorX);
    angle = angle * 180 / Math.PI;
    if (angle < 0) {
      return 360 + angle;
    } else {
      return angle;
    }
  };

}).call(this);

Math.distanceBetweenPoints = (point1, point2) ->
  xs = point2.x - point1.x
  xs = xs * xs
  ys = point2.y - point1.y
  ys = ys * ys
  Math.sqrt( xs + ys )

Math.angleBetweenVectors = (v1, v2) ->
  vectorX = v2.x - v1.x
  vectorY = v2.y - v1.y
  angle   = Math.atan2(vectorY, vectorX)
  angle = angle * 180 / Math.PI
  if angle < 0
    360 + angle
  else
    angle

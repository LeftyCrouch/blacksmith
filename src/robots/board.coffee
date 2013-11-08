class @Board
  constructor: (options) ->
    options = options || {}
    @height = options.height
    @width  = options.width
    @robots = {}
    @robots[options.robotOne.id] = options.robotOne
    @robots[options.robotTwo.id] = options.robotTwo
    @positions = {}

  teleport: (robotId, placement) ->
    @positions[robotId] = placement

  move: (robotId, amount) ->
    @positions[robotId].x += amount.x
    @positions[robotId].y += amount.y

  robotCanSee: (robot1Id, robot2Id) ->
    angleToTarget    = Math.angleBetweenVectors(@positions[robot1Id], @positions[robot2Id])
    distanceToTarget = Math.distanceBetweenPoints(@positions[robot1Id], @positions[robot2Id])
    @isInViewOf(@robots[robot1Id], angleToTarget, distanceToTarget)

  isInViewOf: (seeingRobot, targetAngle, targetDistance) ->
    if targetDistance <= seeingRobot.visionRange       &&
       targetAngle    >= seeingRobot.minViewingAngle() &&
       targetAngle    <= seeingRobot.maxViewingAngle()
      true
    else
      false

  shotFired: (shot) ->
    if @robotCanSee(shot.from.id, shot.at.id)
      shot.at.hitPoints -= shot.power
      "HIT"
    else
      "MISS"

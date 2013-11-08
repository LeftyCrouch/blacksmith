class @Robot
  constructor: (options) ->
    options          = options || {}
    @id              = options.id
    @speed           = options.speed
    @hitPoints       = options.hitPoints
    @color           = options.color
    @visionAngle     = options.visionAngle
    @visionRange     = options.visionRange
    @visionDirection = options.visionDirection

  rotateVision: (amount) -> @visionDirection += amount

  maxViewingAngle: -> @visionDirection + (@visionAngle/2)
  minViewingAngle: -> @visionDirection - (@visionAngle/2)

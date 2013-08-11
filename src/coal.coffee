class @Coal
  constructor: (@mass) ->
    @temperature  = 0
    @excessOxygen = 0

  burn: (oxygen, time) ->
    @excessOxygen = 0
    if oxygen <= 0
      @cool(time)
    else
      @combust(oxygen, time)
    @calcMassReduction(time)

  combust: (oxygen, time) ->
    console.log "Heating up."
    amountOxygenToConsume = @calcOxygenToConsume(oxygen, time)
    @consume(amountOxygenToConsume)
    @excessOxygen += (oxygen - amountOxygenToConsume)

  calcOxygenToConsume: (oxygenAvailable, time) ->
    oxygenCapacityDuringInerval = @oxygenPerInterval(time)
    if oxygenCapacityDuringInerval < oxygenAvailable
      oxygenCapacityDuringInerval
    else
      oxygenAvailable

  oxygenCapacity: ->
    @mass * 0.001
    @mass * Settings.coal.oxygenToMassBurningCapacityRatio

  oxygenPerInterval: (time) ->
    @oxygenCapacity() * parseFloat(time)

  consume: (oxygen) ->
    @temperature += oxygen * Settings.coal.addedOxygenTemperatureIncreaseRatio

  cool: (time) ->
    if @temperature > 0 && @mass > 0
      console.log "Cooling Down."
      @temperature -= time * Settings.coal.coolingTimeRatio
    else
      @temperature = 0

  calcMassReduction: (time) ->
    @mass -= @temperature * time * Settings.coal.massReductionPerTemperatureRatio
    @mass = 0 if @mass < 0

  isDead: ->
    if @mass <= 0
      true
    else
      false

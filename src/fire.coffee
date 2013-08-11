class @Fire
  constructor: ->
    @oxygen = 0
    @temperature = 0
    @mass = 0
    @coals   = []

  addOxygen: (ox) ->
    @oxygen += ox
    @temperature -=  ox * Settings.fire.addedOxygenCoolingRatio

  addCoal: (coal) ->
    @coals.push coal

  burn: (time) ->
    oxygenPerCoal = @oxygen/@coals.length
    for coal in @coals
      @oxygen -= oxygenPerCoal
      coal.burn(oxygenPerCoal, time)
      @oxygen += coal.excessOxygen
    @calcTemperature()
    @calcMass()
    @clearDeadCoals()

  calcTemperature: ->
    @temperature = 0
    for coal in @coals
      @temperature += coal.temperature
    @temperature = 0 if @temperature < 0

  calcMass: ->
    @mass = 0
    for coal in @coals
      @mass += coal.mass

  clearDeadCoals: ->
    for coal in @coals
      if coal.isDead()
        delete @coals.pop(@coals.indexOf coal)

class FireUi
  constructor: ->

  drawFire: (fire) ->
    $("#numberOfCoals").html(fire.coals.length)
    $("#temperature").html(fire.temperature.toFixed 1)
    $("#mass").html(fire.mass.toFixed 2)
    $("#oxygen").html(fire.oxygen.toFixed 2)
window.FireUi = new FireUi

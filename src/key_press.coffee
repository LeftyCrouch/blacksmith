class @KeypressListener
  constructor: (a) ->
    @setListeners()
    @shovel = {}
    @bellows = oxygen: 0

  setListeners: ->
    $('body').keypress (event) => @handleKeypress(event)

  handleKeypress: (e) ->
    which = if e.keyCode then e.keyCode else e.which
    switch which
      when 97
        @fillShovel()
      when 100
        @dumpCoalInFire()
      when 119
        @fillBellows()
      when 115
        @squeezBellows()
      else
        console.log which

  fillShovel: ->
    numberOfCoals = Math.floor((Math.random()*30)+10)
    coals = []
    for n in [0..numberOfCoals]
      coalMass = Math.floor((Math.random()*15)+1)
      coals.push new Coal(coalMass)
    @shovel.coals = coals
    $("#shovel").html @shovel.coals.length

  dumpCoalInFire: ->
    runningLoop.fire.addCoals(@shovel.coals)
    @shovel.coals = []
    $("#shovel").html @shovel.coals.length

  fillBellows: ->
    @bellows.oxygen += 1
    $("#bellowsOxygen").html @bellows.oxygen

  squeezBellows: ->
    if @bellows.oxygen > 0
      @bellows.oxygen -= 1
      runningLoop.fire.addOxygen(1)
      $("#bellowsOxygen").html @bellows.oxygen

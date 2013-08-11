class @MainLoop
  constructor: ->
    console.log "Starting Main Loop"
    @fire = new Fire
    @start()

  start: ->
    @running = setInterval(( ()=> @loop() ), 15)
    "Running"

  loop: ->
    @lastExecuted = new Date() if !@lastExecuted
    now = new Date()
    delta = now - @lastExecuted
    @tick delta
    @render()
    @lastExecuted = now

  tick: (delta)->
    @fire.burn(delta)

  render: ->
    FireUi.drawFire(@fire)

  stop: ->
    clearInterval(@running)



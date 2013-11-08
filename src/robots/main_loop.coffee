class @MainRobotLoop
  constructor: ->
    @initializeBoard()
    @lastExecuted = new Date()
    @start()

  start: ->
    @running = setInterval(( ()=> @loop() ), 5)

  stop: -> @running = false

  initializeBoard: ->
    @height = 400
    @width  = 400
    @robot1 = new Robot(
      id:              1
      hitPoints:       100
      color:           "red"
      visionAngle:     90
      visionRange:     10
      visionDirection: 0)
    @robot2 = new Robot(
      id:              2
      hitPoints:       100
      color:           "blue"
      visionAngle:     90
      visionRange:     10
      visionDirection: 0)
    @board = new Board(
      height:   @height
      width:    @width
      robotOne: @robot1
      robotTwo: @robot2)
    @board.teleport(@robot1.id, {x:4, y:10})
    @board.teleport(@robot2.id, {x:144, y:100})

  loop: ->
    now = new Date()
    delta = @lastExecuted - now
    Ui.render(@board)


describe "Board", ->
  beforeEach ->
    @height = 30
    @width  = 20
    @robot1 = new Robot(
      id:              1
      hitPoints:       100
      visionAngle:     90
      visionRange:     10
      visionDirection: 0)
    @robot2 = new Robot(
      id:              2
      hitPoints:       100
      visionAngle:     90
      visionRange:     10
      visionDirection: 0)
    @board = new Board(
      height:   @height
      width:    @width
      robotOne: @robot1
      robotTwo: @robot2)

  it "has a board size", ->
    expect(@board.height).toEqual @height
    expect(@board.width).toEqual  @width

  it "has robots", ->
    expect(@board.robots[@robot1.id]).toEqual @robot1
    expect(@board.robots[@robot2.id]).toEqual @robot2

  it "teleports robots", ->
    @board.teleport(@robot1.id, {x:1, y:1})
    expect(@board.positions[@robot1.id]).toEqual {x: 1, y:1}

  it "moves robots", ->
    @board.teleport(@robot1.id, {x:1, y:1})
    @board.move(@robot1.id, {x:1, y:1})
    expect(@board.positions[@robot1.id]).toEqual {x: 2, y:2}

  it "knows when a robot can see another robot", ->
    @board.teleport(@robot1.id, {x:0, y:0})
    @board.teleport(@robot2.id, {x:2, y:0})
    expect(@board.robotCanSee(@robot1.id, @robot2.id)).toBeTruthy()
    expect(@board.robotCanSee(@robot2.id, @robot1.id)).toBeFalsy()

    @board.teleport(@robot2.id, {x:30, y:1})
    expect(@board.robotCanSee(@robot1.id, @robot2.id)).toBeFalsy()

  it "let's robots shoot each other", ->
    @board.teleport(@robot1.id, {x:0, y:0})
    @board.teleport(@robot2.id, {x:2, y:0})
    expect(@board.shotFired(from: @robot1, at: @robot2, power: 1)).toEqual "HIT"
    expect(@robot2.hitPoints).toEqual 99
    expect(@board.shotFired(from: @robot2, at: @robot1, power: 1)).toEqual "MISS"
    expect(@robot1.hitPoints).toEqual 100

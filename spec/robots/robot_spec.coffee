describe "Robot", ->
  beforeEach ->
    @robo = new Robot(
      id:              1
      speed:           1
      hitPoints:       100
      color:           "#f00"
      visionAngle:     45
      visionRange:     10
      visionDirection: 0)

  it "initializes", ->
    expect(@robo.id).toEqual 1
    expect(@robo.speed).toEqual 1
    expect(@robo.hitPoints).toEqual 100
    expect(@robo.color).toEqual "#f00"
    expect(@robo.visionAngle).toEqual 45
    expect(@robo.visionRange).toEqual 10
    expect(@robo.visionDirection).toEqual 0

  it "can turn it's head", ->
    @robo.rotateVision(45)
    expect(@robo.visionDirection).toEqual 45

  it "has a max viewing angle", ->
    expect(@robo.maxViewingAngle()).toEqual 22.5

  it "has a min viewing angle", ->
    expect(@robo.minViewingAngle()).toEqual -22.5

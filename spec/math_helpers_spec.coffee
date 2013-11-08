describe "MonkeyMath", ->
  it 'calculates the distance between 2 points', ->
    expect(Math.distanceBetweenPoints({x:0, y:0}, {x:2, y:0})).toEqual 2
    expect(Math.distanceBetweenPoints({x:0, y:0}, {x:0, y:2})).toEqual 2

  it "calculates the angle between 2 vectors", ->
    expect(Math.angleBetweenVectors({x:0, y:0}, {x:2,  y:0})).toEqual    0
    expect(Math.angleBetweenVectors({x:0, y:0}, {x:1,  y:1})).toEqual   45
    expect(Math.angleBetweenVectors({x:0, y:0}, {x:-1, y:1})).toEqual  135
    expect(Math.angleBetweenVectors({x:0, y:0}, {x:-1, y:-1})).toEqual 225
    expect(Math.angleBetweenVectors({x:0, y:0}, {x:1,  y:-1})).toEqual 315


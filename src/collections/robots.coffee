class @Robots
  constructor: ->
    @list = []
  add: (robot) -> @list.push robot
  count: -> @list.length

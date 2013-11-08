class Ui
  render: (board)->
    $("#board").css(height: board.height, width: board.width, position: "relative")
    for id, robot of board.robots
      position = board.positions[id]
      div = $("#robot_#{id}")
      if div.length == 0 && position
        div = $("<div></div>")
        div.attr(id: "robot_#{id}")
        $("#board").append div
      div.css(background: robot.color, height: 40, width: 40, position: 'absolute')
        .css("margin-left",  "#{position.x}px")
        .css("margin-top",    "#{position.y}px")

@Ui = new Ui

(function() {
  describe("Board", function() {
    beforeEach(function() {
      this.height = 30;
      this.width = 20;
      this.robot1 = new Robot({
        id: 1,
        hitPoints: 100,
        visionAngle: 90,
        visionRange: 10,
        visionDirection: 0
      });
      this.robot2 = new Robot({
        id: 2,
        hitPoints: 100,
        visionAngle: 90,
        visionRange: 10,
        visionDirection: 0
      });
      return this.board = new Board({
        height: this.height,
        width: this.width,
        robotOne: this.robot1,
        robotTwo: this.robot2
      });
    });
    it("has a board size", function() {
      expect(this.board.height).toEqual(this.height);
      return expect(this.board.width).toEqual(this.width);
    });
    it("has robots", function() {
      expect(this.board.robots[this.robot1.id]).toEqual(this.robot1);
      return expect(this.board.robots[this.robot2.id]).toEqual(this.robot2);
    });
    it("teleports robots", function() {
      this.board.teleport(this.robot1.id, {
        x: 1,
        y: 1
      });
      return expect(this.board.positions[this.robot1.id]).toEqual({
        x: 1,
        y: 1
      });
    });
    it("moves robots", function() {
      this.board.teleport(this.robot1.id, {
        x: 1,
        y: 1
      });
      this.board.move(this.robot1.id, {
        x: 1,
        y: 1
      });
      return expect(this.board.positions[this.robot1.id]).toEqual({
        x: 2,
        y: 2
      });
    });
    it("knows when a robot can see another robot", function() {
      this.board.teleport(this.robot1.id, {
        x: 0,
        y: 0
      });
      this.board.teleport(this.robot2.id, {
        x: 2,
        y: 0
      });
      expect(this.board.robotCanSee(this.robot1.id, this.robot2.id)).toBeTruthy();
      expect(this.board.robotCanSee(this.robot2.id, this.robot1.id)).toBeFalsy();
      this.board.teleport(this.robot2.id, {
        x: 30,
        y: 1
      });
      return expect(this.board.robotCanSee(this.robot1.id, this.robot2.id)).toBeFalsy();
    });
    return it("let's robots shoot each other", function() {
      this.board.teleport(this.robot1.id, {
        x: 0,
        y: 0
      });
      this.board.teleport(this.robot2.id, {
        x: 2,
        y: 0
      });
      expect(this.board.shotFired({
        from: this.robot1,
        at: this.robot2,
        power: 1
      })).toEqual("HIT");
      expect(this.robot2.hitPoints).toEqual(99);
      expect(this.board.shotFired({
        from: this.robot2,
        at: this.robot1,
        power: 1
      })).toEqual("MISS");
      return expect(this.robot1.hitPoints).toEqual(100);
    });
  });

}).call(this);

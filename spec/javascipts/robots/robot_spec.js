(function() {
  describe("Robot", function() {
    beforeEach(function() {
      return this.robo = new Robot({
        id: 1,
        speed: 1,
        hitPoints: 100,
        color: "#f00",
        visionAngle: 45,
        visionRange: 10,
        visionDirection: 0
      });
    });
    it("initializes", function() {
      expect(this.robo.id).toEqual(1);
      expect(this.robo.speed).toEqual(1);
      expect(this.robo.hitPoints).toEqual(100);
      expect(this.robo.color).toEqual("#f00");
      expect(this.robo.visionAngle).toEqual(45);
      expect(this.robo.visionRange).toEqual(10);
      return expect(this.robo.visionDirection).toEqual(0);
    });
    it("can turn it's head", function() {
      this.robo.rotateVision(45);
      return expect(this.robo.visionDirection).toEqual(45);
    });
    it("has a max viewing angle", function() {
      return expect(this.robo.maxViewingAngle()).toEqual(22.5);
    });
    return it("has a min viewing angle", function() {
      return expect(this.robo.minViewingAngle()).toEqual(-22.5);
    });
  });

}).call(this);

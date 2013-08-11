(function() {
  this.MainLoop = (function() {
    function MainLoop() {
      console.log("Starting Main Loop");
      this.fire = new Fire;
      this.start();
    }

    MainLoop.prototype.start = function() {
      var _this = this;

      this.running = setInterval((function() {
        return _this.loop();
      }), 15);
      return "Running";
    };

    MainLoop.prototype.loop = function() {
      var delta, now;

      if (!this.lastExecuted) {
        this.lastExecuted = new Date();
      }
      now = new Date();
      delta = now - this.lastExecuted;
      this.tick(delta);
      this.render();
      return this.lastExecuted = now;
    };

    MainLoop.prototype.tick = function(delta) {
      return this.fire.burn(delta);
    };

    MainLoop.prototype.render = function() {
      return FireUi.drawFire(this.fire);
    };

    MainLoop.prototype.stop = function() {
      return clearInterval(this.running);
    };

    return MainLoop;

  })();

}).call(this);

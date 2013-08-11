(function() {
  this.KeypressListener = (function() {
    function KeypressListener(a) {
      this.setListeners();
      this.shovel = {};
      this.bellows = {
        oxygen: 0
      };
    }

    KeypressListener.prototype.setListeners = function() {
      var _this = this;

      return $('body').keypress(function(event) {
        return _this.handleKeypress(event);
      });
    };

    KeypressListener.prototype.handleKeypress = function(e) {
      var which;

      which = e.keyCode ? e.keyCode : e.which;
      switch (which) {
        case 97:
          return this.fillShovel();
        case 100:
          return this.dumpCoalInFire();
        case 119:
          return this.fillBellows();
        case 115:
          return this.squeezBellows();
        default:
          return console.log(which);
      }
    };

    KeypressListener.prototype.fillShovel = function() {
      var coalMass, coals, n, numberOfCoals, _i;

      numberOfCoals = Math.floor((Math.random() * 30) + 10);
      coals = [];
      for (n = _i = 0; 0 <= numberOfCoals ? _i <= numberOfCoals : _i >= numberOfCoals; n = 0 <= numberOfCoals ? ++_i : --_i) {
        coalMass = Math.floor((Math.random() * 15) + 1);
        coals.push(new Coal(coalMass));
      }
      this.shovel.coals = coals;
      return $("#shovel").html(this.shovel.coals.length);
    };

    KeypressListener.prototype.dumpCoalInFire = function() {
      runningLoop.fire.addCoals(this.shovel.coals);
      this.shovel.coals = [];
      return $("#shovel").html(this.shovel.coals.length);
    };

    KeypressListener.prototype.fillBellows = function() {
      this.bellows.oxygen += 1;
      return $("#bellowsOxygen").html(this.bellows.oxygen);
    };

    KeypressListener.prototype.squeezBellows = function() {
      if (this.bellows.oxygen > 0) {
        this.bellows.oxygen -= 1;
        runningLoop.fire.addOxygen(1);
        return $("#bellowsOxygen").html(this.bellows.oxygen);
      }
    };

    return KeypressListener;

  })();

}).call(this);

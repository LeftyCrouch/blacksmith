(function() {
  var FireUi;

  this.Fire = (function() {
    function Fire() {
      this.oxygen = 0;
      this.temperature = 0;
      this.mass = 0;
      this.coals = [];
    }

    Fire.prototype.addOxygen = function(ox) {
      this.oxygen += ox;
      return this.temperature -= ox * Settings.fire.addedOxygenCoolingRatio;
    };

    Fire.prototype.addCoal = function(coal) {
      return this.coals.push(coal);
    };

    Fire.prototype.burn = function(time) {
      var coal, oxygenPerCoal, _i, _len, _ref;

      oxygenPerCoal = this.oxygen / this.coals.length;
      _ref = this.coals;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        coal = _ref[_i];
        this.oxygen -= oxygenPerCoal;
        coal.burn(oxygenPerCoal, time);
        this.oxygen += coal.excessOxygen;
      }
      this.calcTemperature();
      this.calcMass();
      return this.clearDeadCoals();
    };

    Fire.prototype.calcTemperature = function() {
      var coal, _i, _len, _ref;

      this.temperature = 0;
      _ref = this.coals;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        coal = _ref[_i];
        this.temperature += coal.temperature;
      }
      if (this.temperature < 0) {
        return this.temperature = 0;
      }
    };

    Fire.prototype.calcMass = function() {
      var coal, _i, _len, _ref, _results;

      this.mass = 0;
      _ref = this.coals;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        coal = _ref[_i];
        _results.push(this.mass += coal.mass);
      }
      return _results;
    };

    Fire.prototype.clearDeadCoals = function() {
      var coal, _i, _len, _ref, _results;

      _ref = this.coals;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        coal = _ref[_i];
        if (coal.isDead()) {
          _results.push(delete this.coals.pop(this.coals.indexOf(coal)));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return Fire;

  })();

  FireUi = (function() {
    function FireUi() {}

    FireUi.prototype.drawFire = function(fire) {
      $("#numberOfCoals").html(fire.coals.length);
      $("#temperature").html(fire.temperature.toFixed(1));
      $("#mass").html(fire.mass.toFixed(2));
      return $("#oxygen").html(fire.oxygen.toFixed(2));
    };

    return FireUi;

  })();

  window.FireUi = new FireUi;

}).call(this);

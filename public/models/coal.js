(function() {
  this.Coal = (function() {
    function Coal(mass) {
      this.mass = mass;
      this.temperature = 0;
      this.excessOxygen = 0;
    }

    Coal.prototype.burn = function(oxygen, time) {
      this.excessOxygen = 0;
      if (oxygen <= 0) {
        this.cool(time);
      } else {
        this.combust(oxygen, time);
      }
      return this.calcMassReduction(time);
    };

    Coal.prototype.combust = function(oxygen, time) {
      var amountOxygenToConsume;

      amountOxygenToConsume = this.calcOxygenToConsume(oxygen, time);
      this.consume(amountOxygenToConsume);
      return this.excessOxygen += oxygen - amountOxygenToConsume;
    };

    Coal.prototype.calcOxygenToConsume = function(oxygenAvailable, time) {
      var oxygenCapacityDuringInerval;

      oxygenCapacityDuringInerval = this.oxygenPerInterval(time);
      if (oxygenCapacityDuringInerval < oxygenAvailable) {
        return oxygenCapacityDuringInerval;
      } else {
        return oxygenAvailable;
      }
    };

    Coal.prototype.oxygenCapacity = function() {
      this.mass * 0.001;
      return this.mass * Settings.coal.oxygenToMassBurningCapacityRatio;
    };

    Coal.prototype.oxygenPerInterval = function(time) {
      return this.oxygenCapacity() * parseFloat(time);
    };

    Coal.prototype.consume = function(oxygen) {
      return this.temperature += oxygen * Settings.coal.addedOxygenTemperatureIncreaseRatio;
    };

    Coal.prototype.cool = function(time) {
      if (this.temperature > 0 && this.mass > 0) {
        return this.temperature -= time * Settings.coal.coolingTimeRatio;
      } else {
        return this.temperature = 0;
      }
    };

    Coal.prototype.calcMassReduction = function(time) {
      this.mass -= this.temperature * time * Settings.coal.massReductionPerTemperatureRatio;
      if (this.mass < 0.5) {
        return this.mass = 0;
      }
    };

    Coal.prototype.isDead = function() {
      if (this.mass <= 0) {
        return true;
      } else {
        return false;
      }
    };

    return Coal;

  })();

}).call(this);

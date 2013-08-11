(function() {
  var Settings;

  Settings = (function() {
    function Settings() {}

    Settings.prototype.coal = {
      oxygenToMassBurningCapacityRatio: 0.001,
      massReductionPerTemperatureRatio: 0.000001,
      coolingTimeRatio: 0.0001,
      addedOxygenTemperatureIncreaseRatio: 0.5
    };

    Settings.prototype.fire = {
      addedOxygenCoolingRatio: 0.5
    };

    return Settings;

  })();

  window.Settings = new Settings;

}).call(this);

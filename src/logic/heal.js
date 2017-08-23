function Heal (player) {
  this._player = player
}

Heal.prototype.run = function () {
  this._player.heal()
}

Heal.run = function (player) {
  var heal = new Heal(player)
  heal.run()
}

export { Heal }

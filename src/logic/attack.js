function Attack (player) {
  this._player = player
}

Attack.prototype.run = function () {
  this._player.getHit(Attack.damage())
}

Attack.run = function (player) {
  var attack = new Attack(player)
  attack.run()
}

Attack.damage = function () {
  return Math.floor((Math.random() * 15) + 1)
}

export { Attack }

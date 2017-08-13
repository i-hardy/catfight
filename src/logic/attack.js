function Attack (player) {
  this._player = player
}

Attack.prototype.run = function (damageType) {
  if (damageType === 'poison') {
    this._player.getHit(Attack.poisonDamage())
  } else {
    this._player.getHit(Attack.damage())
  }
}

Attack.prototype.getPoisoned = function () {
  this._player.getPoisoned()
}

Attack.run = function (player, damageType) {
  var attack = new Attack(player)
  attack.run(damageType)
}

Attack.getPoisoned = function (player) {
  var attack = new Attack(player)
  attack.getPoisoned()
}

Attack.damage = function () {
  return Math.floor((Math.random() * 15) + 1)
}

Attack.poisonDamage = function () {
  return Math.floor((Math.random() * 7) + 1)
}

export { Attack }

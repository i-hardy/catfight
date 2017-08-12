function Player (name) {
  this._name = name
  this._hp = 100
}

Player.prototype.getName = function () {
  return this._name
}

Player.prototype.hitPoints = function () {
  return this._hp
}

Player.prototype.getHit = function (value) {
  this._hp -= value
}

export { Player }

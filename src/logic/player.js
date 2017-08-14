function Player (name) {
  this._name = name
  this._hp = 100
  this._poisonedCount = 0
  this._sleepCount = 0
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

Player.prototype.isPoisoned = function () {
  var status = this._poisonedCount > 0 && this._poisonedCount < 5
  return status
}

Player.prototype.getPoisoned = function () {
  this._poisonedCount += 1
  this.poisonRecover()
}

Player.prototype.poisonRecover = function () {
  if (this._poisonedCount > 4) {
    this._poisonedCount = 0
  }
}

Player.prototype.isAsleep = function () {
  return this._sleepCount > 0 && this._sleepCount < 3
}

Player.prototype.fallAsleep = function () {
  this._sleepCount += 1
  this.wakeUp()
}

Player.prototype.wakeUp = function () {
  if (this._sleepCount > 2) {
    this._sleepCount = 0
  }
}

export { Player }

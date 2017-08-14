function Game (player1, player2) {
  this._players = [player1, player2]
  this._currentTurn = this.whoGoesFirst()
}

Game.prototype.player1 = function () {
  return this._players[0]
}

Game.prototype.player2 = function () {
  return this._players[1]
}

Game.prototype.whoGoesFirst = function () {
  return this._players[Math.floor(Math.random() * this._players.length)]
}

Game.prototype.currentTurn = function () {
  return this._currentTurn
}

Game.prototype.switchTurns = function () {
  if (!this.currentOpponent().isAsleep()) {
    this._currentTurn = this.currentOpponent()
  }
}

Game.prototype.currentOpponent = function () {
  return this._players.filter(player => player !== this.currentTurn())[0]
}

Game.prototype.isOver = function () {
  return !!this.loser()
}

Game.prototype.loser = function () {
  return this._players.filter(player => player.hitPoints() <= 0)[0]
}

Game.prototype.poisonedPlayers = function () {
  return this._players.filter(player => player.isPoisoned() === true)
}

Game.prototype.sleepingPlayers = function () {
  return this._players.filter(player => player.isAsleep() === true)
}

export { Game }

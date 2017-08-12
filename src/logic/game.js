function Game (player1, player2) {
  this._players = [player1, player2]
  this._currentTurn = player1
}

Game.prototype.player1 = function () {
  return this._players[0]
}

Game.prototype.player2 = function () {
  return this._players[1]
}

Game.prototype.currentTurn = function () {
  return this._currentTurn
}

Game.prototype.switchTurns = function () {
  this._currentTurn = this.currentOpponent()
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

export { Game }

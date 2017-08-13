import React, { Component } from 'react'
import PlayerForm from './playerForm'
import { Game } from '../logic/game'
import { Player } from '../logic/player'
import { Attack } from '../logic/attack'
import { AttackButton } from './buttons'

class GameState extends Component {
  constructor (props) {
    super(props)
    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleAttackClick = this.handleAttackClick.bind(this)
    this.state = { isRunning: false, player1: '', player2: '', game: null }
  }

  handleStartClick (player1name, player2name) {
    this.setState({ isRunning: true,
      player1: new Player(player1name),
      player2: new Player(player2name)
    }, function () {
      this.setState({ game: new Game(this.state.player1, this.state.player2) })
    })
  }

  handleAttackClick () {
    Attack.run(this.state.game.currentOpponent())
    this.state.game.switchTurns()
    this.setState()
  }

  render () {
    const isRunning = this.state.isRunning

    let content = null
    if (!isRunning) {
      content = <PlayerForm onSubmit={this.handleStartClick} />
    } else {
      content = <section><p> {this.state.player1.getName()} vs {this.state.player2.getName()} </p>
      </section>
    }

    let gameplay = null
    if (this.state.game) {
      if (this.state.game.isOver()) {
        gameplay = <section>
          <p> GAME OVER!!! {this.state.game.loser().getName()} was defeated! </p>
        </section>
      } else {
        gameplay = <section>
          <p> {this.state.game.player1().hitPoints()}HP {this.state.game.player2().hitPoints()}HP </p>
          <p> {this.state.game.currentTurn().getName()} turn</p>
          <p> <AttackButton onClick={this.handleAttackClick} /> </p>
        </section>
      }
    }

    return (
      <div>
        {content}
        {gameplay}
      </div>
    )
  }
}

export default GameState

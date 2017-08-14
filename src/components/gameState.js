import React, { Component } from 'react'
import PlayerForm from './playerForm'
import PlayerDisplay from './playerDisplay'
import { Game } from '../logic/game'
import { Player } from '../logic/player'
import { Attack } from '../logic/attack'
import { AttackButton, RestartButton, PoisonButton, SleepButton } from './buttons'

class GameState extends Component {
  constructor (props) {
    super(props)
    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleAttackClick = this.handleAttackClick.bind(this)
    this.handlePoisonClick = this.handlePoisonClick.bind(this)
    this.handleSleepClick = this.handleSleepClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = { isRunning: false, game: null }
  }

  handleStartClick (player1name, player2name) {
    this.setState({ isRunning: true,
      game: new Game(new Player(player1name), new Player(player2name))
    })
  }

  handleAttackClick () {
    Attack.run(this.state.game.currentOpponent())
    this.afterAttack()
  }

  handlePoisonClick () {
    if (!this.state.game.currentOpponent().isPoisoned()) {
      Attack.getPoisoned(this.state.game.currentOpponent())
    }
    this.afterAttack()
  }

  handleSleepClick () {
    if (!this.state.game.currentOpponent().isAsleep()) {
      Attack.fallAsleep(this.state.game.currentOpponent())
    }
    this.afterAttack('sleep')
  }

  handleResetClick () {
    this.setState({ isRunning: false,
      game: null
    })
  }

  handlePoisonedPlayers () {
    var poisonedPlayers = this.state.game.poisonedPlayers()
    poisonedPlayers.forEach((player) => {
      Attack.run(player, 'poison')
      player.getPoisoned()
    })
  }

  handleSleepingPlayers () {
    var sleepingPlayers = this.state.game.sleepingPlayers()
    sleepingPlayers.forEach((player) => {
      Attack.fallAsleep(player)
    })
  }

  afterAttack (calledBy) {
    if (calledBy === 'sleep') {
      console.log('sleeping')
      this.handlePoisonedPlayers()
    } else {
      this.handlePoisonedPlayers()
      this.handleSleepingPlayers()
    }
    this.state.game.switchTurns()
    this.setState()
  }

  playerStyle (player) {
    var style = {}
    if (this.state.game.currentTurn() === player) {
      style.boxShadow = '0px 0px 4px 4px #AF262B'
    }
    if (player.isPoisoned()) {
      style.background = '#725C75'
    }
    if (player.isAsleep()) {
      style.background = '#AFCDDB'
    }
    return style
  }

  render () {
    const isRunning = this.state.isRunning
    const isOver = this.state.game && this.state.game.isOver()

    let players = null
    if (!isRunning) {
      players = <section className='main'><PlayerForm onSubmit={this.handleStartClick} /></section>
    } else if (isRunning && !isOver) {
      players = <section className='player-container'>
        <PlayerDisplay player={this.state.game.player1()} pic='jpg' style={this.playerStyle(this.state.game.player1())} />
        <PlayerDisplay player={this.state.game.player2()} pic='png' style={this.playerStyle(this.state.game.player2())} />
      </section>
    } else {
      players = <section className='player-container'>
        <h2> GAME OVER!!! {this.state.game.loser().getName()} was defeated! </h2>
      </section>
    }

    let gameplay = null
    if (isOver) {
      gameplay = <section className='gameplay'>
        <table>
          <tbody>
            <tr>
              <td><RestartButton onClick={this.handleResetClick} /></td>
            </tr>
          </tbody>
        </table>
      </section>
    } else if (isRunning) {
      gameplay = <section className='gameplay'>
        <table>
          <tbody>
            <tr>
              <td> <SleepButton onClick={this.handleSleepClick} /> </td>
              <td> <AttackButton onClick={this.handleAttackClick} /> </td>
              <td> <PoisonButton onClick={this.handlePoisonClick} /> </td>
            </tr>
          </tbody>
        </table>
      </section>
    }

    return (
      <section className='main'>
        {players}
        <center>
          {gameplay}
        </center>
      </section>
    )
  }
}

export default GameState

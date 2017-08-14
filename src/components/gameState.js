import React, { Component } from 'react'
import GameRules from './gameRules'
import PlayerForm from './playerForm'
import ButtonTable from './buttonTable'
import RestartTable from './restartTable'
import PlayerContainer from './playerContainer'
import { Game } from '../logic/game'
import { Player } from '../logic/player'
import { Attack } from '../logic/attack'

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

  render () {
    const isRunning = this.state.isRunning
    const isOver = this.state.game && this.state.game.isOver()

    let players = null
    if (!isRunning) {
      players = <section className='main'><PlayerForm onSubmit={this.handleStartClick} />
        <GameRules /></section>
    } else {
      players = <PlayerContainer game={this.state.game} />
    }

    let gameplay = null
    if (isOver) {
      gameplay = <RestartTable handleResetClick={this.handleResetClick} />
    } else if (isRunning) {
      gameplay = <ButtonTable handleSleepClick={this.handleSleepClick}
        handleAttackClick={this.handleAttackClick}
        handlePoisonClick={this.handlePoisonClick}
       />
    }

    return (
      <section className='main'>
        {players}
        {gameplay}
      </section>
    )
  }
}

export default GameState

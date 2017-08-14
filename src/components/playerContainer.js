import React, { Component } from 'react'
import PlayerDisplay from './playerDisplay'

class PlayerContainer extends Component {
  constructor (props) {
    super()
  }

  playerStyle (currentPlayer, player) {
    var style = {}
    if (currentPlayer === player) {
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

  render (props) {
    const isOver = this.props.game && this.props.game.isOver()
    const player1 = this.props.game.player1()
    const player2 = this.props.game.player2()
    var currentPlayer = this.props.game.currentTurn()

    let content = null
    if (!isOver) {
      content = <section className='player-container'>
        <PlayerDisplay player={player1} pic='jpg'
          style={this.playerStyle(currentPlayer, player1)} />
        <PlayerDisplay player={player2} pic='png'
          style={this.playerStyle(currentPlayer, player2)} />
      </section>
    } else {
      content = <section className='player-container'>
        <h2> GAME OVER!!! {this.props.game.loser().getName()} was defeated! </h2>
      </section>
    }

    return (<section>
      {content}
    </section>
    )
  }
}

export default PlayerContainer

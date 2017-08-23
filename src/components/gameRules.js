import React, { Component } from 'react'

class GameRules extends Component {
  constructor (props) {
    super()
  }

  render (props) {
    return (
      <section className='game-rules'>
        <h2>How to Play</h2>
        <ul>
          <li>Two cats enter... one cat leaves...</li>
          <li>Choose 'Attack' to hit the opponent for up to 15 HP</li>
          <li>Choose 'Poison' for a chance for the opponent to be poisoned and lose up to 7 HP per turn for the next
           four turns</li>
          <li>Choose 'Sleep' for a chance for opponent to fall asleep and miss the next two turns</li>
          <li>Choose 'Heal' to heal the current player for 10 HP</li>
        </ul>
      </section>
    )
  }
}

export default GameRules

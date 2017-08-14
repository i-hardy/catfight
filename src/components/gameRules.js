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
          <li>Choose 'Poison' to cause the opponent to be poisoned and lose up to 7 HP per turn for the next
           four turns</li>
          <li>Choose 'Sleep' to cause the opponent to miss the next two turns</li>
        </ul>
      </section>
    )
  }
}

export default GameRules

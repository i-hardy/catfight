import React, { Component } from 'react'
import GameState from './components/gameState'
import './App.css'

class BattleApp extends Component {
  render () {
    return <div id='battleapp'>
      <center>
        <h1 id='title'> BATTLE! </h1>
        <GameState />
      </center>
    </div>
  }
}

export default BattleApp

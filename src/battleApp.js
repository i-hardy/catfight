import React, { Component } from 'react'
import GameState from './components/gameState'
import './App.css'

class BattleApp extends Component {
  render () {
    return <div id='battleapp'>
      <center>
        <h1 id='title'> CATFIGHT! </h1>
        <GameState />
      </center>
    </div>
  }
}

export default BattleApp

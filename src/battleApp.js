import React, { Component } from 'react'
import GameState from './components/gameState'
import './App.css'

class BattleApp extends Component {
  render () {
    return <section className='main'><h1 id='title'> CATFIGHT! </h1>
      <GameState /></section>
  }
}

export default BattleApp

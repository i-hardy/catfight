import React from 'react'

function StartButton (props) {
  return (
    <button type='submit' onClick={props.onClick}>
      Start Game
    </button>
  )
}

function AttackButton (props) {
  return (
    <button onClick={props.onClick}>
      ATTACK
    </button>
  )
}

function PoisonButton (props) {
  return (
    <button onClick={props.onClick} style={{background: '#725C75'}}>
      POISON
    </button>
  )
}

function SleepButton (props) {
  return (
    <button onClick={props.onClick} style={{background: '#AFCDDB'}}>
      SLEEP
    </button>
  )
}

function HealButton (props) {
  return (
    <button onClick={props.onClick} >
      HEAL
    </button>
  )
}

function RestartButton (props) {
  return (
    <button onClick={props.onClick}>
      Play again?
    </button>
  )
}

export { StartButton }
export { AttackButton }
export { PoisonButton }
export { SleepButton }
export { HealButton }
export { RestartButton }

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
    <button onClick={props.onClick}>
      POISON
    </button>
  )
}

function SleepButton (props) {
  return (
    <button onClick={props.onClick}>
      SLEEP
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
export { RestartButton }

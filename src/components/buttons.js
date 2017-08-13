import React from 'react'

function StartButton (props) {
  return (
    <button onClick={props.onClick}>
      Start game
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
export { RestartButton }

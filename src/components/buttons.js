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

export { StartButton }
export { AttackButton }

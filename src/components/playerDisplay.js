import React, { Component } from 'react'

class PlayerDisplay extends Component {
  constructor (props) {
    super()
  }

  render (props) {
    let name = this.props.player.getName()
    let hitpoints = this.props.player.hitPoints()
    let poisoned = null
    if (this.props.player.isPoisoned()) {
      poisoned = <span>POISONED!!</span>
    }

    return (
      <div>
        {name}<br />
        {hitpoints} HP<br />
        {poisoned}
      </div>
    )
  }
}

export default PlayerDisplay

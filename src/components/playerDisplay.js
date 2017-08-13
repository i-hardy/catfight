import React, { Component } from 'react'

class PlayerDisplay extends Component {
  constructor (props) {
    super()
    this.state = { pic: '' }
    this.rollPic()
  }

  rollPic () {
    fetch('http://thecatapi.com/api/images/get?api_key=MjEzOTk4&type=jpg,png&size=small')
    .then(response => {
      this.setState({ pic: response.url.replace('http', 'https') })
    })
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
        <center>
          {name}<br />
          <img src={this.state.pic} alt='WARRIOR' /><br />
          {hitpoints} HP<br />
          {poisoned}
        </center>
      </div>
    )
  }
}

export default PlayerDisplay

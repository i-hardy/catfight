import React, { Component } from 'react'

class PlayerDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = { pic: '', type: this.props.pic }
    this.rollPic()
  }

  rollPic (props) {
    var type = this.state.type
    fetch('https://thecatapi.com/api/images/get?api_key=MjEzOTk4&type=' + type)
    .then((response) => {
      this.setState({ pic: response.url })
    })
  }

  render (props) {
    let name = this.props.player.getName()
    let hitpoints = null
    if (this.props.player.hitPoints() > 0) {
      hitpoints = this.props.player.hitPoints()
    }
    return (
      <table style={this.props.style}>
        <tr>
          <td>{name}</td>
        </tr>
        <tr>
          <td><img src={this.state.pic} alt='' /></td>
        </tr>
        <tr>
          <td>{hitpoints} HP</td>
        </tr>
      </table>
    )
  }
}

export default PlayerDisplay

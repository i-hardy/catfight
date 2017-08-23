import React, { Component } from 'react'
import { StartButton } from './buttons'

class PlayerForm extends Component {
  constructor (props) {
    super()
    this.state = { player1: '', player2: '' }

    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange1 (event) {
    this.setState({player1: event.target.value})
  }

  handleChange2 (event) {
    this.setState({player2: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.player1, this.state.player2)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><label>
          Player One<br />
          <input type='text' value={this.state.player1} onChange={this.handleChange1} required />
        </label></p>
        <p><label>
          Player Two<br />
          <input type='text' value={this.state.player2} onChange={this.handleChange2} required />
        </label></p>
        <p><StartButton /></p>
      </form>
    )
  }
}

export default PlayerForm

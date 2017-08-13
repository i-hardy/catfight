import React, { Component } from 'react'

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
        <label>
          Player One:
          <input type='text' value={this.state.player1} onChange={this.handleChange1} />
        </label>
        <label>
          Player Two:
          <input type='text' value={this.state.player2} onChange={this.handleChange2} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default PlayerForm

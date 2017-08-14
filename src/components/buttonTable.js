import React, { Component } from 'react'
import { AttackButton, PoisonButton, SleepButton } from './buttons'

class ButtonTable extends Component {
  constructor (props) {
    super()
  }

  render (props) {
    return (
      <section className='gameplay'>
        <table>
          <tbody>
            <tr>
              <td> <SleepButton onClick={this.props.handleSleepClick} /> </td>
              <td> <AttackButton onClick={this.props.handleAttackClick} /> </td>
              <td> <PoisonButton onClick={this.props.handlePoisonClick} /> </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default ButtonTable

import React, { Component } from 'react'
import { RestartButton } from './buttons'

class RestartTable extends Component {
  constructor (props) {
    super()
  }

  render (props) {
    return (
      <section className='gameplay'>
        <table>
          <tbody>
            <tr>
              <td><RestartButton onClick={this.props.handleResetClick} /></td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default RestartTable

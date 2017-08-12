import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import BattleApp from './battleApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<BattleApp />, document.getElementById('app'))
registerServiceWorker()

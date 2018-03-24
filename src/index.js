import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './utilities/registerServiceWorker'
import './styles/index.css'
import './styles/normalize.css'
import App from './App'

const rootDOMNode = document.getElementById('root')

ReactDOM.render(<App />, rootDOMNode)

registerServiceWorker()

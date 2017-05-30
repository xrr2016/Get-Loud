import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
// import 'semantic-ui-css/semantic.min.css'
import './styles/app.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

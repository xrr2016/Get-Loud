import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const App = () => <h1>Hello React!</h1>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

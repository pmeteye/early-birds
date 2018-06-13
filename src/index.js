import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import "./sass/app.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


window.onerror = function (message, _source, _lineNumber, _columnNumber, error) {
  console.error('Generic Error',  error);

  window.analytics.track('Generic JavaScript Error', {
    message: message,
    error: error.stack
  });
}
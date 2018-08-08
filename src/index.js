import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.onerror = function (message, _source, _lineNumber, _columnNumber, error) {
  console.error('Generic Error',  error);

  /*
    This line will give you an id in Sentry,
    so you can look up the error in Sentry later
  */
  const sentryEventId = window.Raven.lastEventId();

  /*
    This line will give you the exact point in time for when
    a crash occurred so you can watch it in FullStory
  */
  const fullstorySessionURL = window.FS.getCurrentSessionURL(true);

  window.analytics.track('Generic JavaScript Error', {
    message: message,
    error: error.stack,
    sentryEventId: sentryEventId,
    fullstorySessionURL: fullstorySessionURL
  });
}
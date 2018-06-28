import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './jsx/MainPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (<MainPage />, document.getElementById ('root'));
registerServiceWorker ();

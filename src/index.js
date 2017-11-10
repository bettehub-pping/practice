import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import PD from './components/PD';

ReactDOM.render(<PD />, document.getElementById('root'));
registerServiceWorker();

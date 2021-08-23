import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackEnd from './store';

const backEnd = new BackEnd();			

ReactDOM.render(
	<React.StrictMode>
		<App store={backEnd} />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

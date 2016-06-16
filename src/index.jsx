import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux' ;
import reducers from './reducers/index.js';
import {Provider} from 'react-redux';

var store = createStore(reducers);
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App data= { [] }></App>
	</Provider>
	, document.getElementById('root'))
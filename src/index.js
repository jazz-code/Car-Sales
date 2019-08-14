import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';



import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

export const store= createStore(reducer) 

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);

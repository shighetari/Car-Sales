import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
//start of imports step 1\\
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {carReducer} from './reducers/carReducer'

//step 2 creating the store\\

const store = createStore(carReducer)
console.log(store.getState())

//step 3\\
/*use the provider component to provide our store to
 our app then pass the store obj to provider as a prop */

 const rootElement = document.getElementById('root');
 ReactDOM.render(

<Provider store = {store}>   
 <App />
 </Provider> , rootElement);
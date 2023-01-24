import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import {StateType, store} from './Redux/state';




export const rerenderEntireTree = (state: any) =>{
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import {StateType, store} from './Redux/state';




export const rerenderEntireTree = (state: StateType) =>{
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)
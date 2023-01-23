import {addPost, state, subscriber, updateNewPostText} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import { StateType} from './Redux/state';




export const rerenderEntireTree = (state: StateType) =>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)
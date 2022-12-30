import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import {addPost, StateType} from './Redux/state';




export const rerenderEntireTree = (props: StateType) =>{
    ReactDOM.render(
        <App state={props.state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

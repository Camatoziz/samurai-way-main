import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import styled from 'styled-components';


function App() {
    return (
        <BrowserRouter>
            <Main className="app-wrapper">
                <Header/>
                <Nav/>
                <AppWrapper className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </AppWrapper>

            </Main>
        </BrowserRouter>
    )
}

export default App;

const Main = styled.div `
  display: grid;
  grid-template-areas:
    'h h'
    'n c';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 11fr;
  width: 1200px;
  margin: 0 auto;
  background-color: #dee2e6;
`
const AppWrapper = styled.div `
  grid-area: c;
  background-color: #edeff1;
  display: grid;
`

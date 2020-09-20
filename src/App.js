import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Switch, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                        <Route path='/dialogs'>
                            <DialogsContainer/>
                        </Route>
                        <Route path='/news'>
                            <News/>
                        </Route>
                        <Route path='/music'>
                            <Music/>
                        </Route>
                        <Route path='/settings'>
                            <Settings/>
                        </Route>
                        <Route path='/users'>
                            <Users />
                        </Route>
                    </Switch>
                </div>
            </div>
    );
}

export default App;

import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Switch, Route } from "react-router-dom";
import './App.css';

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile'>
                            <Profile state={props.state.profilePage}
                                     dispatch={props.dispatch}
                            />
                        </Route>
                        <Route path='/dialogs'>
                            <Dialogs
                                state={props.state.dialogsPage}
                                dispatch={props.dispatch}
                            />
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
                    </Switch>
                </div>
            </div>
    );
}

export default App;

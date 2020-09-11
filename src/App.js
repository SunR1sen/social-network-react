import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';

const App = (props) => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile'>
                            <Profile posts={props.appState.posts}/>
                        </Route>
                        <Route path='/dialogs'>
                            <Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>
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
        </Router>
    );
}

export default App;

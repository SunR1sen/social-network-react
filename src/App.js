import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from './App.module.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.module.scss';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SiteHeader from "./components/Header/Header";
import {Layout} from 'antd';
import ProfileContainer from "./components/Profile/ProfileContainer";

const { Sider, Content} = Layout;

const App = (props) => {
    return (
        <Layout>
            <Sider>
                <Navbar/>
            </Sider>
            <SiteHeader/>
            <Layout className={s.content_wrap}>
                <Content className={s.content_wrapper}>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/profile'/>
                        </Route>
                        <Route path='/profile/:userId'>
                            <ProfileContainer />
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
                            <UsersContainer/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
        // <div className="app-wrapper">
        //     <SiteHeader/>
        //     <Navbar/>
        //     <div className='app-wrapper-content'>
        //         <Switch>
        //             <Route exact path='/'>
        //                 <Redirect to='/profile'/>
        //             </Route>
        //             <Route path='/profile'>
        //                 <Profile/>
        //             </Route>
        //             <Route path='/dialogs'>
        //                 <DialogsContainer/>
        //             </Route>
        //             <Route path='/news'>
        //                 <News/>
        //             </Route>
        //             <Route path='/music'>
        //                 <Music/>
        //             </Route>
        //             <Route path='/settings'>
        //                 <Settings/>
        //             </Route>
        //             <Route path='/users'>
        //                 <UsersContainer />
        //             </Route>
        //         </Switch>
        //     </div>
        // </div>
    );
}

export default App;

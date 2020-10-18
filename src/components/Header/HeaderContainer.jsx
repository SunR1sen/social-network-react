import React from 'react';
import SiteHeader from "./SiteHeader";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/authReducer";

class SiteHeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    this.props.setAuthUserData(userId, email, login)
                }
            })
    }

    render() {
        return <SiteHeader {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
    setAuthUserData: (userId, email, login) => dispatch(setAuthUserDataAC(userId, email, login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeaderContainer);
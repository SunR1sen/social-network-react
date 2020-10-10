import {connect} from "react-redux";
import Users from './Users';
import s from './Users.module.scss';
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(p);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return <>
            <div className={s.userPage}>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               onPageChanged={this.onPageChanged}
                                                               currentPage={this.props.currentPage}
                                                               users={this.props.users}
                                                               follow={this.props.follow}
                                                               unfollow={this.props.unfollow}
                />}

            </div>

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setTotalUsersCount: setTotalUsersCountActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator,
})(UsersAPIComponent)


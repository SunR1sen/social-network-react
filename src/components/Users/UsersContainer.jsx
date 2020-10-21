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
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then( (data) => {
                this.props.setUsers(data.items)
                this.props.setCurrentPage(pageNumber);
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (number) => {
            dispatch(setCurrentPageActionCreator(number))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


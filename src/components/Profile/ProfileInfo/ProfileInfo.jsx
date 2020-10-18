import React from "react";
import panorama from "./panorama.jpg";
import s from './ProfileInfo.module.scss';
import Preloader from "../../../common/Preloader/Preloader";
import {Avatar} from 'antd';

const  ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    let {small} = props.profile.photos;
    let {aboutMe} = props.profile;

    return (
        <div>
            <div>
                <img className={s.panorama} src={panorama} alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.profilePhoto}>
                    {small ? <Avatar src={small} size={85}/> : <Avatar size={85}>USER</Avatar>}
                </div>
                <div className={s.profileInfo_wrapper}>
                    <div className={s.profile_fullname}>
                        <span className={s.fullname_title}>Full name: </span>
                        <p className={s.fullname}>{props.profile.fullName}</p>
                    </div>
                    <div className={s.aboutMe_wrapper}>
                        <span className={s.aboutTitle}>About Me:</span>
                        <p className={s.aboutMe}>{aboutMe ? aboutMe : 'Без статуса'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
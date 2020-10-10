import React from "react";
import panorama from "./panorama.jpg";
import s from './ProfileInfo.module.scss';
import Preloader from "../../Preloader/Preloader";
import {Avatar} from 'antd';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let { small } = props.profile.photos;
    let { aboutMe } = props.profile;

    return (
        <div>
            <div>
                <img className={s.panorama} src={panorama} alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.profilePhoto}>
                    {small ? <Avatar src={small} size={85}/> : <Avatar size={85}>USER</Avatar>}
                </div>
                <span className={s.aboutTitle}>About Me:</span>
                <p className={s.aboutMe}>{aboutMe ? aboutMe : 'Чмо, которое не соизволило статус добавить'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
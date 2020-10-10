import React from 'react';
import preloader from "../../assets/images/loader-eclipse.svg";
import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div><img src={preloader} className={s.loader}/></div>
    )
}

export default Preloader;
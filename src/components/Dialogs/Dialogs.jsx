import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Diman</div>
                <div className={s.dialog}>Marina</div>
                <div className={s.dialog}>Morti</div>
                <div className={s.dialog}>Kabluchki</div>
                <div className={s.dialog}>Makiyaj</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Pidarok</div>
                <div className={s.message}>Jresh govno?</div>
            </div>
        </div>
    )
}

export default Dialogs;
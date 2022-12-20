import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

export type DialogType = {
    id: string
    name: string
}

export const Dialog = (props: DialogType) => <div className={s.dialog}>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
</div>






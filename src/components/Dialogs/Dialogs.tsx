import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

const Dialog = (props: DialogType) => (<div className={s.dialog}>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
</div>)

const Message = (props: MessageType) => (<div className={s.message}>{props.message}</div>)


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id={'1'} name={'Andrew'}/>
                <Dialog id={'2'} name={'Victor'}/>
                <Dialog id={'3'} name={'Pedro'}/>
                <Dialog id={'4'} name={'Salmon'}/>
                <Dialog id={'5'} name={'Ivan'}/>
                <Dialog id={'6'} name={'Vasya'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi, how are you?'}/>
                <Message message={'OK, and u?'}/>
                <Message message={'YO'}/>
            </div>
        </div>
    );
};


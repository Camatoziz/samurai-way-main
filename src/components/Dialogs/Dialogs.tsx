import React from 'react';
import s from './Dialogs.module.css'
import {Dialog, DialogType} from './DialogItem/DialogItem';
import {Message, MessageType} from './MessageItem/Message';
import {NewMessage} from './MessageItem/NewMessage';

export type DialogsPropsType = {
    dialogItems: DialogType[]
    messageItems: MessageType[]
    newMessageText: string
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialog = props.dialogItems.map(d => <Dialog id={d.id} name={d.name}/>)
    const message = props.messageItems.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <NewMessage newMessageText={props.newMessageText} dispatch={props.dispatch}/>
            </div>
        </div>
    );
};


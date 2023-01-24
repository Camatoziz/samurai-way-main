import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from '../../../Redux/state';

type NewMessagePropsTyp = {
    newMessageText: string
    dispatch: (action: any) => void
}

export const NewMessage = (props: NewMessagePropsTyp) => {
    let addNewTextareaMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextActionCreator(e.currentTarget.value))
    }
    return (
        <div>
            <div><textarea value={props.newMessageText} onChange={onChangeHandler}
                           ref={addNewTextareaMessageRef}/></div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};


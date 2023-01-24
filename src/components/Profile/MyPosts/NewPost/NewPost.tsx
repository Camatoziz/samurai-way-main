import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../Redux/state';


type NewPostType = {
    newPostText: string
    dispatch: (action: any) => void
}



export const NewPost = (props: NewPostType) => {
    let addNewTextareaRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea value={props.newPostText} onChange={onChangeHandler} ref={addNewTextareaRef}/>
            </div>
            <div>
                <button onClick={addPost}>Post</button>
            </div>
        </div>
    )
}
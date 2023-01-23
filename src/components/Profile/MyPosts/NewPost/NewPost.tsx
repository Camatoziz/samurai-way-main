import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css'
import {updateNewPostText} from '../../../../Redux/state';

type NewPostType = {
    addPost: (text: string )=>void
    newPostText: string
    updateNewPostText: (text: string)=>void
}

export const NewPost = (props: NewPostType) => {
    let addNewTextareaRef = React.createRef<HTMLTextAreaElement>()
    const onclickHandler = () => {
        if(addNewTextareaRef.current){
            props.addPost(addNewTextareaRef.current.value)
            props.updateNewPostText('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea value={props.newPostText} onChange={onChangeHandler} ref={addNewTextareaRef}/>
            </div>
            <div>
                <button onClick={onclickHandler}>Post</button>
            </div>
        </div>
    )
}
import React from 'react';
import s from './NewPost.module.css'

type NewPostType = {
    addPost: (text: string)=>void
}

export const NewPost = (props: NewPostType) => {
    let addNewTextareaRef = React.createRef<HTMLTextAreaElement>()
    const onclickHandler = () => {
        if(addNewTextareaRef.current){
            props.addPost(addNewTextareaRef.current.value)
        }
    }
    return (
        <div className={s.newPost}>
            <div>
                <textarea ref={addNewTextareaRef}></textarea>
            </div>
            <div>
                <button onClick={onclickHandler}>Post</button>
            </div>
        </div>
    )
}
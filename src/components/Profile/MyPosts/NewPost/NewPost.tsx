import React from 'react';
import s from './NewPost.module.css'

type NewPostType = {
    addPost: (text: any)=>void
}

export const NewPost = (props: NewPostType) => {
    let addNewTextareaRef = React.createRef<HTMLInputElement>()
    const onclickHandler = () => {
        const text = addNewTextareaRef.current?.value
        props.addPost(text)
    }
    return (
        <div className={s.newPost}>
            <div>
                <input ref={addNewTextareaRef}/>
            </div>
            <div>
                <button onClick={onclickHandler}>Post</button>
            </div>
        </div>
    )
}
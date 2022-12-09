import React from 'react';
import s from './NewPost.module.css'

export const NewPost=()=>{
    return(
        <div className={s.newPost}>
            <textarea></textarea>
            <button>Post</button>
        </div>
    )
}
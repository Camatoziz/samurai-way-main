import React from 'react';
import s from './NewPost.module.css'

export const NewPost = () => {
    return (
        <div className={s.newPost}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Post</button>
            </div>
        </div>
    )
}
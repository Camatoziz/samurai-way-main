import React from 'react';
import s from './NewPost.module.css'

export const NewPost = () => {
    return (
        <div className={s.newPost}>
            <div>
                <input />
            </div>
            <div>
                <button>Post</button>
            </div>
        </div>
    )
}
import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {NewPost} from './NewPost/NewPost';

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <NewPost/>
            <Post likescount={15} message='Hi, how are you?' />
            <Post likescount={27} message="It's my first post." />
        </div>
    )
}
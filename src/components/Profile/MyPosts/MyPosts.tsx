import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {NewPost} from './NewPost/NewPost';
import {ProfileType} from '../Profile';







export const MyPosts = (props: ProfileType) => {
    let posts = props.postItems.map(p=><Post id={p.id} message={p.message} count={p.count}/>)
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPost newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
            {posts}
        </div>
    )
}
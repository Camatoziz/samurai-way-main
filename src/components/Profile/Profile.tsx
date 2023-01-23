import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfilInfo/ProfileInfo';
import {PostType} from '../../Redux/state';

export type ProfileType = {
    postItems: PostType[]
    addPost: ()=>void

    updateNewPostText: (text: string)=>void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} postItems={props.postItems} newPostText={props.newPostText}/>

        </div>
    )
}
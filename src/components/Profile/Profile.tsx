import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfilInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';

export type ProfileType = {
    postItems: PostPropsType[]
    addPost: (text: any)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} postItems={props.postItems}/>

        </div>
    )
}
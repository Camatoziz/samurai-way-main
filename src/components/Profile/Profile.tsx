import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfilInfo/ProfileInfo';
import {PostType} from '../../Redux/state';

export type ProfileType = {
    postItems: PostType[]
    addPost: (text: string)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} postItems={props.postItems}/>

        </div>
    )
}
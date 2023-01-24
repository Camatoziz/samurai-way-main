import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfilInfo/ProfileInfo';
import { PostType} from '../../Redux/state';

export type ProfileType = {
    postItems: PostType[]
    dispatch: (action: any) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} postItems={props.postItems} newPostText={props.newPostText}/>

        </div>
    )
}
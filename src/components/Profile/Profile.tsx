import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"/>
            </div>
            <div>
                Ava+Discription
            </div>
            <MyPosts/>

        </div>
    )
}
import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" alt=""/>
            </div>
            <div className={s.description}>
                Ava+Discription
            </div>
        </div>
    )
}
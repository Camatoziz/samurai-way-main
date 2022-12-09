import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"/>
            </div>
            <div>
                <img
                    src="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"/>
                Discription
            </div>
            <div>
                <div>My posts</div>
                <div>New post</div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    )
}
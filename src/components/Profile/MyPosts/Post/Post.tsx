import React from 'react';
import s from './Post.module.css'

type PostProps={
    message: string
    likescount: number
}

export const Post = (props: PostProps) => {
    return (
        <div className={s.item}>
            <img src="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"/>
            {props.message}
            <div>
                <span>Likes {props.likescount} </span>
            </div>
        </div>

    )
}
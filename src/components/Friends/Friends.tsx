import React from 'react';
import s from './Friends.module.css'

type FriendsType = {
    friendsItems: FriendType[]
}

export type FriendType = {
    id: string
    name: string
    age: number
    img: string
}

const Friends = (props: FriendsType) => {
    const mappedFriends = props.friendsItems.map(f => <div className={s.friendsList}>
            <img className={s.friendAva} src={f.img}/><span className={s.friendDescription}>{`${f.name} ${f.age} y.o`}</span>
        </div>
    )
    return (
        <div>
            {mappedFriends}
        </div>
    );
};

export default Friends;
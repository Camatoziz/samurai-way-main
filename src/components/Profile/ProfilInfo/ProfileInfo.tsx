import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img src="https://www.exje.ru/wp-content/uploads/2020/04/0Z4A9087-Pano.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.ava} src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
                <div className={s.description}>
                    Меня зовут Артур и я не знаю как, но на нчинаю стилизовать свою социальную сеть
                </div>
            </div>
        </div>
    )
}
import {v1} from 'uuid';



export type PostType = {
    id: string
    message: string
    count: number
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    message: string
}

export type FriendType = {
    id: string
    name: string
    age: number
    img: string
}


export type StateType = {

    profilePage: {
        postItems: Array<PostType>
        newPostText: string
    },
    dialogsPage: {
        dialogItems: DialogType[]
        messageItems: MessageType[]
    },
    friendsPage: {
        friendsItems: FriendType[]
    }

}

export let store = {
    _callSubscriber(state: StateType){},
    _state:   {
        profilePage: {
            postItems: [
                {id: v1(), message: 'Hi, how are you?', count: 15},
                {id: v1(), message: 'It\'s my first post.', count: 27}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogItems: [
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Victor'},
                {id: v1(), name: 'Pedro'},
                {id: v1(), name: 'Salmon'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Vasya'}
            ],
            messageItems: [
                {message: 'Hi, how are you?'},
                {message: 'OK, and u?'},
                {message: 'YO'}
            ]
        },
        friendsPage: {
            friendsItems: [
                {
                    id: v1(),
                    name: 'Andrew',
                    age: 23,
                    img: 'https://www.bsut.by/images/profiler/avatar1129_4bc127843afb0666d2990ea4d6597434.jpg'
                },
                {
                    id: v1(),
                    name: 'Victor',
                    age: 25,
                    img: 'https://lastfm.freetls.fastly.net/i/u/300x300/1608b9342f804024c06d36d14abbe170.jpg'
                },
                {
                    id: v1(),
                    name: 'Pedro',
                    age: 37,
                    img: 'https://d38we5ntdyxyje.cloudfront.net/311672/profile/avatar_medium_square.jpg'
                },
                {
                    id: v1(),
                    name: 'Salmon',
                    age: 17,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BTGkv25lre7OQq5_midlLismcYm8Cyvrhw&usqp=CAU'
                },
                {
                    id: v1(),
                    name: 'Ivan',
                    age: 24,
                    img: 'https://writercenter.ru/uploads/images/02/12/53/2017/11/03/avatar_blog_skazka-o-tom-kak-bogatyr-ivan-svoe-schaste-iskal.jpg'
                },
                {
                    id: v1(),
                    name: 'Vasya',
                    age: 53,
                    img: 'https://akniga.org/uploads/images/users/000/313/947/2019/06/15/avatar-user-313947_200x200crop.jpg?030000'
                }
            ]
        }

    },
    getState(){
        return this._state
    },
    addPost(){
        const newPost = {id: v1(), message: this._state.profilePage.newPostText, count: 0}
        this._state = {...this._state, profilePage: {...this._state.profilePage, postItems: [newPost, ...this._state.profilePage.postItems]}}
        this._state = {...this._state, profilePage: {...this._state.profilePage, newPostText: ''}}
        this._callSubscriber(this._state)
    },
    updateNewPostText(text: string){
        this._state = {...this._state, profilePage: {...this._state.profilePage, newPostText: text}}
        this._callSubscriber(this._state)
    },
    subscriber(observer:(state: StateType)=>void){
        this._callSubscriber = observer
    }
}

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
        newMessageText: ''
    },
    friendsPage: {
        friendsItems: FriendType[]
    }

}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export let store = {
    _callSubscriber(state: any) {
    },
    _state: {
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
            ],
            newMessageText: ''
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

    getState() {
        return this._state
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            const newPost = {id: v1(), message: this._state.profilePage.newPostText, count: 0}
            this._state = {
                ...this._state,
                profilePage: {...this._state.profilePage, postItems: [newPost, ...this._state.profilePage.postItems]}
            }
            this._state = {...this._state, profilePage: {...this._state.profilePage, newPostText: ''}}
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state = {...this._state, profilePage: {...this._state.profilePage, newPostText: action.text}}
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state = {...this._state, dialogsPage: {...this._state.dialogsPage, newMessageText: action.text}}
            this._callSubscriber(this._state)
        } else if (action.type===ADD_MESSAGE){
            const newMessage = {message: this._state.dialogsPage.newMessageText}
            this._state = {...this._state, dialogsPage: {...this._state.dialogsPage, messageItems: [...this._state.dialogsPage.messageItems, newMessage]}}
            this._state = {...this._state, dialogsPage: {...this._state.dialogsPage, newMessageText: ''}}
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text: string) => ({type: UPDATE_MESSAGE_TEXT, text: text})

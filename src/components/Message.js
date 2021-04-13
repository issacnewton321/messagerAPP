import React from 'react'

export default function Message(props){
    const isUser = props.username === props.message.username?true:false
    return (
        <div className={isUser?'message-box isuser':'message-box'}>
            <div className={isUser?'card isuser':'card'}>
                <div className={isUser?'card-body bg-primary text-white':'card-body bg-light'} >
                    {props.message.text}
                </div>
            </div>
            <p className='name-text'>{props.message.username}</p>
        </div>
    )
}
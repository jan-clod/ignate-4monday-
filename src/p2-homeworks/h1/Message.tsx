import React from 'react';
import s from './Message.module.css'

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: messageData) {
    return (
        <div className={s.block}>
            <div className={s.message}>
                <img src={props.avatar} />
            </div>
            <div className={s.angle} />
            <div className={s.win}>
                <h2 className={s.nametext}>Saha</h2>
                <div className={s.blockmessage}>
                    <p className={s.messagetext}>hello world rusia belarusia poland history linva latvia italy germany ukraina</p>
                </div>
                <h4 className={s.datatext}>22:00</h4>
            </div>
        </div>
    )
}

export default Message

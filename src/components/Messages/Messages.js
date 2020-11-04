import React from 'react'
import { messageUUID } from '../../utils/common';

const Messages = ({ messages, currentUser }) => {

    let renderMessage = (message) => {
        const { sender, content} = message;
        const messageFromMe = currentUser.username === message.sender;
        const className = messageFromMe ? "messages-message currentUser" : "messages-message";
        const key = messageUUID();

        return (
            <li className={className} key={key}>
                <div className="message-content">
                    <div className="username">
                        {sender}
                    </div>
                    <div className="text">{content}</div>
                </div>
            </li>
        );
    };

    return (
        <ul className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )
}


export default Messages
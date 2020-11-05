import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Input from './components/Input';
import Messages from './components/Messages';

import chatAPI from './services/chatapi';
import SockJsClient from 'react-stomp';

import { randomColor } from './utils/common';

const webSocket_Url = "http://219.73.12.136:8080/ws-chat/";

const App = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)

  let onConnected = () => {
    console.log("Connected with WebSocket.")
  }

  let onDisconnect = () => {
    console.log("Disconnected on WebSocket.")
  }

  let onMessageReceived = (msg) => {
    console.log('New message received on WebSocket.', msg);
    setMessages(messages.concat(msg));
  }

  let onSendMessage = (msgText) => {
    chatAPI.sendMessage(user.username, msgText).then(res => {
      console.log('message sent.', res);
    }).catch(err => {
      console.log('Error occurred while sending message to api');
      console.log(err);
    })
  }

  let handleLoginSubmit = (username) => {
    document.title = "myWhatsapp: " + username;
    console.log("User: " + username + " logged in.");

    setUser({
      username: username,
      color: randomColor()
    })

  }

  return (
      <div className="App container">
        {!!user ?
            (
                <>
                  <SockJsClient
                      url={webSocket_Url}
                      topics={['/topic/group']}
                      onConnect={onConnected}
                      onDisconnect={onDisconnect}
                      onMessage={msg => onMessageReceived(msg)}
                      debug={false}
                  />
                  <Messages
                      messages={messages}
                      currentUser={user}
                  />
                  <Input onSendMessage={onSendMessage} />
                </>
            ) :
            <LoginForm onSubmit={handleLoginSubmit} />
        }
      </div>
  )
}

export default App;

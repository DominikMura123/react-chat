import React, { useState, useEffect } from 'react';
import {get, post, remove} from '../../../helpers/http';
import URLS from '../../../helpers/urls'
import { v4 as uuidv4 } from 'uuid';

import ChatMessages from '../../molecues/ChatMessages/ChatMessages';
import MessageForm from '../../molecues/MessagesForm/MessagesForm';
import WilkomenMessage from '../../atoms/SectionText';
import MyButton from '../../atoms/MyButton';

function App() {

  const [messageValue, setMessageValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() =>{
    getFromJsonServer();
  }, [])

  const handleSubmit = (ev) =>{
    ev.preventDefault();

    const newMessage = {id: uuidv4(), 
                        message: messageValue, 
                        author: authorValue}

    const newMessages = messages.concat(newMessage);
    addTaskToJsonServer(newMessage);
    setMessages(newMessages);

    setAuthorValue('');
    setMessageValue('');
  }

  const handleMessageChange = (ev) => {
    ev.preventDefault();
    setMessageValue(ev.target.value);
  }

  const handleAuthorChange = (ev) => {
    ev.preventDefault();
    setAuthorValue(ev.target.value);
  }

  const handleDeleteMessage = (idMessage) => {
    const filteredMessages = messages.filter((message) => {
      return message.id !== idMessage;
    })
    setMessages(filteredMessages);
    removeFromJsonServer(idMessage);
  }

  const handleDeleteAll= () => {
    setMessages([]);
    messages.forEach(message => removeFromJsonServer(message.id)); 
  }

  const getFromJsonServer = () => {
    get(URLS.chat)
    .then(data => {
      setMessages(data);
    })
  }

  const addTaskToJsonServer = (newMessage) => {
    post(URLS.chat, newMessage)    
  }

  const removeFromJsonServer = (idMessage) => {
    remove(URLS.chat, idMessage) 
  }

  return (
    <div>
      <WilkomenMessage>
        Fill in you messages
      </WilkomenMessage>
      <MessageForm
        handleSubmit = {handleSubmit}
        messageValue = {messageValue}
        handleMessageChange = {handleMessageChange}
        authorValue = {authorValue}
        handleAuthorChange = {handleAuthorChange}
        />
      <WilkomenMessage>
        My messages
      </WilkomenMessage> 
      <ChatMessages 
        messages = {messages}
        handleDeleteMessage = {handleDeleteMessage}/>
      <MyButton 
        handlerRemove = {handleDeleteAll}
        text = 'Remove All Message'
      ></MyButton>  
    </div>
  );
}

export default App;

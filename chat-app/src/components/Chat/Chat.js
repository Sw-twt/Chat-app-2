// src/components/Chat/Chat.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

function Chat() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="room/:roomId" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default Chat;

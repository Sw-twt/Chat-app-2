// src/components/Chat/ChatList.js

import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function ChatList() {
  const chatRooms = [
    { id: 1, name: '채팅방 1', lastMessage: '마지막 메시지', time: '오후 2:30' },
    { id: 2, name: '채팅방 2', lastMessage: '안녕하세요!', time: '오후 3:15' },
    // 추가 채팅방
  ];

  return (
    <List>
      {chatRooms.map((room) => (
        <ListItem key={room.id} disablePadding>
          <ListItemButton component={Link} to={`room/${room.id}`}>
            <ListItemAvatar>
              <Avatar>{room.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {room.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {room.lastMessage}
                </Typography>
              }
            />
            <Typography variant="caption" color="textSecondary">
              {room.time}
            </Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ChatList;

// src/components/Chat/ChatRoom.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  messagesContainer: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#f5f5f5',
  },
  messageRow: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'flex-end',
  },
  messageAvatar: {
    marginRight: '10px',
  },
  messageBubble: {
    padding: '10px',
    borderRadius: '15px',
    maxWidth: '60%',
    wordWrap: 'break-word',
  },
  ownMessage: {
    flexDirection: 'row-reverse',
  },
  ownAvatar: {
    marginLeft: '10px',
    marginRight: 0,
  },
  ownBubble: {
    backgroundColor: '#DCF8C6',
  },
  otherBubble: {
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #e0e0e0',
  },
  input: {
    flex: 1,
    marginRight: '10px',
  },
});

function ChatRoom() {
  const classes = useStyles();
  const { roomId } = useParams();
  const [messages, setMessages] = useState([
    { text: '안녕하세요!', isOwn: false, time: '오후 1:20' },
    { text: '안녕하세요! 반갑습니다.', isOwn: true, time: '오후 1:22' },
    // 예시 메시지 추가
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      // 실제로는 서버로 메시지를 보내야 하지만, 여기서는 로컬 상태에 추가
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, isOwn: true, time: '오후 1:30' }, // 시간은 실제로는 현재 시간으로 설정
      ]);
      setInput('');
    }
  };

  return (
    <div className={classes.chatContainer}>
      <div className={classes.messagesContainer}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${classes.messageRow} ${msg.isOwn ? classes.ownMessage : ''}`}
          >
            <Avatar
              className={`${classes.messageAvatar} ${
                msg.isOwn ? classes.ownAvatar : ''
              }`}
            >
              {msg.isOwn ? '나' : '상대'}
            </Avatar>
            <Paper
              className={`${classes.messageBubble} ${
                msg.isOwn ? classes.ownBubble : classes.otherBubble
              }`}
            >
              <Typography variant="body1">{msg.text}</Typography>
              <Typography variant="caption" color="textSecondary" align="right">
                {msg.time}
              </Typography>
            </Paper>
          </div>
        ))}
      </div>
      <div className={classes.inputContainer}>
        <TextField
          variant="outlined"
          placeholder="메시지 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className={classes.input}
        />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatRoom;

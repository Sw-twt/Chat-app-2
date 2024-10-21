// src/components/Friends/Friends.js

import React, { useState } from 'react';

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';

import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Friends() {
  const [friends, setFriends] = useState([
    { id: 1, name: '홍길동', status: '온라인' },
    { id: 2, name: '김철수', status: '오프라인' },
  ]);

  const [open, setOpen] = useState(false);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
    setSearchEmail('');
    setSearchResult(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    // 실제로는 서버에 사용자 검색 요청을 보내야 함
    // 여기서는 예시로 간단히 처리
    if (searchEmail === 'test@example.com') {
      setSearchResult({ id: 3, name: '이영희', status: '온라인' });
    } else {
      setSearchResult(null);
    }
  };

  const handleAddFriend = () => {
    if (searchResult) {
      setFriends([...friends, searchResult]);
      setOpen(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', mt: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        친구 목록
      </Typography>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
        sx={{ position: 'absolute', top: 0, right: 0 }}
      >
        <PersonAddIcon fontSize="large" />
      </IconButton>
      <List>
        {friends.map((friend) => (
          <ListItem key={friend.id}>
            <ListItemAvatar>
              <Avatar>{friend.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={friend.name} secondary={friend.status} />
          </ListItem>
        ))}
      </List>

      {/* 친구 추가 다이얼로그 */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>친구 추가</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="이메일로 친구 검색"
            type="email"
            fullWidth
            variant="standard"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSearch} sx={{ mt: 2 }}>
            검색
          </Button>
          {searchResult ? (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">검색 결과:</Typography>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{searchResult.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={searchResult.name}
                  secondary={searchResult.status}
                />
              </ListItem>
            </Box>
          ) : searchEmail ? (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              사용자를 찾을 수 없습니다.
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          {searchResult && (
            <Button variant="contained" onClick={handleAddFriend}>
              친구 추가
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Friends;

// src/pages/Home.js

import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import Friends from '../components/Friends/Friends';
import Profile from '../components/Profile/Profile';
import Calendar from '../components/Calendar/Calendar';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';

import AuthContext from '../context/AuthContext';

function Home() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Box sx={{ position: 'relative', mt: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          메인 메뉴
        </Typography>
        <IconButton
          color="primary"
          onClick={logout}
          sx={{ position: 'absolute', top: 0, right: 0 }}
        >
          <LogoutIcon fontSize="large" />
        </IconButton>
      </Box>
      <Routes>
        <Route
          path="/"
          element={
            <Grid container spacing={2} sx={{ mt: 4, px: 2 }}>
              {/* 채팅 메뉴 */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea onClick={() => navigate('chat')}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <ChatIcon sx={{ fontSize: 60 }} color="primary" />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        채팅
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 친구 메뉴 */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea onClick={() => navigate('friends')}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <PeopleIcon sx={{ fontSize: 60 }} color="primary" />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        친구
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 내 정보 메뉴 */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea onClick={() => navigate('profile')}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <PersonIcon sx={{ fontSize: 60 }} color="primary" />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        내 정보
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 캘린더 메뉴 */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea onClick={() => navigate('calendar')}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <CalendarMonthIcon sx={{ fontSize: 60 }} color="primary" />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        캘린더
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          }
        />
        <Route path="chat/*" element={<Chat />} />
        <Route path="friends" element={<Friends />} />
        <Route path="profile" element={<Profile />} />
        <Route path="calendar" element={<Calendar />} />
        {/* 기타 라우트 처리 */}
      </Routes>
    </div>
  );
}

export default Home;

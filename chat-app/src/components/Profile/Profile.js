// src/components/Profile/Profile.js

import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // 주석 처리 또는 삭제

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Profile() {
  const [profile, setProfile] = useState({ name: '', statusMessage: '' });

  useEffect(() => {
    // 실제 API 호출 대신 예시 데이터 사용
    // axios.get('/api/profile')
    //   .then(response => {
    //     setProfile(response.data);
    //   })
    //   .catch(error => {
    //     console.error('프로필 정보를 가져오는 중 오류 발생:', error);
    //   });
    setProfile({ name: '사용자 이름', statusMessage: '상태 메시지' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const saveProfile = () => {
    // 실제로는 서버에 프로필 저장 로직이 필요하지만, 여기서는 알림만 표시
    alert('프로필이 저장되었습니다.');
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto', mt: 5 }}>
      <CardContent>
        <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }}>
          {profile.name[0]}
        </Avatar>
        <Typography variant="h5" component="div" align="center" sx={{ mt: 2 }}>
          {profile.name}
        </Typography>
        <TextField
          label="이름"
          name="name"
          value={profile.name}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="상태 메시지"
          name="statusMessage"
          value={profile.statusMessage}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
          sx={{ mt: 2 }}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth onClick={saveProfile}>
          저장
        </Button>
      </CardActions>
    </Card>
  );
}

export default Profile;

// src/pages/Login.js

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AuthContext from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 서버에서 인증을 받아야 하지만, 여기서는 프론트엔드에서 처리
    login({ email });
    navigate('/home');
  };

  return (
    <Box sx={{ mt: 8, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" component="h1" align="center">
        로그인
      </Typography>
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        <TextField
          label="이메일"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          로그인
        </Button>
      </Box>
      <Typography align="center" sx={{ mt: 2 }}>
        계정이 없으신가요? <Link to="/register">회원가입</Link>
      </Typography>
    </Box>
  );
}

export default Login;

// src/pages/Register.js

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AuthContext from '../context/AuthContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 서버에 회원가입 요청을 보내야 하지만, 여기서는 프론트엔드에서 처리
    login({ email });
    navigate('/home');
  };

  return (
    <Box sx={{ mt: 8, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" component="h1" align="center">
        회원가입
      </Typography>
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        <TextField
          label="이름"
          name="name"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="이메일"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="비밀번호"
          name="password"
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
          회원가입
        </Button>
      </Box>
      <Typography align="center" sx={{ mt: 2 }}>
        이미 계정이 있으신가요? <Link to="/">로그인</Link>
      </Typography>
    </Box>
  );
}

export default Register;

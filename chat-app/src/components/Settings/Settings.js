// src/components/Settings/Settings.js

import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';

import AuthContext from '../../context/AuthContext';

function Settings() {
  const { logout } = useContext(AuthContext);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        설정
      </Typography>
      {/* 설정 항목 추가 가능 */}
      <Button variant="contained" color="primary" onClick={logout}>
        로그아웃
      </Button>
    </Box>
  );
}

export default Settings;

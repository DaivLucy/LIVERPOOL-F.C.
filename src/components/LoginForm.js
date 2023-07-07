// 用户登录

import '../style/Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography, useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LoginForm = () => {
  if (useMediaQuery('(min-width:650px)')) {
    return (
      <div className="login">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 3, width: '25ch' },
            border: '1px dashed grey',
          }}
          noValidate
          autoComplete="off"
        >
          <Typography textAlign="center" variant="h4" gutterBottom>
            登录
          </Typography>
          <div>
            <TextField
              userword
              label="账户"
            />
          </div>
          <div>
            <TextField
              Password
              label="密码"
            />
          </div>
          <div className="login"><Button variant="outlined">登录</Button></div>
          <div className="login"><Button variant="outlined">忘记密码</Button></div>
          <div className="login">
            <Typography textAlign="center" variant="subtitle1" gutterBottom>
              还没注册账户？
              {' '}
              <Link to="/register" className="link">现在注册 </Link>
            </Typography>
          </div>
        </Box>
      </div>
    );
  }

  return null;
};

export default LoginForm;

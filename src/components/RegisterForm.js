// 注册

import React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="login">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          border: '1px dashed grey',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography textAlign="center" variant="h4" gutterBottom>
          注册
        </Typography>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          免费注册
        </Typography>
        <div>
          <TextField
            First
            Name
            label="姓"
          />
        </div>
        <div>
          <TextField
            Last
            Name
            label="名"
          />
        </div>
        <div>
          <TextField
            Email
            label="邮箱"
          />
        </div>
        <div>
          <TextField
            Password
            label="密码"
          />
        </div>
        <div>
          <TextField
            Confirm
            Password
            label="确认密码"
          />
        </div>
        <Link to="/e-commerce/" className="link">
          <div className="login"><Button variant="outlined">注册</Button></div>
        </Link>
        <div className="login">
          <Typography textAlign="center" variant="subtitle1" gutterBottom>
            已经注册了？
            {' '}
            <Link to="/login" className="link">点击登录  </Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default RegisterForm;

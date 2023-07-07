import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import createNotification from './shared/Notifications';

const NavBar = () => {
  if (useMediaQuery('(min-width:650px)')) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                <MenuIcon />
                全部
              </Button>
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                每日商品
              </Button>
              <Button variant="outlined">
                <Link to="customer_service/" className="link">
                  客服服务
                </Link>
              </Button>
              <Button variant="outlined">
                <Link to="Register" className="link">
                  注册
                </Link>
              </Button>
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                支付方式
              </Button>
              <Button variant="outlined">
                <Link to="sell" className="link">
                  添加商品
                </Link>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return null;
};

export default NavBar;

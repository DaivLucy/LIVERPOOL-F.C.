// 设置状态栏在不同尺寸的改变

import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import '../style/optionBar.css';
import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';

const OptionBar = () => {
  const items = useSelector((state) => state.cart);

  // 宽度大于等于 650 像素
  if (useMediaQuery('(min-width:650px)')) {
    return <DesktopBar items={items} />;
  }

  // 屏幕宽度小于 650 像素
  return <MobileBar items={items} />;
};

export default OptionBar;

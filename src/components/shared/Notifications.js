import { NotificationManager } from 'react-notifications';

const createNotification = (type) => () => {
  switch (type) {
    case 'info':
      NotificationManager.info('前面的区域还没开发，以后再探索吧');
      break;
    case 'success':
      NotificationManager.success('成功', '标题在这');
      break;
    case 'warning':
      NotificationManager.warning(
        'Warning message',
        'Close after 3000ms',
        3000,
      );
      break;
    case 'error':
      NotificationManager.error('Error message', 'Click me!', 5000, () => {
        // alert('callback');  Write your custom alert message
      });
      break;
    default:
      break;
  }
};

export default createNotification;

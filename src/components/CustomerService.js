import {
  Typography,
  Container,
  Card,
  Grid,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../style/customerService.css';
import { v4 as uuidv4 } from 'uuid';

const searchBarStyle = {
  display: 'flex',
};

const CustomerService = () => {
  const typesOfServices = [
    {
      img: {
        link: 'https://img.xiaopiu.com/userImages/img5641166d8aca8b0.png',
        alt: 'A bird',
      },
      text: '菜鸟裹裹，可以在此查看物流详情',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://pic.qqtn.com/up/2019-5/20195695405596.png',
        alt: 'taobao Prime logo',
      },
      text: '淘宝，购买你喜爱的商品',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://img-qn.51miz.com/Photo/2017/04/27/07/P232388_2a6c2060ecd02062fbf58eb17a9a4812.png',
        alt: 'Prime logo',
      },
      text: '支付, 刷卡购物的方法',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://www.xzji.com/upload/y20/04x26/2338025ea5aada33366.png',
        alt: 'albb',
      },
      text: '阿里巴巴，有关的其它工具',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png',
        alt: 'member',
      },
      text: '会员资格，有什么特权',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png',
        alt: 'Lock image logo',
      },
      text: '登录，安全和隐私',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://th.bing.com/th/id/R.5e21376a3525c0c99c8b938bceeece31?rik=LhOuMlhYEQAAYw&riu=http%3a%2f%2fwww.xmlucky.com%2fUploads%2f201710%2f59dae5ea6d6a7.png&ehk=BvM%2fRUSm0dd9qDKtQXiOCPWMFdJynrHTqKA7fBTMZsM%3d&risl=&pid=ImgRaw&r=0.png',
        alt: 'tuihuo',
      },
      text: '退换货',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png',
        alt: 'toushu',
      },
      text: '投诉商家',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png',
        alt: 'Lock image logo',
      },
      text: '其它',
      path: 'somewhere/',
    },
  ];
  return (
    <Container>
      <section className="section-1">
        <Typography variant="h4" gutterBottom>
          欢迎来到 Liverpool F.C. 客服服务
        </Typography>
        <Typography variant="h5">
          遇到问题了要帮助吗，我们能解决在此购物遇到的问题，当你遇到麻烦，随时可以来到这里寻求帮助。(σﾟ∀ﾟ)σ..:*☆哎哟不错哦
        </Typography>

        <div className="customer-service-grid">
          {typesOfServices.map((service) => (
            <Grid item xs={4} key={uuidv4()}>
              <Link to={service.path}>
                <Card maxWidth="sm" className="flex-row">
                  <img src={service.img.link} alt={service.img.alt} />
                  <Typography variant="body1">{service.text}</Typography>
                </Card>
              </Link>
            </Grid>
          ))}
        </div>
      </section>
      <section className="section-2">
        <Typography variant="h5" gutterBottom>
          {' '}
          搜寻你需要的帮助
        </Typography>
        <div className="search-bar">
          <Paper style={searchBarStyle}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="搜索"
              inputProps={{ 'aria-label': '搜索' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon color="primary" />
            </IconButton>
          </Paper>
        </div>
      </section>
    </Container>
  );
};

export default CustomerService;

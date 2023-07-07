// 添加商品

import { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import '../style/home.css';
import '../style/items.css';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, createCategorie } from '../redux/ecommerce/ecommerce';

const Sell = () => {
  const [categorieId, setCategorieId] = useState(1);
  const [name, setname] = useState('default categorie');
  const [img, setimg] = useState(
    'https://ts1.cn.mm.bing.net/th/id/R-C.ea21bea6abbfd8c4454121e1669138e1?rik=eq%2b07rkdo9C0dw&riu=http%3a%2f%2fup.ipaddesk.com%2fpic%2fad%2fe3%2f06%2fade3065d0462b59dc8f5d60939e81e41.jpg&ehk=WG5%2fyx9MqbrpbeetrnYDO4drtVXAwee2vUFMFTT7O%2b4%3d&risl=&pid=ImgRaw&r=0.jpg',
  );
  const [title, settitle] = useState('default product');
  const [price, setprice] = useState(21);
  const [description, setdescription] = useState('default description');
  const [pimg, setpimg] = useState(
    'https://ts1.cn.mm.bing.net/th/id/R-C.63a46a9ff8730f7ceec399fd3f1f4f4a?rik=uIY0oGYr2V8mwQ&riu=http%3a%2f%2fc1.hoopchina.com.cn%2fuploads%2fstar%2fevent%2fimages%2f140707%2f6f153526d6e8345356cebd3f7a26584fe0d70d1f.jpg&ehk=QdOY1YX0hSca41P7qWTtqKA8GQ9q7LXoNRR%2bCVyut2c%3d&risl=&pid=ImgRaw&r=0jpg',
  );

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleChange = (event) => {

    // 获取提交数据
    if (event.type === 'change') {
      switch (event.target.id) {
        case 'categorie-name':
          setname(event.target.value);
          break;

        case 'categorie-img':
          setimg(event.target.value);
          break;
        case 'product-title':
          settitle(event.target.value);
          break;

        case 'product-price':
          setprice(Number(event.target.value));
          break;

        case 'product-description':
          setdescription(event.target.value);
          break;

        case 'product-img':
          setpimg(event.target.value);
          break;
        default:
          break;
      }
    } else {
      setCategorieId(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    if (event.target.id === 'submit-p') {
      dispatch(createProduct(title, price, description, pimg, categorieId));
    } else {
      dispatch(createCategorie(name, img));
    }
  };
  return (
    <div className="cards-container outside">
      <h2>添加商品种类</h2>
      <form className="cards-container">
        <TextField
          id="categorie-name"
          label="名称"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="categorie-img"
          label="商品图片（链接形式）"
          variant="standard"
          onChange={handleChange}
        />
        <Button
          id="submit-c"
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          添加
        </Button>
      </form>
      <h2>添加商品</h2>
      <form className="cards-container">
        <TextField
          id="product-title"
          label="名称"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-price"
          label="价格"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-description"
          label="商品描述"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-img"
          label="商品图片（链接形式）"
          variant="standard"
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="product-categorieid">商品分类</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorieId}
            label="Categorie Id"
            onChange={handleChange}
          >
            {categories.map((categorie) => (
              <MenuItem key={categorie.id} value={categorie.id}>
                {categorie.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          id="submit-p"
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          添加
        </Button>
      </form>
    </div>
  );
};

export default Sell;

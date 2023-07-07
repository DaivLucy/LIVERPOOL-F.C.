import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategorieCard from './CategorieCard';
import '../style/home.css';

const Home = () => {
  const categories = useSelector((state) => state.categories);

  return (
    // 渲染组件数据
    <div className="cards-container">
      {categories !== undefined ? categories.map((categorie) => (
        <div key={uuidv4()} className="card">
          {/* 商品分类 */}
          <CategorieCard name={categorie.name} image={categorie.image} id={categorie.id} />
        </div>
      )) : false }
    </div>
  );
};

export default Home;


import Navbar from '../../components/Navbar/Navbar';
import BestSeller from './BestSeller/BestSeller';
import CategoriesStore from './CategoriesStore/CategoriesStore';
import FrontOffer from './FrontOffer/FrontOffer';
import './Home.css';
import FlashSale from './Product/FlashSale';
import Product1 from './Product/Product1';
import Product2 from './Product/Product2';
import Product3 from './Product/Product3';
import Product4 from './Product/Product4';
import ProductImage1 from './Product/ProductImage1';
import ProductImage2 from './Product/ProductImage2';
import ProductImage3 from './Product/ProductImage3';
import Offers1 from './PurpleOffers/Offers1';
import Offers2 from './PurpleOffers/Offers2';
import Offers3 from './PurpleOffers/Offers3';



function Home() {
  return (
    <div className="Home">
      <Navbar/>
    <FrontOffer />
    <Product1/>
    <Offers1/>
    <Offers2/>
    <ProductImage1/>
    <CategoriesStore/>
    <BestSeller/>
    <Product2/>
    <ProductImage2/>
    <Product4/>
    <FlashSale/>
    <Offers3/>
    <ProductImage3/>
    <Product3/>
    
   
</div>
  );
}

export default Home;


import './HomePage.css';
import ProductImage from './components/Product/ProductImage1';
import Offers2 from './components/PurpleOffers/Offers2';
import Offers1 from './components/PurpleOffers/Offers1';
import PaymentOffers from './components/FrontOffer/FrontOffer';
import Offers3 from './components/PurpleOffers/Offers3';
import CategoriesStore from './components/CategoriesStore/CategoriesStore';
import BestSeller from './components/BestSeller/BestSeller';
import Product1 from './components/Product/Product1';
import Product2 from './components/Product/Product2';
import FlashSale from './components/Product/FlashSale';
import Product3 from './components/Product/Product3';
import Product4 from './components/Product/Product4';
import ProductImage2 from './components/Product/ProductImage2';




function App() {
  return (
    <div className="App">

    <PaymentOffers/>
    <Product1/>
    <Offers1/>
    <Offers2/>
    <ProductImage/>
    <CategoriesStore/>
    <BestSeller/>
    <Product2/>
    <ProductImage2/>
    <Product4/>
    <FlashSale/>
    <Offers3/>
    <Product3/>  
    
    </div>
  );
}

export default App;

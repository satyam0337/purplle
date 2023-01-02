// import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontOffer from './FrontOffer/FrontOffer';
import Product1 from './Product/Product1';
import Offers1 from './PurpleOffers/Offers1';
import Offers2 from './PurpleOffers/Offers2';
import Offers3 from './PurpleOffers/Offers3';
import FlashSale from './Product/FlashSale';
import Product2 from './Product/Product2';
import Product4 from './Product/Product4';
import Category from './Category/Category';
import LastPara from './LastPara/LastPara';
import "./Homepage.module.css"
export default function Home() {

   
    return (

<>
<FrontOffer/>
<Product1/>
<Category/>
<FlashSale/>
<Offers1/>
<Product2/>
<Offers2/>
<Product4/>
<Offers3/>

<LastPara/>




    



   







    
</>
      
    )
}


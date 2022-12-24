import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaShoppingBasket } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import { GoStar } from "react-icons/go"
import style from "./Products.module.css"
import Sidebar from './Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'



export default function Products() {
    const [makeup, setmakeup] = useState([])

    const makeupData = () => {
        axios.get(`https://purpllebackend.up.railway.app/product`)
          .then((res) => {
            setmakeup(res.data)
    
          }).catch((e) => {
            console.log(e)
          })
      }

      useEffect(() => {
        makeupData()
    
      }, [])
  return (
    <>
    <Navbar/>
    <div style={{display:"flex",width:"80%",margin:"auto"}}>
     <div style={{width:"15%"}}>
        <Sidebar />
     </div>
    <div id={style.makeup_main_container}>
        {makeup.length > 0 && makeup.map((item) => {
            return (
        <div id={style.makeup_main_div}>
            <div id={style.makeup_img_div}><img src={item.imageUrl} alt="" /></div>
            <div id={style.makeup_name_div}><p>{item.name}</p></div>
            <div id={style.go_star_div}> 
                <GoStar />
                <GoStar />
                <GoStar />
                <GoStar />
                <GoStar />
             </div>
            <div id={style.price_pink_div}><h4>{"₹ " + item.SalePrice}</h4></div>
            <div id={style.main_add_cart_div}>
                <div id={style.add_to_cart_div}>
                <FaShoppingBasket />
                    <p>Add To Cart</p>
                </div>
                <div id={style.hrt_div}>
<HiHeart color='white'/>
                </div>
            </div>
        </div>
            )
        })}
    </div>
    </div>
    <Footer/>
    </>
  )
}
import React from 'react'
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons"
import style from "./Sidebar.module.css"
export default function Sidebar({ makeup, setMakeup, setSkin, setHair, skin, hair }) {
    return (
        <div id={style.sidebar}>
            <div>
                <div className={style.whole_div}>
                    {/* <div><HamburgerIcon marginLeft={"24px"} marginTop={"10px"} /></div> */}
                    <div><h1 style={{ marginTop: "10px", fontWeight: "bolder" }}>Sort By</h1></div>
                </div>

                <div className={style.whole_div}>
                    <div className={style.whole_inside_div}>
                        {/* <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" /></div> */}
                        <div><p>Low to High</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div}>
                    <div className={style.whole_inside_div}>
                        {/* <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" /></div> */}
                        <div><p>High to Low</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>
            </div>
        </div>
    )
}
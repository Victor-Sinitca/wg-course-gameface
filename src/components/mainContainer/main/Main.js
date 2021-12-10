import React from "react";
import dataJson from "../data.json"
import {ProductItem} from "@/components/mainContainer/productItem/ProductItem";


export const Main = () => {
    /*const data = JSON.parse(dataJson)*/
    /*console.log(`${dataJson.data[0].type}`)*/
    const productItems= dataJson.data.map((p, index)=><ProductItem key={index} product={p}/>)





    return (
        <div className="main-container-content" id="main">
            {productItems}
        </div>
    )
}
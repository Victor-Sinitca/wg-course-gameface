import React from "react";
// @ts-ignore
import dataJson from "../data.json"
import {ProductItem} from "@/components/mainContainer/productItem/ProductItem";


export const Main = () => {
    const productItems= dataJson.data.map((p:any, index:number)=><ProductItem key={index} product={p}/>)

    return (
        <div className="main-container-content" id="main">
            {productItems}
        </div>
    )
}

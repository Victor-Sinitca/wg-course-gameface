import React from "react";
import {ProductItem} from "@/components/mainContainer/productItem/ProductItem";
import {useSelector} from "react-redux";
import {IProduct} from "@/interfase/product";
import {getProducts, getUserState} from "@/redux/shopSelector";

//аналог grid-auto-flow  для flexbox
const setPositionProducts=(productData:IProduct[])=>{
    const renderProductData = [] as IProduct[]
    let sectorCount = 0
    let indexCut = null as null | number
    productData.forEach((value, index, array) => {
        if (indexCut !== index) {
            if (sectorCount + value.span < 4) {
                renderProductData.push(value)
                sectorCount = sectorCount + value.span
            } else if (sectorCount + value.span === 4) {
                sectorCount = 0
                renderProductData.push(value)
            } else {
                let count = 1
                let isCut=false
                while (array[index + count]) {
                    if(sectorCount + array[index + count].span === 4){
                        isCut =true
                        indexCut = index + count
                        break
                    }
                    count++
                }
                sectorCount=0
                if(isCut) renderProductData.push(array[index + count])
                else renderProductData.push(value)
            }
        }
    })
    return renderProductData
}

export const Main = () => {
    const userData = useSelector(getUserState)
    let productData = useSelector(getProducts)
    productData=setPositionProducts(productData)
    const productItems = productData.map((p, index) => {
        const isWish = userData.wishlist.includes(p.data.id)
        const isShop = userData.shoppingList.includes(p.data.id)
        return <ProductItem key={index} product={p} isWish={isWish} isShop={isShop}/>
    })
    return (
        <div className="main-container-content" id="main">
            {productItems}
        </div>
    )
}

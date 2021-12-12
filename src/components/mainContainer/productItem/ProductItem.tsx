import React, {FC} from "react";
import {IProduct} from "@/interfase/product";
import {useDispatch} from "react-redux";
import {actionDialog} from "@/redux/productReducer";


type PropsType = {
    product: IProduct,
    isWish: boolean,
    isShop: boolean
}


export const ProductItem: FC<PropsType> = ({product, isWish, isShop}) => {
    const dispatch = useDispatch()
    let wishStyle = "main-container-description_button-like"
    if (isWish) wishStyle = wishStyle + " button-like_active"

    let shopStyle = "main-container-description_button-purchase"
    if (isShop) shopStyle = shopStyle + " button-purchase_active"

    let containerStyle = "main-container-product"
    if (product.span === 2) containerStyle = containerStyle + " main-container-product-span-2"




    const handlerAddProductToWishlist = () => {
        dispatch(actionDialog.addProductToWishlist(product.data.id))
        console.log("handlerAddProductToWishlist")
    }
    const handlerAddProductToShoppingList = () => {
        dispatch(actionDialog.addProductToShoppingList(product.data.id))
        console.log("handlerAddProductToShoppingList")
    }


    return (
        <div className={containerStyle}>
            <div className="main-container-link" style={{backgroundImage:`url(${product.data.images.span_2x1})`}}/>
            <div className="main-container-description">
                <div className="main-container-description-filter">
                    {product.data.filter ?
                        <>
                        <span className="main-container-description_flag" data-country={
                            product.data.filter
                                ? product.data.filter.nation
                                : ''
                        }/>
                            <span className="main-container-description_type" data-type={
                                product.data.filter
                                    ? product.data.filter.type
                                    : ''
                            }/>
                        </> : null
                    }
                    <div className="main-container-description_name">{product.data.name}</div>
                </div>
                <div className="main-container-description_price">
                    {product.data.price.basic.cost} {product.data.price.basic.currency}</div>
                <div onClick={handlerAddProductToShoppingList} className={shopStyle}>
                    <div>{isShop ? "purchase added" : "purchase"}</div>
                </div>
            </div>
            <div onClick={handlerAddProductToWishlist} className={wishStyle}/>
        </div>

    )
}

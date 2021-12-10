import React from "react";


export const ProductItem = ({product}) => {
    const dataType=  product.data.filter  ? product.data.filter.type: ''
    const dataFilter=  product.data.filter  ? product.data.filter.nation : ''
    const flagStyle = () => {
        return {}
    }
    const typeStyle = () => {
        return {}
    }


    return (
        <div className="main-container-product">
            <a className="main-container-link">
                <img className="main-container-link_img" src={product.data.images.span_2x1} alt="Танк"/>
            </a>
            <div className="main-container-description">
                <div className="main-container-description-filter">
                    <span className="main-container-description_flag" data-country={dataType}/>
                    <span className="main-container-description_type" data-type={dataFilter}/>
                    <h2>{product.data.name}</h2>
                </div>
                <div className="main-container-description_price">
                    {product.data.price.basic.cost} {product.data.price.basic.currency}</div>
                <div className="main-container-description_button-purchase">
                    <div>purchase</div>
                </div>
            </div>
            <div className="main-container-description_button-like"/>
        </div>

    )
}
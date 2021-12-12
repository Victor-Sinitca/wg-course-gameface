import React from "react";


export const ProductItem = ({product}) => {

    const flagStyle = () => {
        return {}
    }
    const typeStyle = () => {
        return {}
    }


    return (
        <div className="main-container-product">
            <div className="main-container-link" >
                   <img className="main-container-link_img"  src={product.data.images.span_2x1} alt="Танк"/>
            </div>
            <div className="main-container-description">
                <div className="main-container-description-filter">
                    {product.data.filter?
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
                    </>:null
                    }
                    <div className="main-container-description_name">{product.data.name}</div>
                </div>
                <div className="main-container-description_price">
                    {product.data.price.basic.cost} {product.data.price.basic.currency}</div>
                <div className="main-container-description_button-purchase">
                    <div>purchase</div>
                </div>
            </div>
            <div style={{wight:"80px"}} className="main-container-description_button-like-anim main-container-description_button-like"/>
        </div>

    )
}

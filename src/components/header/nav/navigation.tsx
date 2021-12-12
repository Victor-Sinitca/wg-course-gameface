import React from "react";
import {useSelector} from "react-redux";
import {getUserState} from "@/redux/productSelector";

export const Navigation = () => {
    const userData = useSelector(getUserState)
    return (
        <div className="header-container-nav">
            <a id="wishlistId" className="header-nav-link" href="#">
                <div>Wishlist</div>
                <span className="wishlist-span-container">({userData.wishlist.length})</span>
            </a>
            <a id="shoppingId" className="shopping header-nav-link" href="#">
                <div>Shopping cart</div>
                <span className=" cart-span-container">({userData.shoppingList.length})</span>
            </a>
            <div className="header-nav-account">
                <a className="login header-nav-link" href="#">Login</a>
                <span>or</span>
                <a className="create header-nav-link" href="#">Create account</a>
            </div>
        </div>
    )
}

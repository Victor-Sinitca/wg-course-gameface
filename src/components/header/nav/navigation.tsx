import React from "react";
import {useSelector} from "react-redux";
import {getUserState} from "@/redux/shopSelector";


export const Navigation = () => {
    const userData = useSelector(getUserState)
    return (
        <div className="header-container-nav">
            <a id="wishlistId" className="header-nav-link header-link-wrapper" href="#">
                <div>Wishlist</div>
                <span>({userData.wishlist.length})</span>
            </a>
            <a id="shoppingId" className="header-nav-link header-link-wrapper" href="#">
                <div>Shopping cart</div>
                <span>({userData.shoppingList.length})</span>
            </a>
            <div className="header-nav-account header-link-wrapper">
                <a className="header-nav-link" href="#">Login</a>
                <span>or</span>
                <a className="header-nav-link" href="#">Create account</a>
            </div>
        </div>
    )
}

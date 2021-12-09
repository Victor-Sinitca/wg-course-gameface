import React from "react";

export const Navigation = () => {
    return (
        <div className="header-container-nav">
            <a id="wishlistId" className="header-nav-link" href="#">
                <span>Wishlist</span>
                <span className="wishlist-span-container">(0)</span>
            </a>
            <a id="shoppingId" className="shopping header-nav-link" href="#">
                <span>Shopping cart </span>
                <span className=" cart-span-container">(0)</span>
            </a>
            <div className="header-nav-account">
                <a className="login header-nav-link" href="#">Login</a>
                <span>or</span>
                <a className="create header-nav-link" href="#">Create account</a>
            </div>
        </div>
    )
}

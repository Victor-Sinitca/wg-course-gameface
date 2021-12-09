import React from "react";
import s from "./navigation.css"


export const Navigation = () => {
    return (
        <div className={s.headerContainerNav}>
            <a id="wishlistId" className={s.headerNavLink} href="#">Wishlist
                <span className={s.wishlistSpanContainer}>(0)</span>
            </a>
            <a id="shoppingId" className={`${s.shopping} ${s.headerNavLink}`} href="#">Shopping cart <span
                className={s.cartSpanContainer}>(0)</span></a>
            <div className={s.headerNavAccount}>
                <a className={`${s.login} ${s.headerNavLink}`} href="#">Login</a>
                <span>or</span>
                <a className={`${s.create} ${s.headerNavLink}`} href="#">Create account</a>
            </div>
        </div>
    )
}
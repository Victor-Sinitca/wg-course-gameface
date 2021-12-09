import React from "react";
import HeaderLogo from '../../images/logo/VectorSmartObject.png'
import s from './main.css'

export const Main = () => {
    return <div id="main1" className={s.main}>
        <div className={`${s.mainContainer} ${s.wrapper}`}>
            <div className={s.mainNavContainer}>
                <a className={s.mainNavLogo}></a>
                <nav className={s.mainNavLink}>
                    <a className={s.mainNavLink} type="submit">all</a>
                    <a className={s.mainNavLink} type="submit">vehicles</a>
                    <a className={s.mainNavLink} type="submit">gold</a>
                    <a className={s.mainNavLink} type="submit">premium account</a>
                </nav>
            </div>
            <div className="main-container-content" id="main"></div>
        </div>

    </div>
}
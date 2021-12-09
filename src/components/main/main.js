import React from "react";
import HeaderLogo from '../../images/logo/VectorSmartObject.png'


export const Main = () => {
    return <div id="main1" className="main">
        <div className="main-container wrapper">
            <div className="main-nav-container">
                <a className="main-nav-logo"/>
                <nav className="main-nav-links">
                    <a className="main-nav-link active-link" type="submit">all</a>
                    <a className="main-nav-link" type="submit">vehicles</a>
                    <a className="main-nav-link" type="submit">gold</a>
                    <a className="main-nav-link" type="submit">premium account</a>
                </nav>
            </div>
            <div className="main-container-content" id="main"/>
        </div>

    </div>
}

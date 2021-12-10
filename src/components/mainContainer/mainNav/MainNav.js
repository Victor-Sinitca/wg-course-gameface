import React from "react";

export const MainNav = () => {
    return (
        <div className="main-nav-container">
            <a className="main-nav-logo"/>
            <nav className="main-nav-links">
                <a className="main-nav-link active-link" type="submit">all</a>
                <a className="main-nav-link" type="submit">vehicles</a>
                <a className="main-nav-link" type="submit">gold</a>
                <a className="main-nav-link" type="submit">premium account</a>
            </nav>
        </div>
    )
}

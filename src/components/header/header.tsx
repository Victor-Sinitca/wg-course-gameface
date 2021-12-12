import React from "react";
import {Navigation} from "./nav/navigation";
import {TheLogo} from "./logo/theLogo";


export const Header = () => {

    return <div className="header">
        <div className="header-container">
            <TheLogo/>
            <Navigation/>
        </div>
    </div>

}

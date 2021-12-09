import React from "react";
import s from "./header.css"
import {Navigation} from "./nav/navigation";
import {TheLogo} from "./logo/theLogo";


export const Header = () => {
    return <div className={s.header}>
        <div className={s.headerContainer}>
            <TheLogo/>
            <Navigation/>
        </div>
    </div>
}
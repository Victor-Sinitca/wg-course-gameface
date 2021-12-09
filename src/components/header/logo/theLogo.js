import React from "react";
import s from './theLogo.css'



export const TheLogo = () => {

    return (
        <a className={s.headerContainerLogo}>
            <div className={s.headerLogo}/>
            <h1 className={s.headerText}>premium shop</h1>
        </a>
    )
}
import React from "react";
import {MainNav} from "@/components/mainContainer/mainNav/MainNav";
import {Main} from "@/components/mainContainer/main/Main";


export const MainContainer =()=>{
    return(
        <div id="main1" className="main">
            <div className="main-container wrapper">
                <MainNav/>
                <Main/>
            </div>
        </div>
    )
}